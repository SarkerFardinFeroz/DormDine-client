import { FaEdit } from "react-icons/fa";
import useMeals from "../../hooks/useMeals";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TablularUpcoming = () => {
  const [meals, loading, refetch] = useMeals();
  const axiosSecure = useAxiosSecure();
  const upcomingMeals = meals.filter((meal) => meal.upcoming === true);
  const handlePublish = (id) => {
    const isValidlike = meals.find((meal) => meal._id === id);
    if (isValidlike.like < 10) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Minimum publishable: 10 or above",
        ShowConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    axiosSecure.put(`/meals/update/${id}`, { upcoming: false }).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Published successfully",
          ShowConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Meal title</th>
              <th className="text-center">Likes Count</th>

              <th className="text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {upcomingMeals.map((item, index) => (
              <tr key={item._id}>
                <td className="text-center">
                  <img
                    src={item.image}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </td>
                <td className="text-center">{item.title}</td>
                <td className="text-center">{item.like}</td>
                <td className="text-center">
                  <button
                    onClick={() => handlePublish(item._id)}
                    className="btn btn-ghost btn-lg bg-[#8f4d4d]"
                  >
                    Publish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablularUpcoming;
