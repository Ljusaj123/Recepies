import { useQuery } from "@tanstack/react-query";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import { getSingleMeal } from "../utils/queries";
import { MealDetails } from "../models";

function MealDetail() {
  const { id } = useLoaderData() as { id: string };

  const { data } = useQuery(getSingleMeal(id));

  if (!data) return <Navigate to="/" />;

  const singleMeal = data[0];

  const {
    strMeal: name,
    strMealThumb: imageUrl,
    strArea: cousine,
    strCategory: category,
    strInstructions: instructions,
  }: MealDetails = singleMeal;

  const ingredients = Object.keys(singleMeal)
    .filter((key) => key.startsWith("strIngredient") && singleMeal[key] !== "")
    .map((key) => singleMeal[key]);

  const measures = Object.keys(singleMeal)
    .filter((key) => key.startsWith("strMeasure") && singleMeal[key] !== " ")
    .map((key) => singleMeal[key]);

  const measuresAndIngredients = ingredients.map((ingredient, index) => {
    const measure = measures[index];
    return measure + " " + ingredient;
  });

  return (
    <section>
      <div className="text-center mb-8">
        <button className="btn mb-16 p-4 active:scale-90 duration-200 rounded capitalize">
          <Link to="/">back home</Link>
        </button>
        <h3 className="">{name}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-16 my-10 pt-8">
        <div className="img-container">
          <img src={imageUrl} alt={name} />
        </div>

        <div>
          <p className="leading-8 mb-4">
            <span className="mr-2 border-b-2">Cousine:</span> {cousine}
          </p>
          <p className="leading-8 mb-4">
            <span className="mr-2 border-b-2">Category:</span> {category}
          </p>
          <p className="leading-8 mb-4">
            <span className="mr-2 border-b-2">Ingredients:</span>

            {measuresAndIngredients.map((ing, index) => {
              return (
                <span key={index}>
                  {ing} {index < measuresAndIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p className="leading-8 mb-4">
            <span className="mr-2 border-b-2"> Instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MealDetail;
