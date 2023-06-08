import React from "react";
import siteLogo from "../../../assets/Logo/logo_black.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="h-14" src={siteLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
