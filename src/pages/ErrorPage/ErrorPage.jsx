import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="">
      <div className=" items-center max-w-[1304px] px-4  mx-auto flex-col justify-center lg:flex-row py-28 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full  text-center">
          <div className="w-1/2 mx-auto">
            <Lottie animationData={error404} />
          </div>
        </div>
        <div className="w-full text-center">
          <h1 className="py-4 text-3xl lg:text-4xl font-bold ">
            Looks like you have found the doorway to the great nothing
          </h1>
          <p className="py-4 pb-0 text-base ">
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </p>
          <p className="py-2 text-base ">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <div>
            <Link to={"/"}>
              <button className="w-full  lg:w-auto my-4 rounded-md px-1 sm:px-16 font-semibold btn btn-outline ">
                Go back to Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
