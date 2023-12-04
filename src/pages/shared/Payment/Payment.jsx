import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [users, setUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);
  const [memberShip, setMemberShip] = useState([]);
  const [memberShipData, setMemberShipData] = useState([]);
  const { type } = useParams();
  console.log(type);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/users").then((res) => setApiUsers(res.data));
  }, [axiosSecure]);
  useEffect(() => {
    axiosSecure.get("/membership").then((res) => setMemberShipData(res.data));
  }, [axiosSecure]);
  useEffect(() => {
    memberShipData.map((data) => setMemberShip(data));
  }, [memberShipData]);
  const userUpdateData = { subscription: type };
  useEffect(() => {
    apiUsers.map((users) => setUsers(users));
  }, [apiUsers]);
  const handlePay = () => {
    axiosSecure.put(`/users/${users._id}`, userUpdateData).then((res) =>
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Purchased",
        ShowConfirmButton: false,
        timer: 1500,
      })
    );
  };
  // console.log(memberShip);
  const member = memberShip;
  return (
    <div>
      <h1>{type}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm member={member} />
      </Elements>
      <button onClick={handlePay} className="btn btn-primary mt-10 ">
        pay
      </button>
    </div>
  );
};

export default Payment;
