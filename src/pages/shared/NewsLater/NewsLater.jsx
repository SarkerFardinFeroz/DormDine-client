const NewsLetter = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/7zwRkFx/newsletter.jpg')] bg-cover bg-center  bg-no-repeat rounded-xl text-center my-5">
      <div className="bg-[#1111119c] p-5 md:p-10 rounded-xl">
        <h2 className="text-white font-bold text-2xl md:text-4xl">
          Stay Up to Date
        </h2>
        <p className="text-white mt-3">
          Subscribe to our newsletter to receive our weekly feed.
        </p>
        <div className="bg-[#1111118e] w-max mx-auto mt-8 rounded-lg flex gap-2 md:gap-4 py-1 md:py-2 px-1 md:px-3">
          <input
            type="text"
            className=" w-40 md:w-full py-1 md:py-2 px-1 md:px-3 text-white bg-[#ececec42] outline-none  rounded-lg placeholder:text-white  "
            placeholder="Enter your email"
          />
          <button className="bg-bg-primary  text-white py-1 md:py-3 px-2 md:px-5 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
