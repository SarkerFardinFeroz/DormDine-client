const MealCard = ({ item }) => {
  console.log(item);
  const {
    _id,
    title,
    description,
    category,
    image,
    meal_distributor,
    ingredients,
    post_time,
    price,
    rating,
    like,
    meal_request,
  } = item;
  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img
            className="h-[250px] w-full  object-cover object-center"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">
            <span className="font-medium">Price:</span> {price}$
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="bg-[#870000] text-white py-2 px-6 rounded-xl mt-2">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
