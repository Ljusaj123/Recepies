import { Search, RecepiesList } from "../components";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchCoctailsQuery } from "../utils/queries";

function Layout() {
  const { searchTerm } = useLoaderData() as { searchTerm: string };
  const { data } = useQuery(searchCoctailsQuery(searchTerm));

  return (
    <>
      <Search searchTerm={searchTerm} />
      <RecepiesList meals={data} />
    </>
  );
}

export default Layout;
