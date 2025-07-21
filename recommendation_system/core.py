# Beautelligent/recommendation_system/core.py

from typing import List, Dict, Any, Optional
import os
import json

# Import necessary components from your package
from .models import Product, RoutineStep, RecommendationRule
from .utils import load_products, load_routine_steps, load_recommendation_rules

# --- Configuration (for data file paths) ---
CURRENT_DIR = os.path.dirname(__file__)
DATA_DIR = os.path.join(CURRENT_DIR, "data")
PRODUCTS_FILE_PATH = os.path.join(DATA_DIR, "products.json")
ROUTINE_STEPS_FILE_PATH = os.path.join(DATA_DIR, "routine_steps.json")
RECOMMENDATION_RULES_FILE_PATH = os.path.join(DATA_DIR, "recommendation_rules.json")

# --- Load data once when the module is imported ---
ALL_PRODUCTS: Dict[str, Product] = load_products(PRODUCTS_FILE_PATH)
ALL_ROUTINE_STEPS: Dict[str, RoutineStep] = load_routine_steps(ROUTINE_STEPS_FILE_PATH)
ALL_RULES: List[RecommendationRule] = load_recommendation_rules(RECOMMENDATION_RULES_FILE_PATH)

def find_best_matching_rule(
    skin_type: str,
    conditions: List[str]
) -> Optional[RecommendationRule]:
    """
    Finds the best matching recommendation rule based on skin type and conditions.
    Prioritizes rules with more matching conditions.
    """
    skin_type = skin_type.lower()
    conditions = [c.lower() for c in conditions] # Normalize input

    best_match_rule: Optional[RecommendationRule] = None
    max_matches: int = -1
    best_rule_condition_count: int = -1 # Track the length of conditions in the rule itself, for specificity

    # First pass: Find rules that perfectly match the skin type and contain all input conditions
    for rule in ALL_RULES:
        rule_skin_type = rule.skin_type.lower()
        rule_conditions = [c.lower() for c in rule.conditions]

        if rule_skin_type == skin_type:
            # Check if all *input* conditions are present in the rule's conditions
            if all(cond in rule_conditions for cond in conditions):
                current_rule_condition_count = len(rule_conditions)

                # Prioritize rules with more matching conditions OR
                # if the number of rule conditions exactly matches input conditions
                if (current_rule_condition_count > best_rule_condition_count) or \
                   (current_rule_condition_count == len(conditions) and current_rule_condition_count > max_matches):
                    max_matches = len(conditions) # Matched all input conditions
                    best_rule_condition_count = current_rule_condition_count
                    best_match_rule = rule

    # If a rule was found that contains all provided conditions, return it.
    if best_match_rule and max_matches == len(conditions):
        return best_match_rule

    # If no rule perfectly covering all conditions, or if the best found was less specific,
    # now look for rules that match the skin type and have *some* overlapping conditions,
    # prioritizing more overlaps. This can also act as a fallback.
    max_matches = -1 # Reset max_matches for this broader search
    # Only continue if a primary best match wasn't found, or if the primary match wasn't perfect for input conditions
    if not best_match_rule or max_matches != len(conditions):
        for rule in ALL_RULES:
            rule_skin_type = rule.skin_type.lower()
            rule_conditions = [c.lower() for c in rule.conditions]

            if rule_skin_type == skin_type:
                current_matches = sum(1 for cond in conditions if cond in rule_conditions)

                # Special case: General rule for skin type with no conditions
                if not conditions and not rule_conditions and rule_skin_type == skin_type:
                    return rule # Found the general skin type rule if no conditions were given

                if current_matches > max_matches:
                    max_matches = current_matches
                    best_match_rule = rule
                # If tied in matches, prefer rule with fewer *total* conditions (more focused)
                elif current_matches == max_matches and best_match_rule and len(rule_conditions) < len(best_match_rule.conditions):
                    best_match_rule = rule

    return best_match_rule


def get_recommendations(skin_type: str, conditions: List[str]) -> Dict[str, Any]:
    """
    Generates personalized skincare recommendations based on skin analysis.

    Args:
        skin_type (str): The detected skin type (e.g., "Oily", "Dry").
        conditions (List[str]): A list of detected skin conditions (e.g., ["Acne", "Pigmentation"]).

    Returns:
        Dict[str, Any]: A dictionary containing recommended products, routines, and tips.
    """
    print(f"\n--- Generating Recommendations for Skin Type: {skin_type}, Conditions: {conditions} ---")

    matching_rule = find_best_matching_rule(skin_type, conditions)

    if not matching_rule:
        print("No specific rule found for the given skin type and conditions.")
        # Fallback to a general "Normal" skin rule if no specific match
        general_rule = find_best_matching_rule("Normal", [])
        if general_rule:
            matching_rule = general_rule
            print("Falling back to general 'Normal' skin recommendations.")
        else:
            print("No general 'Normal' rule available as a fallback. Returning empty recommendations.")
            return {"error": "No suitable rule found.", "products": [], "am_routine": [], "pm_routine": [], "tips": []}


    recommended_products_details = []
    for p_id in matching_rule.recommended_product_ids:
        product = ALL_PRODUCTS.get(p_id)
        if product:
            recommended_products_details.append({
                "id": product.product_id,
                "name": product.name,
                "category": product.category,
                "key_ingredients": product.key_ingredients,
                "benefits": product.benefits,
                "texture": product.texture,
                "application_notes": product.application_notes
            })

    def get_detailed_routine(routine_steps_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        detailed_routine = []
        temp_routine_steps_with_notes = []
        for rule_step_data in routine_steps_data:
            step_id_candidate = rule_step_data.get("step_id")
            # --- START FIX FOR PYLANCE WARNING ---
            if step_id_candidate is None:
                # Log a warning or handle gracefully if step_id is unexpectedly missing
                print(f"Warning: 'step_id' missing in rule_step_data: {rule_step_data}")
                continue # Skip this entry
            
            step_detail = ALL_ROUTINE_STEPS.get(step_id_candidate)
            # --- END FIX FOR PYLANCE WARNING ---

            if step_detail:
                combined_step_data = {
                    "step_id": step_detail.step_id,
                    "name": step_detail.name,
                    "order": step_detail.order,
                    "instructions": step_detail.instructions,
                    "product_category_suggestion": step_detail.product_category_suggestion,
                    "ingredient_suggestion": step_detail.ingredient_suggestion,
                    "notes": rule_step_data.get("notes", "")
                }
                temp_routine_steps_with_notes.append(combined_step_data)

        return sorted(temp_routine_steps_with_notes, key=lambda x: x["order"])


    am_routine = get_detailed_routine(matching_rule.am_routine_steps)
    pm_routine = get_detailed_routine(matching_rule.pm_routine_steps)

    print(f"Applying rule: {matching_rule.rule_id} - {matching_rule.description}")

    return {
        "rule_applied": matching_rule.rule_id,
        "products": recommended_products_details,
        "am_routine": am_routine,
        "pm_routine": pm_routine,
        "tips": matching_rule.tips
    }

# --- Test Block (for direct execution of this script) ---
if __name__ == "__main__":
    # Example 1: Oily, Acne
    print("\n--- TEST CASE 1: Oily Skin with Acne ---")
    recommendations1 = get_recommendations("Oily", ["Acne"])
    print(json.dumps(recommendations1, indent=2))

    # Example 2: Dry, Pigmentation, Dark Spots
    print("\n--- TEST CASE 2: Dry Skin with Pigmentation and Dark Spots ---")
    recommendations2 = get_recommendations("Dry", ["Pigmentation", "Dark Spots"])
    print(json.dumps(recommendations2, indent=2))

    # Example 3: Normal Skin (no specific issues)
    print("\n--- TEST CASE 3: Normal Skin (no issues) ---")
    recommendations3 = get_recommendations("Normal", [])
    print(json.dumps(recommendations3, indent=2))

    # Example 4: Unmatched scenario (will fallback to general/Normal)
    print("\n--- TEST CASE 4: Combination Skin with Redness (unmatched scenario) ---")
    recommendations4 = get_recommendations("Combination", ["Redness"])
    print(json.dumps(recommendations4, indent=2))

    # Example 5: Oily Skin (no conditions, should hit general oily if present, otherwise normal)
    print("\n--- TEST CASE 5: Oily Skin (no conditions) ---")
    recommendations5 = get_recommendations("Oily", [])
    print(json.dumps(recommendations5, indent=2))