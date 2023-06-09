import React from "react";

const IconBox = ({ Icon, title }) => {
  return (
    <div className="flex items-center gap-2 font-nunito">
      {Icon}
      <p className="text-base text-accent font-semibold">{title}</p>
    </div>
  );
};

export default IconBox;
