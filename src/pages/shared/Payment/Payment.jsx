import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
// TODO : add payment method
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
    axiosSecure.put(`/users/${users._id}`, userUpdateData);
  };
// console.log(memberShip);
const member=memberShip
  return (
    <div>
      <h1>{type}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm member={member} />
      </Elements>
      <button onClick={handlePay} className="btn ">
        pay
      </button>
    </div>
  );
};

export default Payment;
// TODO make stripe payment method => in checkoutfrom share compo
