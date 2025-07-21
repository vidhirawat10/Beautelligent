# Beautelligent/main_app.py (Example structure)

import cv2
import numpy as np
import os
from typing import Optional, Dict, Any # <--- ADD THIS LINE

# Import your recommendation system's core function
from Beautelligent.recommendation_system.core import get_recommendations

# --- Global variable for dummy ML analysis counter ---
# Define dummy_analysis_counter at the module level so it's truly global
dummy_analysis_counter = 0

def run_ml_analysis(image_path: Optional[str] = None, frame: Optional[np.ndarray] = None) -> Dict[str, Any]:
    """
    Simulates the output of your ML skin analysis model.
    Replace this with your actual ML model's inference code.
    """
    print("\nRunning simulated ML analysis...")
    # In a real scenario, your ML model would process the 'frame' or 'image_path'
    # and return real detected skin type and conditions.

    # For demonstration, we'll cycle through a few outputs
    global dummy_analysis_counter # <--- Keep this, now that it's defined globally

    if dummy_analysis_counter == 0:
        print("Simulated ML: Oily, Acne")
        dummy_analysis_counter = 1
        return {"skin_type": "Oily", "conditions": ["Acne"]}
    elif dummy_analysis_counter == 1:
        print("Simulated ML: Dry, Pigmentation, Dark Spots")
        dummy_analysis_counter = 2
        return {"skin_type": "Dry", "conditions": ["Pigmentation", "Dark Spots"]}
    elif dummy_analysis_counter == 2:
        print("Simulated ML: Normal, No Issues")
        dummy_analysis_counter = 3
        return {"skin_type": "Normal", "conditions": []}
    else:
        print("Simulated ML: Combination, Redness")
        dummy_analysis_counter = 0 # Reset for cycling
        return {"skin_type": "Combination", "conditions": ["Redness"]}


def main():
    print("Starting Beautelligent Application...")

    # --- Simulated ML Analysis Loop for Demonstration ---
    # We'll run a few cycles to show different recommendations
    for _ in range(4):
        ml_output = run_ml_analysis() # Get simulated ML results

        # --- Step 1: Extract ML Outputs ---
        detected_skin_type = ml_output.get("skin_type")
        detected_conditions = ml_output.get("conditions", [])

        if not detected_skin_type:
            print("ML analysis did not provide skin type. Cannot recommend.")
            continue

        # --- Step 2: Call the Recommendation System ---
        recommendations = get_recommendations(detected_skin_type, detected_conditions)

        # --- Step 3: Display Recommendations (Simplified Console Output) ---
        print("\n" + "="*50)
        print(f"PERSONALIZED SKINCARE RECOMMENDATIONS")
        print(f"Detected Skin Type: {detected_skin_type}")
        print(f"Detected Conditions: {', '.join(detected_conditions) if detected_conditions else 'None'}")
        print("="*50)

        if recommendations.get("error"):
            print(f"Error: {recommendations['error']}")
        else:
            print("\n--- Recommended Products ---")
            if recommendations["products"]:
                for i, product in enumerate(recommendations["products"]):
                    print(f"{i+1}. {product['name']} ({product['category']})")
                    print(f"   Ingredients: {', '.join(product['key_ingredients'])}")
                    print(f"   Benefits: {', '.join(product['benefits'])}")
                    print(f"   Texture: {product['texture']}")
                    print(f"   Usage: {product['application_notes']}")
                    print("-" * 20)
            else:
                print("No specific products recommended.")

            print("\n--- Morning Routine ---")
            if recommendations["am_routine"]:
                for i, step in enumerate(recommendations["am_routine"]):
                    print(f"{i+1}. {step['name']}: {step['instructions']}")
                    if step.get('notes'):
                        print(f"   (Specific Tip: {step['notes']})")
                    if step.get('product_category_suggestion'):
                        print(f"   Product Type: {step['product_category_suggestion']}")
                    print("-" * 20)
            else:
                print("No specific morning routine recommended.")


            print("\n--- Night Routine ---")
            if recommendations["pm_routine"]:
                for i, step in enumerate(recommendations["pm_routine"]):
                    print(f"{i+1}. {step['name']}: {step['instructions']}")
                    if step.get('notes'):
                        print(f"   (Specific Tip: {step['notes']})")
                    if step.get('product_category_suggestion'):
                        print(f"   Product Type: {step['product_category_suggestion']}")
                    print("-" * 20)
            else:
                print("No specific night routine recommended.")

            print("\n--- General Tips ---")
            if recommendations["tips"]:
                for i, tip in enumerate(recommendations["tips"]):
                    print(f"{i+1}. {tip}")
            else:
                print("No specific tips provided.")

        print("\n" + "="*50 + "\n")
        input("Press Enter to run next simulated analysis...") # Wait for user input


if __name__ == "__main__":
    main()