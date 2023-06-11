import React, { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Reveal, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const SectionTitle = ({ title, subTitle, description }) => {
  const { darkMode } = useContext(ThemeContext);

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <Reveal keyframes={customAnimation} duration={`400`}>
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
    </Reveal>
  );
};

export default SectionTitle;
