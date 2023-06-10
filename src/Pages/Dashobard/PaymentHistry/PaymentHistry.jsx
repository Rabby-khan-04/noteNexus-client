import React from "react";
import { usePaymentHistry } from "../../../API/usePaymentHistru";

const PaymentHistry = () => {
  const [paymentHistry, histryLoading] = usePaymentHistry();
  console.log(paymentHistry);
  return <div></div>;
};

export default PaymentHistry;
