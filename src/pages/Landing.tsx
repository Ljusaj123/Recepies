import axios from "axios";
import { Search, RecepiesList } from "../modules";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchCoctailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${url}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    console.log(request);

    const searchTerm = url.searchParams.get("search") || "";

    await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm));
    return { searchTerm };
  };

function Layout() {
  const { searchTerm } = useLoaderData();
  const { data } = useQuery(searchCoctailsQuery(searchTerm));

  return (
    <>
      <Search searchTerm={searchTerm} />
      <RecepiesList meals={data} />
    </>
  );
}

export default Layout;
