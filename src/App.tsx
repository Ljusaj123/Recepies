import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HomeLayout,
  Landing,
  Error,
  MealDetail,
  SinglePageError,
} from "./pages";

import { DetailsLoader, SearchLoader } from "./utils/loaders.tsx";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: SearchLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "/meal/:id",
        errorElement: <SinglePageError />,
        loader: DetailsLoader(queryClient),
        element: <MealDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
