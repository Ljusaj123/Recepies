import axios from "axios";
import { Search, RecepiesList } from "../modules";
import { useLoaderData } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";

  const response = await axios.get(`${url}${searchTerm}`);
  return { data: response.data.meals, searchTerm };
};

function Layout() {
  const { data, searchTerm } = useLoaderData();
  console.log(data);
  return (
    <div>
      <Search />
      <RecepiesList meals={data} />
    </div>
  );
}

export default Layout;
