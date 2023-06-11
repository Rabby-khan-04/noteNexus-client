import React, { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

const IconBox = ({ Icon, title }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-2 font-nunito">
      {Icon}
      <p
        className={`text-base font-semibold ${
          darkMode ? "text-white" : "text-accent"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default IconBox;
