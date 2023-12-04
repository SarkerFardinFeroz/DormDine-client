import { useEffect, useState } from "react";
import useMeals from "../../hooks/useMeals";
import MealsTab from "../Home/MealsByCat/MealsTab";
import Cover from "../../components/Cover/Cover";
import { FiSearch } from "react-icons/fi";
import Lottie from "lottie-react";
import emptyData from "../../assets/Empthydata.json";

const Meals = () => {
  const [meals, loading, refetch] = useMeals();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const image =
    "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const filterMeals = () => {
    let filteredMeals = meals;

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-").map(Number);

      filteredMeals = filteredMeals.filter(
        (meal) => meal.price >= min && meal.price <= max
      );
    }

    if (selectedCategory) {
      filteredMeals = filteredMeals.filter(
        (meal) => meal.category === selectedCategory
      );
    }

    filteredMeals = filteredMeals.filter((meal) =>
      meal.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredMeals(filteredMeals);
  };

  useEffect(() => {
    filterMeals();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterMeals();
  };

  return (
    <div>
      <div className="my-5">
        <Cover img={image} title="Meals" />
        <div className="flex items-center">
          <div className="bg-zinc-800 basis-[30%] mx-auto mt-4 rounded-lg flex gap-2 lg:gap-4 py-1 md:py-2 px-2 lg:w-[500px] relative duration-200">
            <form className="w-[80%] lg:w-[85%]" onSubmit={handleSubmit}>
              <input
                type="text"
                className="lg:w-full py-1 md:py-2 px-1 md:px-3 text-white bg-transparent outline-none rounded-lg placeholder:text-white"
                placeholder="Search here"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#794aff] absolute right-0 top-0 text-white py-3 md:py-5 px-5 md:px-8 rounded-lg rounded-l-none duration-300 active:scale-95"
              >
                <FiSearch />
              </button>
            </form>
          </div>

          <div className="">
            <select
              className="text-black bg-transparent outline-none rounded-lg border w-[200px] py-3"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          <div className="ml-2">
            <select
              className="text-black bg-transparent outline-none rounded-lg border w-[200px] py-3"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="">All Price Ranges</option>
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="100-150">100-150</option>
              {/* Add more ranges as needed */}
            </select>
          </div>
        </div>
      </div>

      <div>
        {filteredMeals?.length === 0 ? (
          <div className="w-96 mx-auto">
            <Lottie animationData={emptyData} />
            <p className="text-center">
              No results found. Please refine your search.
            </p>
          </div>
        ) : (
          <MealsTab items={filteredMeals} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Meals;
