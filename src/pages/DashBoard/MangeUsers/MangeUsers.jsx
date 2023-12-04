import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MangeUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user._id);
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      // console.log(res);
      if (res.data?.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>DormDine | Manage Users</title>
      </Helmet>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-[#871900d6]   text-white">
              <th className="text-center">SL</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="text-center" key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <p className="text-lg font-medium">Admin</p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="py-3 px-5 rounded-xl bg-[#871900]"
                    >
                      <FaUsers className="text-white text-2xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td className="flex justify-center">
                  <button className="text-lg font-semibold flex items-center justify-center gap-3">
                    {user.subscription}
                    <span>
                      {user.subscription === "gold" && (
                        <img
                          src="https://i.ibb.co/PDGhY9Z/gold-membership-1.png"
                          alt="Gold Membership"
                          className="w-[20px] h-[20px] object-contain "
                        />
                      )}
                      {user.subscription === "platinum" && (
                        <img
                          src="https://i.ibb.co/8bB7HpZ/platinum-Membership.png"
                          alt="Platinum Membership"
                          className="w-[20px] h-[20px] object-contain "
                        />
                      )}
                      {user.subscription === "silver" && (
                        <img
                          src="https://i.ibb.co/PZM5tMg/Memberships-Silver.jpg"
                          alt="Silver Membership"
                          className="w-[20px] h-[20px] object-contain "
                        />
                      )}
                      {user.subscription === "bronze" && (
                        <img
                          src="https://i.ibb.co/Gt2CRdb/bronze.jpg"
                          alt="Bronze Membership"
                          className="w-[20px] h-[20px] object-contain "
                        />
                      )}
                    </span>
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

export default MangeUsers;
