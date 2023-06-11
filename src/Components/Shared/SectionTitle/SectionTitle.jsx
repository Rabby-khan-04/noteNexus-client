import React, { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const SectionTitle = ({ title, subTitle, description }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="text-center max-w-3xl mx-auto font-nunito">
      <p
        className={`text-3xl ${
          darkMode ? "text-primary" : "text-secondary"
        } font-extrabold capitalize mb-2`}
      >
        {subTitle}
      </p>
      <h2
        className={`capitalize text-5xl ${
          darkMode ? "text-white" : "text-accent"
        } font-extrabold mb-7`}
      >
        {title}
      </h2>
      <p
        className={`text-accent text-base ${
          darkMode ? "text-white" : "text-accent"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
