import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

import useUser from "../../../hooks/useUser";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div>
        <Helmet>
        <title>DormDine | Admin Profile</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold">
        Hi,Welcome {user.displayName ? user.displayName : "back"}
      </h2>

      <div>
        <img src={user?.photoURL} className="rounded-xl w-40 h-40 object-cover" />
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}  </p>
      </div>
    </div>
  );
};

export default AdminHome;
