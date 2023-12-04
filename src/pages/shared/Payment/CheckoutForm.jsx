import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";

const CheckoutForm = ({ member }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [cart, refetch] = useCart();
  const [allUsers] = useUser();
  const axiosSecure = useAxiosSecure();
  // const [allUser]=
  // TODOO PAYMENT
  let totalPrice = 0.0;
  if (member != null || member !== undefined) {
    totalPrice = member.price;
  } else {
    totalPrice = cart.reduce((total, item) => total + item.price, 0);
  }
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const currentUser = allUsers.find((use) => use.email === user?.email);
        // now save the payment in the database
        if (currentUser) {
          const updatedSubscription = member?.Subscriptio || "bronze";
          const userUpdateData = { subscription: updatedSubscription };
          try {
            const updateUserResponse = await axiosSecure.put(
              `/users/${currentUser._id}`,
              userUpdateData
            );
            if (updateUserResponse.data) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Successful",
                ShowConfirmButton: false,
                timer: 1500,
              });
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("user Not Found in allUsers");
        }
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        console.log("payment", res.data);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600"> Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
