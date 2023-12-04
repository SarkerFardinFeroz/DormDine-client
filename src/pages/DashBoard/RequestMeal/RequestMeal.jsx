import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const RequestMeal = () => {
  const [cart, refetch] = useCart();
//   console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
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
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Request has been cancel",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-evenly mb-8">
          <h2 className="text-4xl font-semibold">
            Total orders: {cart.length}
          </h2>
          <h2 className="text-4xl font-semibold">Total Price: ${totalPrice}</h2>
          {cart.length ? (
            <Link to={"/dashboard/payment"}>
              <button className="btn bg-zinc-950 hover:bg-zinc-900 text-white">
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="btn bg-zinc-950 hover:bg-zinc-900 text-white"
            >
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.mealImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                {item.mealStatus}
                  </th>

                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestMeal;
