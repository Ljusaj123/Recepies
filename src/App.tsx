import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Newsletter,
  Landing,
  Error,
  MealDetail,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as singleMealLoader } from "./pages/MealDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/meal/:id",
        loader: singleMealLoader,
        element: <MealDetail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
