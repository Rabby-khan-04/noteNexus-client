import React, { useContext } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import IconBox from "../../IconBox";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const InstructorCard = ({ instructor }) => {
  const { _id, email, image, name, role } = instructor;
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`group flex-col flex items-center cursor-pointer group p-7 transition-all duration-300 rounded-2xl ${
        darkMode ? " hover:bg-[#070415]" : " hover:bg-slate-200"
      }`}
    >
      <div className=" relative">
        <img
          src={image}
          className="w-[240px] h-[240px] object-cover object-center rounded-full inline-block p-4 filter grayscale group-hover:filter-none transition-all duration-300"
          alt=""
        />
        <div
          className={`${
            darkMode
              ? "text-slate-200 bg-[#070415] group-hover:bg-[#13111f]"
              : "text-accent bg-slate-200 group-hover:bg-[#f6f4ee]"
          } flex justify-around absolute left-0 right-0 bottom-0 px-4 py-3 rounded-full text-lg transition-all duration-300`}
        >
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      <div className="text-center font-nunito mt-4 w-full">
        <h2
          className={`text-2xl ${
            darkMode ? "text-primary" : "text-accent"
          } font-extrabold`}
        >
          {name}
        </h2>
        <div className="flex justify-center mb-1">
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
        </div>
        <p
          className={`${
            darkMode ? "text-primary" : "text-secondary"
          } font-bold text-xl mb-2`}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;
