import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import useMeals from "../../../hooks/useMeals";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllMeals = () => {
  const [meals, , refetch] = useMeals();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
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
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
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
  <title>DormDine | All Meals</title>
</Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">Likes Count</th>
                <th className="text-center">Reviews Count</th>
                <th className="text-center">Distributor Name </th>
                <th className="text-center">Distributor Email</th>
                <th className="text-center">Meal title</th>
                <th className="text-center">Price</th>
                <th className="text-center">View Details</th>
                <th className="text-center">Update</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((item, index) => (
                <tr key={item._id}>
                
                  <td className="text-center">{item.like}</td>
                  <td className="text-center">{item.review}</td>
                  <td className="text-center">{item.mdistributor_name}</td>
                  <td className="text-center">{item.mdistributor_email}</td>
                  <td className="text-center">{item.title}</td>
                  <td className="text-center">${item.price}</td>
                  <td className="text-center">
                    <Link to={`/meal-details/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-[#8f4d4d]">
                        <FaEye className="text-white  "></FaEye>
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link to={`/dashboard/updateMeals/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-[#8f4d4d]">
                        <FaEdit className="text-white  "></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
