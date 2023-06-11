import React, { useContext } from "react";
import sun from "../../../assets/Images/ThemeToggle/Sun.svg";
import moon from "../../../assets/Images/ThemeToggle/Moon.svg";
import "./ThemeToggle.css";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const ThemeToggle = () => {
  const { darkMode, setDarkmode } = useContext(ThemeContext);

  const handleToggle = () => {
    setDarkmode(!darkMode);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        checked={darkMode}
        onChange={handleToggle}
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={sun} className="sun" alt="" />
        <img src={moon} className="moon" alt="" />
      </label>
    </div>
  );
};

export default ThemeToggle;
