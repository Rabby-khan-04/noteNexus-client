import React from "react";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import {
  MdGroups2,
  MdNotInterested,
  MdOutlinePriceChange,
  MdVerified,
} from "react-icons/md";
import IconBox from "../../../Components/IconBox";

const EnroledClassCard = ({ classInfo }) => {
  const { email, image, instructor, name, price } = classInfo;
  console.log(classInfo);
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

          <div
            className={`flex items-center text-lg gap-2 font-semibold font-nunito text-green-600`}
          >
            <MdVerified className="text-xl" />
            <p>Enrolled</p>
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

          <IconBox
            Icon={<MdOutlinePriceChange className="text-secondary text-xl" />}
            title={"$" + price}
          />
        </div>
      </div>
    </div>
  );
};

export default EnroledClassCard;
