import React from "react";
import { useAuth } from "../API/useAuth";
import Spinner from "../Components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
