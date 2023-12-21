import { Link } from "react-router-dom";

export const RecepieCard = ({ id, name, imageUrl, cousine, category }) => {
  return (
    <article className="border-2 rounded-lg grid gap-4">
      <img src={imageUrl} alt={name} className="img rounded-t-md" />
      <div className="py-4 px-2">
        <h4 className="font-bold">{name}</h4>
        <p className="my-4">{cousine}</p>
        <p>{category}</p>
        <button className="btn py-2 px-4 active:scale-90 duration-200 rounded mt-8">
          <Link to={`/meal/${id}`}>Details</Link>
        </button>
      </div>
    </article>
  );
};
