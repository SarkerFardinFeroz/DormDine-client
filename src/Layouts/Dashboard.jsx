import { CiShoppingCart } from "react-icons/ci";
import { FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineUpcoming, MdRateReview } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
const DashBoard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
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
                  Add Items
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
                  Serve Meals
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
