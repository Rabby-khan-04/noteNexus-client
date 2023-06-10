import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import Title from "../../../Components/Shared/Title/Title";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  const [classInfo, setClassInfo] = useState({});
  const [axiosSecure] = useAxiosSecure();
  const price = classInfo?.price;

  useEffect(() => {
    axiosSecure.get(`/saved-class/${id}/payment`).then((res) => {
      setClassInfo(res.data);
    });
  }, [axiosSecure, id]);

  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log("Error creating payment intent:", error);
        });
    }
  }, [axiosSecure, price]);

  return (
    <>
      <Title title="Payment" />
      <section className="h-[calc(100vh-192px)] flex justify-center items-center">
        <div className="db__container w-full">
          <div className="text-center max-w-4xl mx-auto py-12 px-10 shadow-md rounded-lg space-y-8">
            <DashboardTitle title="Payment" />
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  clientSecret={clientSecret}
                  classInfo={classInfo}
                />
              </Elements>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
