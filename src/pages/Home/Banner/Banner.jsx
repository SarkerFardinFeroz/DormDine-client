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
          <div className=" h-[300px]  lg:h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[300px]  lg:h-[600px] object-cover " src={img1} />
        </div>
        <div className="relative">
          {" "}
          <div className=" h-[300px]  lg:h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[300px]  lg:h-[600px] object-cover " src={img2} />
        </div>
        <div className="relative">
          {" "}
          <div className="  h-[300px]  lg:h-[600px] w-full bg-[#11111163] absolute"></div>
          <img className=" h-[300px]  lg:h-[600px] object-cover " src={img3} />
        </div>
      </Carousel>
      <div className="absolute top-[20%] left-[10%]    md:top-[20%] md:left-[23%]  lg:top-[30%] lg:left-[30%]  w-max">
        <p className=" md:text-3xl lg:text-5xl text-white font-bold   p-2">
          Healthy And Best Food For <br /> University Students
        </p>
        <div className="bg-[#111111a9] mt-2  backdrop-blur-lg w-max mx-auto   rounded-lg  gap-1 md:gap-4 py-1 md:py-2 px-0 md:px-3 flex flexSm ">
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
