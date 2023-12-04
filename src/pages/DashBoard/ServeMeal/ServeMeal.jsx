import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const ServeMeal = () => {
  const axiosPublic = useAxiosPublic();
const {user} = useAuth()
  const {
    data: requestedMeals = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["requestedMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts/allCarts`);
      return res.data;
    },
  });

  const serveMeal = async (mealId, mealStatus) => {
    if (mealStatus === "served") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Meal Already Served",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const res = await axiosPublic.put(`/carts/requestedMeals/serve/${mealId}`, {
      mealStatus: "served",
    });
    if (res.data.modifiedCount) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Meal Served",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    refetch();
  };

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Meal title</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Serve Button</th>
          </tr>
        </thead>
        <tbody>
          {requestedMeals.map((meal) => (
            <tr key={meal._id}>
              <td>{meal.title}</td>
              <td>{meal.email}</td>
              <td>{meal.name}</td>
              <td>{meal.mealStatus}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => serveMeal(meal._id, meal.mealStatus)}
                >
                  Serve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServeMeal;
