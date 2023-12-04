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
import MangeUsers from "../pages/DashBoard/MangeUsers/MangeUsers";
import AddMeal from "../pages/DashBoard/AddMeal/AddMeal";
import AdminRoute from "./AdminRoute";
import Meals from "../pages/Meals/Meals";
import UpComingMeals from "../pages/UpComingMeals/UpComingMeals";
import AllMeals from "../pages/DashBoard/AllMeals/AllMeals";
import UpdateMeals from "../pages/DashBoard/UpdateMeals/UpdateMeals";
import FiendlyDashBoard from "../pages/DashBoard/FiendlyDashBoard/FiendlyDashBoard";
import ServeMeal from "../pages/DashBoard/ServeMeal/ServeMeal";
import AllReviews from "../pages/DashBoard/AllReviews/AllReviews";

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
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/upcoming-meals",
        element: <UpComingMeals />,
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
        path: "/dashboard",
        element: <FiendlyDashBoard />,
      },
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
        element: <MyReviews />,
      },

      {
        path: "my-reviews/update-reviews/:id",
        element: <EditReview />,
      },

      // Admin DashBoard routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />,
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <MangeUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addMeal",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <div>AdminHome</div>
          </AdminRoute>
        ),
      },

      {
        path: "all-meals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "updateMeals/:id",
        element: (
          <AdminRoute>
            <UpdateMeals />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
      {
        path: "all-reviews",
        element: (
          <AdminRoute>
            <AllReviews/>
          </AdminRoute>
        ),
      },
      {
        path: "serve-meals",
        element: (
          <AdminRoute>
          <ServeMeal/>
          </AdminRoute>
        ),
      },

      {
        path: "upcoming-meals",
        element: (
          <AdminRoute>
            <div>upcoming meals</div>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
