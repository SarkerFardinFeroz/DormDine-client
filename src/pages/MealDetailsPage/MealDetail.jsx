import React from "react";
import PropTypes from "prop-types";

const MealDetail = ({ meal, refetch }) => {
  const {
    _id,
    title,
    description,
    category,
    image,
    price,
    rating,
    like,
    distributor_name,
    distributor_email,
    ingredients,
    post_time,
  } = meal;

  return (
    <div className="my-20">
      <div>
        <img src={image} className="h-[600px] w-full object-cover" />
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
      <div>
        <h4 className="text-lg">
          <span className="font-semibold">Category :</span> {category}
        </h4>
        <h4 className="text-lg">
          <span className="font-semibold">Price :</span> ${price}
        </h4>
        <h4 className="text-lg">
          <span className="font-semibold">Date :</span> {post_time}
        </h4>
        <h4 className="text-lg">
          <span className="font-semibold">Like :</span> {like}
        </h4>
      </div>
    </div>
  );
};
MealDetail.propTypes = {
  meal: PropTypes.object,
};
export default MealDetail;
