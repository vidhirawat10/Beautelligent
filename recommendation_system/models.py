# Beautelligent/recommendation_system/models.py

from typing import List, Dict, Any, Optional

class Product:
    """Represents a skincare product."""
    def __init__(self, data: Dict[str, Any]):
        self.product_id: str = data.get("product_id", "")
        self.name: str = data.get("name", "Unknown Product")
        self.category: str = data.get("category", "")
        self.key_ingredients: List[str] = data.get("key_ingredients", [])
        self.benefits: List[str] = data.get("benefits", [])
        self.texture: str = data.get("texture", "")
        self.skin_types_suited_for: List[str] = data.get("skin_types_suited_for", [])
        self.concerns_addressed: List[str] = data.get("concerns_addressed", [])
        self.application_notes: str = data.get("application_notes", "")

    def __repr__(self):
        return f"Product(id='{self.product_id}', name='{self.name}')"

class RoutineStep:
    """Represents a general routine step."""
    def __init__(self, data: Dict[str, Any]):
        self.step_id: str = data.get("step_id", "")
        self.name: str = data.get("name", "Unknown Step")
        self.time_of_day: List[str] = data.get("time_of_day", [])
        self.order: int = data.get("order", 0)
        self.instructions: str = data.get("instructions", "")
        self.product_category_suggestion: str = data.get("product_category_suggestion", "")
        self.ingredient_suggestion: Optional[str] = data.get("ingredient_suggestion", None)

    def __repr__(self):
        return f"RoutineStep(id='{self.step_id}', name='{self.name}')"

class RecommendationRule:
    """Represents a rule for generating skincare recommendations."""
    def __init__(self, data: Dict[str, Any]):
        self.rule_id: str = data.get("rule_id", "")
        self.skin_type: str = data.get("skin_type", "")
        self.conditions: List[str] = data.get("conditions", [])
        self.description: str = data.get("description", "")
        self.recommendations: Dict[str, Any] = data.get("recommendations", {})

        # Parse nested recommendations for easier access
        self.recommended_product_ids: List[str] = [p["product_id"] for p in self.recommendations.get("products", [])]
        self.am_routine_steps: List[Dict[str, Any]] = self.recommendations.get("am_routine", [])
        self.pm_routine_steps: List[Dict[str, Any]] = self.recommendations.get("pm_routine", [])
        self.tips: List[str] = self.recommendations.get("tips", [])

    def __repr__(self):
        return f"RecommendationRule(id='{self.rule_id}', skin_type='{self.skin_type}', conditions={self.conditions})"