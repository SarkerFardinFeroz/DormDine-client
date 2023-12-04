import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useMeals from "../../../hooks/useMeals";
import useAllReview from "../../../hooks/useAllReview";

const MyReviews = () => {
  const { user } = useAuth();
  const [meals] = useMeals();

  const [allReview] = useAllReview();
  const userReview = allReview.filter(
    (currentReview) => currentReview?.email == user?.email
  );


  return (
    <div>
      <div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Meal Title</th>
                <th>Likes Count</th>
                <th>Reviews Count</th>
                <th>View Meal</th>
                <th>Edit Meal</th>
              </tr>
            </thead>
            <tbody>
              {userReview.map((item, idx) => {
                const matchingMenuItem = meals.find((mealsItem) => {
                  return mealsItem._id === item.menuId;
                });

                if (matchingMenuItem) {
                  return (
                    <tr key={idx}>
                      <th>{matchingMenuItem.title}</th>
                      <td>{matchingMenuItem.like}</td>
                      <td>{matchingMenuItem.review}</td>
                      <td>${matchingMenuItem.price}</td>

                      <th>
                        <Link to={`update-reviews/${item._id}`}>
                          <button className="btn btn-ghost btn-lg bg-[#1111]">
                            <FaEdit className="text-red-600 "></FaEdit>
                          </button>
                        </Link>
                      </th>
                    </tr>
                  );
                }

                return null; // Added to handle the case where there's no matching menu item
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
