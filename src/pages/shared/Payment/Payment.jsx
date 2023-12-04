import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { type } = useParams();
  let member = {};
  if (useParams != undefined) {
    const memberShip = [
      {
        memberShipType: "Gold",
        price: 19.99,
        image: "https://i.ibb.co/PDGhY9Z/gold-membership-1.png",
      },
      {
        memberShipType: "Platinum",
        price: 29.99,
        image: "https://i.ibb.co/8bB7HpZ/platinum-Membership.png",
      },
      {
        memberShipType: "Silver",
        price: 14.99,
        image: "https://i.ibb.co/PZM5tMg/Memberships-Silver.jpg",
      },
    ];
    member = memberShip.find(
      (memberShip) => memberShip.memberShipType === type.toLowerCase()
    );
  } else {
    member = null;
  }

  return (
    <div>
      <h1>{type}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm member={member} />
      </Elements>
      
    </div>
  );
};

export default Payment;
// TODO make stripe payment method => in checkoutfrom share compo
