import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
//   console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  const noHeaderFooter2 = location.pathname.includes("register");

  return (
    <>
      <div className="font-Inter ">
      
        {noHeaderFooter || noHeaderFooter2 || <Header />}
        <div className="mx-auto  max-w-[1604px] px-2">
          <Outlet />
        </div>
        {noHeaderFooter || noHeaderFooter2 || <Footer />}
      </div>
    </>
  );
};

export default Main;
