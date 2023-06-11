import React, { useContext } from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import favIcon from "../../public/favicon.png";
import { useUserRole } from "../API/useUserRole";
import {
  BsCollectionPlay,
  BsDatabaseFillAdd,
  BsFillGrid3X3GapFill,
  BsFillHddStackFill,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineBookmark, MdPayment } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { ThemeContext } from "../Providers/ThemeProvider";

const DashboardLayout = () => {
  const [userRole] = useUserRole();
  const { setDarkmode } = useContext(ThemeContext);

  setDarkmode(false);

  // Admin Menu
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

  const instructorMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            (isActive
              ? "dashboard__menu__active"
              : "dashboard__menu__deactive") + " dashboard__menu__item"
          }
          to="/dashboard/my-classes"
          data-tooltip-id="my-classes"
          data-tooltip-content="My classes"
        >
          <BsCollectionPlay />
        </NavLink>
        <ReactTooltip id="my-classes" place="left" type="dark" effect="solid" />
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            (isActive
              ? "dashboard__menu__active"
              : "dashboard__menu__deactive") + " dashboard__menu__item"
          }
          to="/dashboard/add-class"
          data-tooltip-id="add-class"
          data-tooltip-content="Add Class"
        >
          <BsDatabaseFillAdd />
        </NavLink>
        <ReactTooltip id="add-class" place="left" type="dark" effect="solid" />
      </li>
    </>
  );

  const studentMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            (isActive
              ? "dashboard__menu__active"
              : "dashboard__menu__deactive") + " dashboard__menu__item"
          }
          to="/dashboard/my-selected-class"
          data-tooltip-id="my-selected-class"
          data-tooltip-content="My selected classes"
        >
          <BsFillGrid3X3GapFill />
        </NavLink>
        <ReactTooltip
          id="my-selected-class"
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
          to="/dashboard/enrolled-classes"
          data-tooltip-id="my-enrolled-classes"
          data-tooltip-content="My enrolled classes"
        >
          <HiSquare3Stack3D />
        </NavLink>
        <ReactTooltip
          id="my-enrolled-classes"
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
          to="/dashboard/payment-histry"
          data-tooltip-id="payment-histry"
          data-tooltip-content="Payment Histry"
        >
          <MdPayment />
        </NavLink>
        <ReactTooltip
          id="payment-histry"
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
        <div className="min-w-[80px] bg-accent fixed h-full">
          <Link to="/" className="block text-center">
            <img
              className="inline-block m-5 h-[30px] w-[30px]"
              src={favIcon}
              alt=""
            />
          </Link>
          <ul className="mt-8 dashboard__menu space-y-4">
            {userRole === "Admin" && adminMenu}
            {userRole === "Instructor" && instructorMenu}
            {userRole === "Student" && studentMenu}
          </ul>
        </div>
        <div className="w-full py-24">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
