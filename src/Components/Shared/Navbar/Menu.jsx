import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
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

  return <ul className="hidden lg:flex flex-row ">{menuItem}</ul>;
};

export default Menu;
