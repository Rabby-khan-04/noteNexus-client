import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useAuth } from "../../../API/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import { useMyclasses } from "../../../API/useMyClasses";

const CheckoutForm = ({ clientSecret, classInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  // const [myClasses, isClassesLoading, classesRefetch] = useMyclasses();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setMessage(confirmError);
      console.log(confirmError);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
    if (paymentIntent && paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
      classInfo.transactionId = transactionId;
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Payment Successfull`,
        showConfirmButton: false,
        timer: 1500,
      });
      axiosSecure.post("/payment-histry", classInfo).then((res) => {
        console.log(res.data);
      });
      axiosSecure.delete(`/delete-class/${classInfo._id}`);
      // classesRefetch();
      navigate("/dashboard/my-selected-class");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Payment Faild`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form id="payment-form" className="space-y-6" onSubmit={handleSubmit}>
      <CardElement id="payment-element" />
      <button
        className="btn btn-block btn-accent text-white text-lg"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {/* {message && <div id="payment-message">{message}</div>} */}
    </form>
  );
};

export default CheckoutForm;
