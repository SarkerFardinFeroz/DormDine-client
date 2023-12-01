import { Link, NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const {user,logOut}=useAuth()
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/meals"}>Meals</NavLink>
      </li>
      <li>
        <NavLink to={"/upcoming-meals"}>Upcoming Meals</NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b shadow-md">
      <nav className="navbar max-w-[1604px]   py-0  px-4 mx-auto">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar flex items-center justify-between ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="text-xl md:text-3xl font-bold flex items-center  gap-2">
                <img className="w-7 md:w-9" src={"/logo.png"} />
                <p>
                  Dorm<span className="text-[#e20031]">Dine</span>
                </p>
              </div>
              <div className="flex-none hidden  lg:block">
                <ul className="menu menu-horizontal items-center gap-6 text-lg">
                  {navLinks}
                </ul>
              </div>
              <div className="flex items-center  gap-5">
                {user ? (
                  <div className="flex items-center gap-1">
                    <div className="dropdown dropdown-end  ">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle  avatar"
                      >
                        <div className="w-12 rounded-full ">
                          {user.photoURL ? (
                            <img src={user.photoURL} />
                          ) : (
                            <img src="https://i.ibb.co/vkyjrmB/7309681.jpg" />
                          )}
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 bg-white  text-black   shadow menu menu-sm dropdown-content rounded-box w-54 space-y-2  "
                      >
                        <p className="justify-between p-2 pb-0  hover:bg-none">
                          Sign in as :
                        </p>
                        <p className="justify-between border px-2 py-1 hover:bg-none  rounded-xl  ">
                          {user?.displayName}
                        </p>
                        <button className="p-2  duration-200 hover:bg-[#1111] hover:text-red-800 rounded-xl">
                          <NavLink className="hover:text-black p-2 ">
                            Dashboard
                          </NavLink>
                        </button>

                        <button
                          className="p-2 text-center rounded-xl duration-200 hover:bg-[#1111] hover:text-red-800"
                          onClick={handleSignOut}
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                    <button className="btn btn-ghost btn-circle text-xl">
                      <FaBell />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link to={"/login"}>
                      <button className="bg-[#6e1f1f]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg">
                        Join us
                      </button>
                    </Link>
                    <button className="btn btn-ghost btn-circle text-xl">
                      <FaBell />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="drawer-side  z-50  ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay "
            ></label>
            <ul className="menu p-4 md:w-80 min-h-full   gap-4  bg-[#00000093]  text-white  backdrop-blur-sm  ">
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
