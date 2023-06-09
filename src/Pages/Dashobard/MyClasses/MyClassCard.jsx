import React, { useState } from "react";
import IconBox from "../../../Components/IconBox";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import {
  MdGroups2,
  MdNotInterested,
  MdOutlinePriceChange,
  MdPendingActions,
  MdVerified,
} from "react-icons/md";
import FeedBackModal from "../../../Components/Modal/FeedBackModal";
import { useNavigate } from "react-router-dom";

const MyClassCard = ({ item }) => {
  let [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const navigate = useNavigate();
  const { _id, image, name, price, seats, status, feedback, enroled } = item;

  // Open Feedback Modal
  const openFeadBackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  // Close Feedback Modal
  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  // Go to class update route
  const goToUpdateRoute = (id) => {
    navigate(`/dashboard/update-class/${id}`);
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
            {feedback && (
              <button
                className="btn btn-block btn-accent text-lg text-white"
                onClick={openFeadBackModal}
              >
                View Feedback
              </button>
            )}
            {status === "Denied" && (
              <button
                className="btn btn-block btn-secondary text-lg text-white"
                onClick={() => goToUpdateRoute(_id)}
              >
                Update Now
              </button>
            )}
          </div>
        </div>
      </div>
      <FeedBackModal
        isFeedbackModalOpen={isFeedbackModalOpen}
        feedback={feedback}
        closeFeedbackModal={closeFeedbackModal}
      />
    </>
  );
};

export default MyClassCard;
