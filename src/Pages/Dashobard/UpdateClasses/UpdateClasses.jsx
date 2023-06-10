import { useParams } from "react-router-dom";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { useAuth } from "../../../API/useAuth";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import Swal from "sweetalert2";
import { useClass } from "../../../API/useClass";
import Title from "../../../Components/Shared/Title/Title";

const UpdateClasses = () => {
  const { id } = useParams();
  const [classData] = useClass(id);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { _id, image, name, price, seats, description } = classData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructor = user?.displayName;
    const email = user?.email;
    const description = form.description.value;
    const seats = parseFloat(form.seats.value);
    const price = parseFloat(form.price.value);
    const classInfo = {
      name,
      image,
      description,
      instructor,
      email,
      seats,
      price,
      enroled: 0,
      status: "Pending",
    };

    axiosSecure.put(`/class/${_id}`, classInfo).then((res) => {
      if (res.data.modifiedCount > 0 || res.data.upsertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Class Updated Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Title title="Update Class" />
      <section className="h-[calc(100vh-192px)] flex justify-center items-center">
        <div className="db__container w-full">
          <div className="text-center max-w-5xl mx-auto py-12 px-10 shadow-md rounded-lg">
            <DashboardTitle title="Update Class" />
            <form onSubmit={handleUpdate} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  required
                  className="input input-bordered w-full"
                  type="text"
                  defaultValue={name}
                  placeholder="Class Name"
                  name="name"
                />
                <input
                  required
                  className="input input-bordered w-full"
                  type="url"
                  defaultValue={image}
                  placeholder="Class Image"
                  name="image"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  required
                  className="input input-bordered w-full"
                  type="number"
                  defaultValue={seats}
                  placeholder="Available Seats"
                  name="seats"
                />
                <input
                  required
                  className="input input-bordered w-full"
                  type="number"
                  placeholder="Price"
                  defaultValue={price}
                  name="price"
                />
              </div>
              <textarea
                placeholder="Description"
                defaultValue={description}
                className="textarea textarea-bordered w-full"
                name="description"
              />

              <input
                className="btn btn-block btn-secondary text-lg text-white"
                type="submit"
                value="Update Class"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateClasses;
