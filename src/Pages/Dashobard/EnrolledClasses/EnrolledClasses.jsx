import React from "react";
import Title from "../../../Components/Shared/Title/Title";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { usePaymentHistry } from "../../../API/usePaymentHistru";
import EnroledClassCard from "./EnroledClassCard";

const EnrolledClasses = () => {
  const [paymentHistry, histryLoading] = usePaymentHistry();
  return (
    <>
      <Title title="Enroled Classes" />
      <section>
        <div className="db__container">
          <DashboardTitle title="Enroled Classes" />

          <div className="grid grid-cols-3 gap-6 mt-6">
            {paymentHistry.map((classInfo) => (
              <EnroledClassCard key={classInfo._id} classInfo={classInfo} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EnrolledClasses;
