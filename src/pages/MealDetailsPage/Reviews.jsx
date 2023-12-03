const Reviews = ({ reviews, loading }) => {
  const { name, email, userImage, details } = reviews;
  return (
    <div className="border my-4 p-4 rounded-lg">
      <div className="flex items-center gap-3">
        <img className="w-[50px] h-[50px] rounded-full" src={userImage} />
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div className="mt-3">
        <span className="font-bold ">Review :</span>
        <br />
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Reviews;
