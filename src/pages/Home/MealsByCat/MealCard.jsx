import { Link } from "react-router-dom";

const MealCard = ({ item }) => {
  console.log(item);
  const {
    _id,
    title,
    description,
    image,
    price,
    rating,
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
            <span className="font-medium">Price:</span> ${price}
          </h2>
          <h2 className="card-title">
            <span className="font-medium">Rating:</span> {rating}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            
            <Link to={`/meal-details/${_id}`}>
            <button className="bg-[#870000] text-white py-2 px-6 rounded-xl mt-2">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
