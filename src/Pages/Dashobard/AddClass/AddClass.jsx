import React from "react";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { useAuth } from "../../../API/useAuth";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const image = data.image;
    const instructor = data.instructorName;
    const email = data.instructorEmail;
    const description = data.description;
    const seats = parseFloat(data.seats);
    const price = parseFloat(data.price);
    const classInfo = {
      name,
      image,
      description,
      instructor,
      email,
      seats,
      price,
      status: "Pending",
    };

    axiosSecure.post("/class", classInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Class added successfully. Wait for admin approval`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <section className="h-[calc(100vh-192px)] flex justify-center items-center">
      <div className="db__container w-full">
        <div className="text-center max-w-5xl mx-auto py-12 px-10 shadow-md rounded-lg">
          <DashboardTitle title="Add Class" />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Class Name"
                {...register("name", { required: true })}
              />
              <input
                className="input input-bordered w-full"
                type="url"
                placeholder="Class Image"
                {...register("image", { required: true })}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Instructor Name"
                value={user?.displayName}
                {...register("instructorName", { required: true })}
                readOnly
              />
              <input
                className="input input-bordered w-full"
                type="email"
                placeholder="Instructor Email"
                value={user?.email}
                {...register("instructorEmail", { required: true })}
                readOnly
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                className="input input-bordered w-full"
                type="number"
                placeholder="Available Seats"
                {...register("seats", { required: true })}
              />
              <input
                className="input input-bordered w-full"
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              {...register("description", { required: true })}
            />

            <input
              className="btn btn-block btn-secondary"
              type="submit"
              value="Add New Class"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddClass;
