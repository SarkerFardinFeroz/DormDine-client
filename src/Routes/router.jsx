import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MealDetails from "../pages/MealDetailsPage/MealDetails";
import Payment from "../pages/shared/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/meal-details/:id",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meal-details/${params.id}`),
      },
      {
        path: "/checkout/:type",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
