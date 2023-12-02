import MealCard from './MealCard';

const MealsTab = ({ items, loading }) => {
    
    return (
        <>
        {loading ? (
          <div className="grid justify-center items-center h-[300px]">
            <span className="loading loading-infinity loading-lg text-[D1A054 w-[60px]"></span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 p-3 ">
            {items.map((item) => (
              <MealCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </>
    );
};

export default MealsTab;