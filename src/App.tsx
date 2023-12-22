import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  MealDetail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleMealLoader } from "./pages/MealDetail.tsx";

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
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "/about",
        errorElement: <SinglePageError />,
        element: <About />,
      },
      {
        path: "/meal/:id",
        errorElement: <SinglePageError />,
        loader: singleMealLoader(queryClient),
        element: <MealDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
