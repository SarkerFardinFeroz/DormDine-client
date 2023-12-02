import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MealsTab from "./MealsTab";
import { Link, useParams } from "react-router-dom";
import useMeals from "../../../hooks/useMeals";

const MealsByCat = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [meals, loading] = useMeals();
  const breakfast = meals.filter((item) => item.category === "breakfast");
  const lunch = meals.filter((item) => item.category === "lunch");
  const dinner = meals.filter((item) => item.category === "dinner");

  return (
    <div className="mt-1">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>
        <TabPanel>
          <MealsTab loading={loading} items={breakfast} />
        </TabPanel>
        <TabPanel>
          <MealsTab loading={loading} items={lunch} />
        </TabPanel>
        <TabPanel>
          <MealsTab loading={loading} items={dinner} />
        </TabPanel>
      </Tabs>
      <div className="flex items-center justify-center">
        <Link to={"/meals"}>
          <button className=" py-2 px-5 rounded-xl my-4  bg-bg-primary text-white">
            Browse All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MealsByCat;
