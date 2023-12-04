import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useMeals from "../../../hooks/useMeals";
import useAllReview from "../../../hooks/useAllReview";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllReviews = () => {
  const [meals] = useMeals();
  const [allReview, , allReviewRefetch] = useAllReview();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/reviews/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          allReviewRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Review has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>DormDine | All Reviews</title>
      </Helmet>
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
                <th>Delete Review</th>
              </tr>
            </thead>
            <tbody>
              {allReview.map((item, idx) => {
                const matchingMenuItem = meals.find((mealsItem) => {
                  return mealsItem._id === item.menuId;
                });

                if (matchingMenuItem) {
                  return (
                    <tr key={idx}>
                      <th>{matchingMenuItem.title}</th>
                      <td>{matchingMenuItem.like}</td>
                      <td>{matchingMenuItem.review}</td>
                      <td className="text-center">
                        <Link to={`/meal-details/${matchingMenuItem._id}`}>
                          <button className="btn btn-ghost btn-lg bg-[#8f4d4d]">
                            <FaEye className="text-white  "></FaEye>
                          </button>
                        </Link>
                      </td>

                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-ghost btn-lg bg-[#1111]"
                        >
                          <FaTrash className="text-red-600 "></FaTrash>
                        </button>
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

export default AllReviews;
