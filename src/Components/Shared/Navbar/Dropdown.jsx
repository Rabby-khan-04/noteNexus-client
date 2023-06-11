import React, { useContext } from "react";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAuth } from "../../../API/useAuth";
import { HiOutlineMenuAlt1, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserRole } from "../../../API/useUserRole";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Dropdown = ({ menuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogout } = useAuth();
  const [userRole] = useUserRole();
  const { darkMode } = useContext(ThemeContext);

  // Logout handler
  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logout!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="relative inline-block text-left">
      <div
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center w-full px-2 py-1 gap-2 border ${
          darkMode ? "border-white" : "border-gray-500"
        }  rounded-full cursor-pointer`}
        id="menu-button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
      >
        <HiOutlineMenuAlt1
          className={`text-3xl ${darkMode ? "text-white" : "text-gray-500"}`}
        />

        {user?.photoURL ? (
          <img
            className="h-[30px] w-[30px] rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <HiUserCircle className="text-gray-500 text-3xl" />
        )}
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="dropdown__container"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <ul className="dropdown__menu">
              <div className="block lg:hidden">{menuItem}</div>
              {user ? (
                <>
                  <li>
                    <Link
                      to={
                        userRole === "Admin"
                          ? "/dashboard/manage-user"
                          : userRole === "Instructor"
                          ? "/dashboard/my-classes"
                          : "/dashboard/my-selected-class"
                      }
                      className="menu__item w-full"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left menu__item"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="menu__item w-full">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="menu__item w-full">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
