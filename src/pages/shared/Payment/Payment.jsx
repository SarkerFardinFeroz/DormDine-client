import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
// TODO : add payment method
const Payment = () => {
  const [users, setUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);
  const [memberShip, setMemberShip] = useState([]);
  const [memberShipData, setMemberShipData] = useState([]);
  const { type } = useParams();
  // console.log(type);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/users").then((res) => setApiUsers(res.data));
  }, [axiosPublic]);
  useEffect(() => {
    axiosPublic.get("/membership").then((res) => setMemberShipData(res.data));
  }, [axiosPublic]);
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
  const member = memberShip;
  console.log(member);
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
