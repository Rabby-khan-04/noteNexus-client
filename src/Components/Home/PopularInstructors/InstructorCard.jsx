import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import IconBox from "../../IconBox";

const InstructorCard = ({ instructor }) => {
  const { _id, email, image, name, role } = instructor;
  return (
    <div className="group flex-col flex items-center cursor-pointer">
      <div className="rounded-full w-[240px] h-[240px] relative">
        <img
          src={image}
          className="w-[240px] h-[240px] object-cover object-center rounded-full inline-block p-4"
          alt=""
        />
        <div className="absolute w-full h-full border-2 border-primary top-0 left-0 right-0 rounded-full group-hover:border-8 transition-all duration-200"></div>
      </div>

      <div className="text-center font-nunito mt-4 w-full">
        <h2 className="text-2xl text-accent font-extrabold">{name}</h2>
        <div className="flex justify-center mb-1">
          <IconBox
            Icon={<FaEnvelope className="text-lg text-secondary" />}
            title={email}
          />
        </div>
        <p className="text-secondary font-bold text-xl mb-2">{role}</p>
        <div className="text-accent flex justify-center gap-3">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;