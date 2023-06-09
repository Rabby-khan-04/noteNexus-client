import React from "react";
import { useForm } from "react-hook-form";

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Class Nmae"
            {...register("Class Nmae", { required: true })}
          />
          <input
            type="url"
            placeholder="Class Image"
            {...register("Class Image", { required: true })}
          />
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("Instructor Name", { required: true })}
          />
          <input
            type="email"
            placeholder="Instructor Email"
            {...register("Instructor Email", { required: true })}
          />
          <input
            type="number"
            placeholder="Available Seats"
            {...register("Available Seats", { required: true })}
          />
          <input
            type="number"
            placeholder="Price"
            {...register("Price", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default MyClasses;
