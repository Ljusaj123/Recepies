import { Link } from "react-router-dom";
import { Meal } from "../models";

export const RecepieCard = (meal: Meal) => {
  const {
    idMeal: id,
    strMeal: name,
    strMealThumb: imageUrl,
    strArea: cousine,
    strCategory: category,
  } = meal;

  return (
    <article className="border-2 rounded-lg grid gap-4">
      <img src={imageUrl} alt={name} className="img rounded-t-md" />
      <div className="py-4 px-2">
        <h4 className="font-bold mb-8">{name}</h4>
        <p className="paragraph">{cousine}</p>
        <p className="paragraph font-extralight">{category}</p>
        <button className="btn">
          <Link to={`/meal/${id}`}>Details</Link>
        </button>
      </div>
    </article>
  );
};
