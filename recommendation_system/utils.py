# Beautelligent/recommendation_system/utils.py

import json
import os
from typing import List, Dict, Any, Type, TypeVar

from Beautelligent.recommendation_system.models import Product, RoutineStep, RecommendationRule
 # Import the classes from models.py

T = TypeVar('T', Product, RoutineStep, RecommendationRule)

def load_json_data(filepath: str, item_type: Type[T]) -> List[T]:
    """
    Loads JSON data from a file and converts each item into an instance of the specified item_type class.

    Args:
        filepath (str): The path to the JSON file.
        item_type (Type[T]): The class to instantiate for each item (e.g., Product, RoutineStep, RecommendationRule).

    Returns:
        List[T]: A list of instances of the specified item_type.
    """
    if not os.path.exists(filepath):
        print(f"Error: File not found at {filepath}")
        return []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if not isinstance(data, list):
                print(f"Warning: Expected a list in {filepath}, but got {type(data)}. Returning empty list.")
                return []
            return [item_type(item) for item in data]
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {filepath}: {e}")
        return []
    except Exception as e:
        print(f"An unexpected error occurred while loading {filepath}: {e}")
        return []

# --- Specific data loading functions ---

def load_products(filepath: str) -> Dict[str, Product]:
    """Loads products from JSON and returns them as a dictionary mapped by product_id."""
    products_list = load_json_data(filepath, Product)
    return {p.product_id: p for p in products_list}

def load_routine_steps(filepath: str) -> Dict[str, RoutineStep]:
    """Loads routine steps from JSON and returns them as a dictionary mapped by step_id."""
    steps_list = load_json_data(filepath, RoutineStep)
    return {s.step_id: s for s in steps_list}

def load_recommendation_rules(filepath: str) -> List[RecommendationRule]:
    """Loads recommendation rules from JSON."""
    return load_json_data(filepath, RecommendationRule)


# testing module


if __name__ == "__main__":

    CURRENT_DIR = os.path.dirname(__file__)
    DATA_DIR = os.path.join(CURRENT_DIR, "data")
    PRODUCTS_FILE = os.path.join(DATA_DIR, "products.json")
    ROUTINE_STEPS_FILE = os.path.join(DATA_DIR, "routine_steps.json")
    RULES_FILE = os.path.join(DATA_DIR, "recommendation_rules.json")


    print("--- Loading Products ---")
    products = load_products(PRODUCTS_FILE)
    if products:
        print(f"Loaded {len(products)} products.")
        for product_id, product in list(products.items())[:2]: # Print first 2 for brevity
            print(f"- {product.name} (ID: {product.product_id}, Category: {product.category})")
    else:
        print("No products loaded or error occurred.")

    print("\n--- Loading Routine Steps ---")
    routine_steps = load_routine_steps(ROUTINE_STEPS_FILE)
    if routine_steps:
        print(f"Loaded {len(routine_steps)} routine steps.")
        for step_id, step in list(routine_steps.items())[:2]: # Print first 2
            print(f"- {step.name} (ID: {step.step_id}, Order: {step.order})")
    else:
        print("No routine steps loaded or error occurred.")

    print("\n--- Loading Recommendation Rules ---")
    rules = load_recommendation_rules(RULES_FILE)
    if rules:
        print(f"Loaded {len(rules)} rules.")
        for rule in rules[:2]: # Print first 2
            print(f"- Rule ID: {rule.rule_id}, Skin Type: {rule.skin_type}, Conditions: {rule.conditions}")
            print(f"  Recommended Products (IDs): {rule.recommended_product_ids}")
    else:
        print("No rules loaded or error occurred.")

        # python -m Beautelligent.recommendation_system.utils