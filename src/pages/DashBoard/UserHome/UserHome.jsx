import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const UserHome = () => {
  const { user } = useAuth();
  const [allUser] = useUser();
  const bronzeIMG = ` https://i.ibb.co/Gt2CRdb/bronze.jpg `;
  const goldIMG = `https://i.ibb.co/PDGhY9Z/gold-membership-1.png `;
  const silverIMG = ` https://i.ibb.co/PZM5tMg/Memberships-Silver.jpg `;
  const platinumIMG = ` https://i.ibb.co/8bB7HpZ/platinum-Membership.png `;
  const filteredUser = allUser.find(
    (currentUser) =>
      currentUser?.email.toLowerCase() === user?.email.toLowerCase()
  );
//   console.log(filteredUser.subscription);
  return (
    <div>
        <Helmet>
        <title>DormDine | My Profile</title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold flex items-center justify-center">
        Hi,Welcome {user.displayName ? user.displayName : "back"}
        <span>
          {filteredUser?.subscription === "bronze" && (
            <img src={bronzeIMG} className="w-40 h-40 object-contain" alt="Bronze Membership" />
          )}

          {filteredUser?.subscription === "gold" && (
            <img src={goldIMG}  className="w-40 h-40 object-contain"alt="Gold Membership" />
          )}

          {filteredUser?.subscription === "silver" && (
            <img src={silverIMG} className="w-40 h-40 object-contain" alt="Silver Membership" />
          )}

          {filteredUser?.subscription === "platinum" && (
            <img src={platinumIMG} className="w-40 h-40 object-contain" alt="Platinum Membership" />
          )}
        </span>
      </h2>

      <div>
        <img
          src={user?.photoURL}
          className="rounded-xl w-40 h-40 object-cover"
        />
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email} </p>
      </div>
    </div>
  );
};

export default UserHome;
