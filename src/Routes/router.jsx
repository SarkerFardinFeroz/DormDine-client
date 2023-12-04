import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MealDetails from "../pages/MealDetailsPage/MealDetails";
import Payment from "../pages/shared/Payment/Payment";
import DashBoard from "../Layouts/DashboardLayout/Dashboard";
import RequestMeal from "../pages/DashBoard/RequestMeal/RequestMeal";
import PrivateRoute from "./PrivetRoute";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import MyReviews from "../pages/DashBoard/MyReviews/MyReviews";
import EditReview from "../components/EditReview/EditReview";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // User DashBoard  Routes
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "requested-meal",
        element: <RequestMeal />,
      },
      {
        path: "my-reviews",
        element:<MyReviews/>,
        // element: <div>what sup</div>,
      },
      {
        path: "my-reviews/update-reviews/:id",
        element:<EditReview/>,
        // element: <div>what sup</div>,
      },

      // Admin DashBoard routes
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "users",
        element: <div>Mange user</div>,
      },
      {
        path: "addMeal",
        element: <div>AddMeal</div>,
      },
      {
        path: "adminHome",
        element: <div>AdminHome</div>,
      },

      {
        path: "all-meals",
        element: <div>all meals</div>,
      },
      {
        path: "all-reviews",
        element: <div>All reviews</div>,
      },
      {
        path: "serve-meals",
        element: <div>serve-meals</div>,
      },
      {
        path: "upcoming-meals",
        element: <div>upcoming meals</div>,
      },
    ],
  },
]);

export default router;
