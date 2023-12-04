import { CiShoppingCart } from "react-icons/ci";
import { FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineUpcoming, MdRateReview } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import ServeMeal from "../../pages/DashBoard/ServeMeal/ServeMeal";
// import useAdmin from "../../hooks/useAdmin";
const DashBoard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  // const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-bg-primary">
        <ul className="menu p-4">
          <li>
            <NavLink to="dashboard">
            
            </NavLink>
          </li>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addMeal">
                  <FaUtensils></FaUtensils>
                  Add Meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-meals">
                  <FaList></FaList>
                  All Meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-reviews">
                  <MdRateReview />
                  All Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/serve-meals">
                  <GiHotMeal />
                 Serve Meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/upcoming-meals">
                  <MdOutlineUpcoming />
                  Upcoming Meals
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/requested-meal">
                  <CiShoppingCart />
                  Requested meals ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-reviews">
                  <MdRateReview />
                  My Reviews
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
