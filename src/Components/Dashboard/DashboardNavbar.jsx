import React from "react";
import { useAuth } from "../../API/useAuth";
import logo from "../../assets/Logo/logo_black.png";
import { Link } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";

const DashboardNavbar = () => {
  const { user } = useAuth();
  return (
    <header className="py-5">
      <div className="db__container">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} className="w-36" alt="" />
          </Link>
          <div className="flex items-center gap-2">
            <MdOutlineNotificationsNone className="text-3xl text-accent cursor-pointer" />
            <img
              src={user?.photoURL}
              className="h-8 w-8 object-cover object-center rounded-full cursor-pointer"
              alt=""
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DashboardNavbar;
