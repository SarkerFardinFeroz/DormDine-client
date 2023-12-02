import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      className="  "
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the meals"
      strength={-200}
    >
      <div className="hero h-[200px] ">
        <div className="hero-content   bg-[#111111a1] w-full  text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 lg:text-3xl font-bold uppercase tracking-widest">
              {title}
            </h1>
            <p className="mb-5">We Are providing Breakfast, lunch and Dinner</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
