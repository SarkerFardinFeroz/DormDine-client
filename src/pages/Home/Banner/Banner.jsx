import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/bannerImg/img1.jpg";
import img2 from "../../../assets/bannerImg/img2.jpg";
import img3 from "../../../assets/bannerImg/img3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="text-center relative ">
      <Carousel autoPlay infiniteLoop>
        <div className="relative">
          <div className=" h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[600px] object-cover " src={img1} />
        </div>
        <div className="relative">
          {" "}
          <div className=" h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[600px] object-cover " src={img2} />
        </div>
        <div className="relative">
          {" "}
          <div className=" h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[600px] object-cover " src={img3} />
        </div>
      </Carousel>
      <div className="absolute top-[30%] left-[30%]  w-max">
        <p className="text-5xl text-white font-bold   p-2">
          Healthy And Best Food For <br /> University Students
        </p>
        <div className="bg-[#111111a9] mt-2  backdrop-blur-lg rounded-t-none   w-max mx-auto   rounded-lg flex gap-2 md:gap-4 py-1 md:py-2 px-1 md:px-3 ">
          <input
            type="text"
            className="border py-1 md:py-2 px-1 md:px-3 text-black outline-none  rounded-lg "
            placeholder="Search"
          />
          <button className="bg-[#e23230]  text-white py-1 md:py-2 px-2 md:px-4 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
