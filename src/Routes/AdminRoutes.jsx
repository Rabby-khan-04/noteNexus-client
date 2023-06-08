import React from "react";
import { useUserRole } from "../API/useUserRole";
import { useAuth } from "../API/useAuth";
import Spinner from "../Components/Spinner/Spinner";
import { useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const [userRole, isRoleLoading] = useUserRole();
  const { user, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading && isRoleLoading) {
    return <Spinner />;
  }

  if (user && userRole === "Admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
