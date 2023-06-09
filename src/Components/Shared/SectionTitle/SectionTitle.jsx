import React from "react";

const SectionTitle = ({ title, subTitle, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto font-nunito">
      <p className="text-3xl text-secondary font-extrabold capitalize mb-2">
        {subTitle}
      </p>
      <h2 className="capitalize text-5xl text-accent font-extrabold mb-7">
        {title}
      </h2>
      <p className="text-accent text-base ">{description}</p>
    </div>
  );
};

export default SectionTitle;
