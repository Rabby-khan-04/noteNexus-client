import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import favIcon from "../../public/favicon.png";
import { useUserRole } from "../API/useUserRole";
import { BsFillGrid3X3GapFill, BsFillHddStackFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const DashboardLayout = () => {
  const [userRole] = useUserRole();
  const adminMenu = (
    <>
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            (isActive ? "btn-primary text-black" : "") +
            " dashboard__menu__item"
          }
          to="/dashboard/manage-user"
        >
          <BsFillGrid3X3GapFill />
        </NavLink>
      </li> */}
      <li>
        <NavLink
          className={({ isActive }) =>
            (isActive
              ? "dashboard__menu__active"
              : "dashboard__menu__deactive") + " dashboard__menu__item"
          }
          to="/dashboard/manage-user"
          data-tooltip-id="manage-user"
          data-tooltip-content="Manage User"
        >
          <FaUsers />
        </NavLink>
        <ReactTooltip
          id="manage-user"
          place="left"
          type="dark"
          effect="solid"
        />
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            (isActive
              ? "dashboard__menu__active"
              : "dashboard__menu__deactive") + " dashboard__menu__item"
          }
          to="/dashboard/manage-classes"
          data-tooltip-id="manage-classes"
          data-tooltip-content="Manage Classes"
        >
          <BsFillHddStackFill />
        </NavLink>
        <ReactTooltip
          id="manage-classes"
          place="left"
          type="dark"
          effect="solid"
        />
      </li>
    </>
  );
  return (
    <>
      <div className="flex">
        <div className="min-w-[80px] bg-accent h-screen">
          <Link to="/">
            <img
              className="inline-block m-5 h-[30px] w-[30px]"
              src={favIcon}
              alt=""
            />
          </Link>
          <ul className="mt-8 dashboard__menu space-y-4">
            {userRole === "Admin" && adminMenu}
          </ul>
        </div>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
