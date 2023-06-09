import React from "react";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";

const MyClasses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <section>
      <div className="db__container">
        <DashboardTitle title="My Classes" />
        <div className="grid grid-cols-3 gap-6 mt-6"></div>
      </div>
    </section>
  );
};

export default MyClasses;
