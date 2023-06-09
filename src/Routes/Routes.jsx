import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Spinner from "../Components/Spinner/Spinner";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageClasses from "../Pages/Dashobard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashobard/ManageUser/ManageUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import UserHome from "../Pages/Dashobard/UserHome/UserHome";
import MyClasses from "../Pages/Dashobard/MyClasses/MyClasses";
import AddClass from "../Pages/Dashobard/AddClass/AddClass";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "instructors",
        element: (
          <PrivateRoutes>
            <Instructors />
          </PrivateRoutes>
        ),
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "manage-classes",
        element: (
          <AdminRoutes>
            <ManageClasses />
          </AdminRoutes>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoutes>
            <ManageUser />
          </AdminRoutes>
        ),
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
    ],
  },
]);
