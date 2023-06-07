import React from "react";
import Logo from "../../Navbar/Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex flex-row justify-between items-center">
          <Logo />
          <Menu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
