import { getSingleMeal, searchCoctailsQuery } from "./queries";

export const SearchLoader =
  (queryClient: any) =>
  async ({ request }: any) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";

    await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm));
    return { searchTerm };
  };

export const DetailsLoader =
  (queryClient: any) =>
  async ({ params }: any) => {
    console.log(params);
    const { id } = params;

    await queryClient.ensureQueryData(getSingleMeal(id));
    return { id };
  };
