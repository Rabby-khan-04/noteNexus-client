import React, { useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  // Menu Items
  const menuItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "text-secondary" : "") + " menu__item"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            (isActive ? "text-secondary" : "") + " menu__item"
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            (isActive ? "text-secondary" : "") + " menu__item"
          }
        >
          Classes
        </NavLink>
      </li>
    </>
  );

  return (
    <header className={`${darkMode ? "bg-[#13111f]" : ""}`}>
      <div className="container">
        <nav className="flex flex-row justify-between items-center py-2">
          <Logo />
          <Menu menuItem={menuItem} />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Dropdown menuItem={menuItem} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
