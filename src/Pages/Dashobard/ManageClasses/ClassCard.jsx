import React, { useState } from "react";
import {
  MdGroups2,
  MdNotInterested,
  MdOutlinePriceChange,
  MdPendingActions,
  MdVerified,
} from "react-icons/md";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import IconBox from "../../../Components/IconBox";
import Modal from "../../../Components/Modal/Modal";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../API/useAxiosSecure";

const ClassCard = ({ item, refetchClasses }) => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  const { _id, email, image, instructor, name, price, seats, status, enroled } =
    item;
  const [feedback, setFeedback] = useState("");
  const [axiosSecure] = useAxiosSecure();

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // handle Denied Function
  const sendFeedback = (id) => {
    if (!feedback) {
      setIsModalOpen(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Feedback Field Is Required`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    axiosSecure.put(`/class-deny/${id}`, { feedback }).then((res) => {
      if (res.data.upsertedId || res.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Class Denied`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetchClasses();
        setIsModalOpen(false);
      }
    });
  };

  // Handle Approve Class
  const handleApprove = (id) => {
    axiosSecure.put(`/class-approve/${id}`).then((res) => {
      if (res.data.upsertedId || res.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Class Approved`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetchClasses();
        setIsModalOpen(false);
      }
    });
  };

  return (
    <>
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

            <div
              className={`flex items-center text-lg gap-2 font-semibold font-nunito ${
                status === "Approved"
                  ? "text-green-600"
                  : status === "Pending"
                  ? "text-gray-400"
                  : "text-red-600"
              }`}
            >
              {status === "Approved" ? (
                <>
                  <MdVerified className="text-xl" />
                  <p>{status}</p>
                </>
              ) : status === "Pending" ? (
                <>
                  <MdPendingActions className="text-2xl" />
                  <p>{status}</p>
                </>
              ) : (
                <>
                  <MdNotInterested className="text-2xl" />
                  <p>{status}</p>
                </>
              )}
            </div>
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
                Icon={<MdGroups2 className="text-secondary text-xl" />}
                title={seats}
              />
              <IconBox
                Icon={
                  <MdOutlinePriceChange className="text-secondary text-xl" />
                }
                title={"$" + price}
              />
            </div>
            <p className="text-base text-accent font-bold font-nunito">
              Total Enroled Student: {enroled}
            </p>
          </div>
          <div className=" space-y-2">
            <button
              disabled={status === "Approved" || status === "Denied"}
              className="btn btn-block btn-accent text-lg text-white"
              onClick={() => handleApprove(_id)}
            >
              Approve
            </button>
            <button
              disabled={status === "Approved" || status === "Denied"}
              className="btn btn-block btn-error text-lg text-white"
              onClick={openModal}
            >
              Deny
            </button>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        sendFeedback={sendFeedback}
        closeModal={closeModal}
        setFeedback={setFeedback}
        id={_id}
      />
    </>
  );
};

export default ClassCard;
