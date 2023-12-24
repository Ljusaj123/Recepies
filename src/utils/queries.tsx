import axios from "axios";
export const SearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const DetailsUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const searchCoctailsQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${SearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const getSingleMeal = (id: string) => {
  return {
    queryKey: ["meal", id],
    queryFn: async () => {
      const { data } = await axios.get(`${DetailsUrl}${id}`);
      return data.meals;
    },
  };
};
