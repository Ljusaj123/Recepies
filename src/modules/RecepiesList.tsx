import { RecepieCard } from "../components/RecepieCard";
import { Meal, Meals } from "../models";

export default function RecepiesList({ meals }: Meals) {
  if (!meals) {
    return (
      <h4 className="text-center container">No matching cocktails found...</h4>
    );
  }
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mt-24">
      {meals.map((meal: Meal) => {
        return <RecepieCard key={meal.idMeal} {...meal} />;
      })}
    </section>
  );
}
