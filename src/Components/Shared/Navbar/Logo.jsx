import React, { useContext } from "react";
import siteLogo from "../../../assets/Logo/logo_black.png";
import siteLogowhite from "../../../assets/Logo/logo_white.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Logo = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <Link to="/">
        <img
          className="h-14"
          src={darkMode ? siteLogowhite : siteLogo}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
