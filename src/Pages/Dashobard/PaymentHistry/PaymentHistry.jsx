import React from "react";
import { usePaymentHistry } from "../../../API/usePaymentHistru";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import Title from "../../../Components/Shared/Title/Title";
import HistryRow from "./HistryRow";

const PaymentHistry = () => {
  const [paymentHistry, histryLoading] = usePaymentHistry();
  console.log(paymentHistry);
  return (
    <>
      <Title title="Payment Histry" />
      <section>
        <div className="db__container">
          <DashboardTitle title="Payment Histry" />

          <div className="mt-8">
            <div className="overflow-x-auto">
              <table className="table table-zebra rounded-lg overflow-hidden">
                {/* head */}
                <thead>
                  <tr className="text-sm text-white font-nunito">
                    <th className="bg-accent">Image</th>
                    <th className="bg-accent">Class Name</th>
                    <th className="bg-accent">Instructor</th>
                    <th className="bg-accent">Transaction Id</th>
                    <th className="bg-accent">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistry.map((history) => (
                    <HistryRow key={history._id} history={history} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentHistry;
