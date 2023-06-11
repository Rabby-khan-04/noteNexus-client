import React, { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Menu = ({ menuItem }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <ul className={`hidden lg:flex flex-row ${darkMode ? "text-white" : ""}`}>
      {menuItem}
    </ul>
  );
};

export default Menu;
