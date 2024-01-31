import { useQuery } from "@tanstack/react-query";
import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import { getSingleMeal } from "../utils/queries";
import { MealDetails } from "../models";
import { Stack, Text, Button, Image } from "@chakra-ui/react";

function MealDetail() {
  const navigate = useNavigate();
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
        <Button
          variant="outline"
          colorScheme="blue"
          size="lg"
          onClick={() => navigate(-1)}
          className="mb-16"
        >
          Back home
        </Button>
        <Text fontSize="5xl">{name}</Text>
      </div>
      <div className="grid md:grid-cols-2 gap-16 my-10 pt-8">
        <Image src={imageUrl} alt={name} />
        <Stack spacing="4">
          <Text fontSize="2xl">
            <Text as="b">Cousine:</Text> {cousine}
          </Text>
          <Text fontSize="2xl">
            <Text as="b">Category:</Text> {category}
          </Text>
          <Text fontSize="2xl">
            <Text as="b">Ingredients:</Text>
            {measuresAndIngredients.map((ing, index) => {
              return (
                <span key={index}>
                  {ing} {index < measuresAndIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </Text>
          <Text fontSize="2xl">
            <Text as="b"> Instructions:</Text>
            {instructions}
          </Text>
        </Stack>
      </div>
    </section>
  );
}

export default MealDetail;
