import React, { useContext, useState } from "react";
import IconBox from "../../IconBox";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import { MdGroups2, MdOutlinePriceChange } from "react-icons/md";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import { useAuth } from "../../../API/useAuth";
import { useUserRole } from "../../../API/useUserRole";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const PopularClassCard = ({ item }) => {
  const { darkMode } = useContext(ThemeContext);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userRole, isRoleLoading] = useUserRole();
  const { _id, name, email, image, instructor, seats, enroled, price } = item;
  const [isExist, setIsExist] = useState(false);

  // Handle Save Class
  const handleSaveClass = async (classData) => {
    if (!user) {
      Swal.fire({
        text: "You have to login to book class!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    if (seats <= 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `Class Is Full No Seats Available`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const checkBooking = { id: classData._id, email: user?.email };

    const res = await axiosSecure.get("/cheking-histry", {
      params: checkBooking,
    });

    if (res.data.exist) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `Already enrolled In this class`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      const bookinDetails = {
        classId: classData?._id,
        name: classData?.name,
        price: classData?.price,
        studentEmail: user?.email,
        image: classData?.image,
        instructor: classData?.instructor,
        email: classData?.email,
      };

      axiosSecure.post("/select-class", bookinDetails).then((res) => {
        if (res.data.exist) {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${res?.data?.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class Saved Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div
      className={`p-3 border ${
        darkMode ? "border-primary" : "border-gray-300 "
      } rounded-lg group overflow-hidden ${seats <= 0 ? "bg-red-400" : ""}`}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          className="h-80 md:h-64 w-full object-cover object-center rounded-lg group-hover:scale-110 transition-all duration-300"
          alt=""
        />
      </div>
      <div className="pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-accent"
            } font-nunito`}
          >
            <span className={`${darkMode ? "text-primary" : "text-secondary"}`}>
              {name}
            </span>{" "}
            <span>Class</span>
          </h2>
        </div>
        <div>
          <IconBox
            Icon={
              <FaUserGraduate
                className={`${
                  darkMode ? "text-primary" : "text-secondary"
                } text-xl`}
              />
            }
            title={instructor}
          />
          <IconBox
            Icon={
              <FaEnvelope
                className={`${
                  darkMode ? "text-primary" : "text-secondary"
                } text-xl`}
              />
            }
            title={email}
          />
          <div className="flex items-center gap-3">
            <IconBox
              Icon={
                <MdGroups2
                  className={`${
                    darkMode ? "text-primary" : "text-secondary"
                  } text-xl`}
                />
              }
              title={seats}
            />
            <IconBox
              Icon={
                <MdOutlinePriceChange
                  className={`${
                    darkMode ? "text-primary" : "text-secondary"
                  } text-xl`}
                />
              }
              title={"$" + price}
            />
          </div>
        </div>
        <div className=" space-y-2">
          <button
            disabled={
              seats === 0 || userRole === "Admin" || userRole === "Instructor"
            }
            onClick={() => handleSaveClass(item)}
            className={`btn btn-block text-lg ${
              darkMode ? "btn-primary text-accent" : "text-white btn-accent"
            }`}
          >
            Take Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
