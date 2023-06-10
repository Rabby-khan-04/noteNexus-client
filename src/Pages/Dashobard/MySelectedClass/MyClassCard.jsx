import React from "react";
import { FaEnvelope, FaUserGraduate } from "react-icons/fa";
import { MdGroups2, MdOutlinePriceChange } from "react-icons/md";
import IconBox from "../../../Components/IconBox";

const MyClassCard = ({ item }) => {
  const { _id, image, name, price, email, instructor, classId } = item;
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
            onClick={() => null}
            className="btn btn-block btn-secondary text-lg text-white"
          >
            Delete Class
          </button>
          <button
            onClick={() => null}
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
