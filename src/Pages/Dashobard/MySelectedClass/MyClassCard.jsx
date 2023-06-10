import React from "react";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import { MdGroups2, MdOutlinePriceChange } from "react-icons/md";
import IconBox from "../../../Components/IconBox";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyClassCard = ({ item, classesRefetch }) => {
  const { _id, image, name, price, email, instructor, classId } = item;
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  console.log(item);

  // Handle Delete
  const handleDeleteClass = (id) => {
    axiosSecure.delete(`/delete-class/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Class Deleted Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        classesRefetch();
      }
    });
  };

  // Goto payment route
  const handlePaymentRoute = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  return (
    <div className="p-3 border border-gray-300 rounded-lg group overflow-hidden">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          className="h-64 w-full object-cover object-center rounded-lg group-hover:scale-110 transition-all duration-300"
          alt=""
        />
      </div>
      <div className="pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-accent font-nunito">
            <span className="text-secondary">{name}</span> <span>Class</span>
          </h2>
        </div>
        <div>
          <IconBox
            Icon={<FaUserGraduate className="text-secondary text-xl" />}
            title={instructor}
          />
          <IconBox
            Icon={<FaEnvelope className="text-secondary text-xl" />}
            title={email}
          />
          <div className="flex items-center gap-3">
            <IconBox
              Icon={<MdOutlinePriceChange className="text-secondary text-xl" />}
              title={"$" + price}
            />
          </div>
        </div>
        <div className=" space-y-2">
          <button
            onClick={() => handleDeleteClass(_id)}
            className="btn btn-block btn-secondary text-lg text-white"
          >
            Delete Class
          </button>
          <button
            onClick={() => handlePaymentRoute(_id)}
            className="btn btn-block btn-accent text-lg text-white"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
