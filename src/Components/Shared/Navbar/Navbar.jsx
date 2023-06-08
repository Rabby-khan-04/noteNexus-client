import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          Iinstructors
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
    <header>
      <div className="container">
        <nav className="flex flex-row justify-between items-center py-2">
          <Logo />
          <Menu menuItem={menuItem} />
          <Dropdown menuItem={menuItem} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
