import React, { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const SectionTitle = ({ title, subTitle, description }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="text-center max-w-3xl mx-auto font-nunito">
      <p
        className={`md:text-3xl text-2xl ${
          darkMode ? "text-primary" : "text-secondary"
        } font-extrabold capitalize mb-2`}
      >
        {subTitle}
      </p>
      <h2
        className={`capitalize md:text-5xl text-4xl ${
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
