export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
}

export type Meals = {
  meals: Meal[];
};

export interface MealDetails extends Meal {
  strInstructions: string;
}
