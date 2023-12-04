import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Review from "./Review";
import Cover from "../../components/Cover/Cover";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Reviews from "./Reviews";
import useUser from "../../hooks/useUser";
import useCart from "../../hooks/useCart";

const MealDetail = ({ meal, refetchMeal, reviews, loading, refetchReview }) => {
  const axiosSecure = useAxiosSecure();
  const [allUsers] = useUser();
  const {
    _id,
    title,
    distributor_email,
    description,
    category,
    image,
    price,
    rating: mealRating,
    like,
    distributor_name,
    ingredients,
    post_time,
    review,
  } = meal;

  const id = _id;
  const { user } = useAuth();
  const [, cartRefetch] = useCart();
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewText = e.target.elements.reviewText.value;
    axiosSecure
      .post(`/reviews`, {
        title,
        menuId: id,
        name: user?.displayName,
        email: user?.email,
        userImage: user?.photoURL,
        mealImage: image,
        rating: 5,
        details: reviewText,
      })
      .then((res) => {
        if (res.data.insertedId) {
          const updateReviews = review + 1;
          axiosSecure
            .put(`/menu/reviews/${_id}`, {
              review: updateReviews,
            })
            .then((res) => {
              const response = res.data;
              refetchReview();
              if (response[1].status === 200) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Review Submitted",
                  ShowConfirmButton: false,
                  timer: 1500,
                });
              } else {
                console.log("Failed to post review");
              }
            });
        }
      });
  };

  const handleLikeSubmit = async (e) => {
    e.preventDefault();
    if (meal?.likesBy?.includes(user?.email)) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Already Liked!",
        ShowConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const likeBy = meal.likesBy
      ? [...meal.likesBy, user?.email]
      : [user?.email];
    axiosSecure
      .put(`/like/${id}`, { likesBy: likeBy })
      .then((res) => console.log(res));
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: " Liked!",
      ShowConfirmButton: false,
      timer: 1500,
    });
    refetchMeal();
  };

  const handleRequestMeal = async () => {
    refetchMeal();
    const userType = allUsers.find(
      (currentUser) => currentUser?.email.toLowerCase() === user?.email.toLowerCase()
    );

    if (
      userType?.subscription !== "gold" &&
      userType?.subscription !== "silver" &&
      userType?.subscription !== "platinum"
    ) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "You dont hold any package yet ",
        ShowConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    axiosSecure
      .post("/carts", {
        title: title,
        menuId: id,
        name: user?.displayName,
        email: user?.email,
        userImage: user?.displayURL,
        mealImage: image,
        price,
        like,
        subscription: userType?.subscription,
        distributor_name,
        distributor_email,
        mealStatus: "pending",
      })
      .then((res) => {
        if (res.data.insertedId) {
          cartRefetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Meal Requested ",
            ShowConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-20">
      <div>
        <img src={image} className="h-[600px] w-full object-cover" />
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg">
            <span className="font-semibold">Category :</span> {category}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold">Price :</span> ${price}
          </h4>

          <h4 className="text-lg">
            <span className="font-semibold">Rating :</span> {mealRating}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold">Date :</span> {post_time}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold">Like :</span> {like}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold">Reviews :</span> {reviews?.length}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold">Distributor :</span>{" "}
            {distributor_name}
          </h4>
        </div>
        <div>
          <div className="text-3xl md:text-4xl text-orange-400">
            <Rating
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
              initialRating={mealRating}
              readonly
            />
          </div>

          <div className="flex justify-end items-center">
            <button className="text-3xl" onClick={handleLikeSubmit}>
              {meal.likesBy?.includes(user?.email) ? (
                <IoIosHeart />
              ) : (
                <IoIosHeartEmpty />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className="font-bold text-lg"> Ingredients : </span>

          {ingredients}
        </div>
        <div>
          <span className="font-bold text-lg"> Description :</span>
          <br />
          {description}
        </div>
        <div className="mt-5 mb-10">
          {/*Meal request button(require login): */}
          {!user ? (
            <button className="py-2 px-5 rounded-xl bg-[#7575758c] text-white">
              To Request Meal you need to login |
              <Link to={"/login"}>
                <span className="text-blue-800"> Login</span>
              </Link>
            </button>
          ) : (
            <button
              onClick={handleRequestMeal}
              className="py-2 px-5 rounded-xl bg-[#871900] text-white"
            >
              Request Meal
            </button>
          )}
        </div>
        {user ? <Review handleReviewSubmit={handleReviewSubmit} /> : ""}
        <div className=" mt-10">
          <Cover
            img={"https://i.ibb.co/7zwRkFx/newsletter.jpg"}
            title="Reviews"
          />
        </div>

        {loading ? (
          <div className="grid justify-center items-center h-[300px]">
            <span className="loading loading-infinity loading-lg text-[D1A054 w-[60px]"></span>
          </div>
        ) : (
          reviews.map((reviews, idx) => (
            <Reviews key={idx} reviews={reviews} loading={loading} />
          ))
        )}
      </div>
    </div>
  );
};

export default MealDetail;
