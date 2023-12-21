import { RecepieCard } from "../components/RecepieCard";

export default function RecepiesList({ meals }) {
  if (!meals) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedMeals = meals.map((meal) => {
    const { idMeal, strMeal, strMealThumb, strArea, strCategory } = meal;
    return {
      id: idMeal,
      name: strMeal,
      imageUrl: strMealThumb,
      cousine: strArea,
      category: strCategory,
    };
  });
  return (
    <section className="container grid sm:grid-cols-3 gap-16">
      {formattedMeals.map((meal) => {
        return <RecepieCard key={meal.id} {...meal} />;
      })}
    </section>
  );
}
