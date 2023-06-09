import { useUserRole } from "../API/useUserRole";
import { useAuth } from "../API/useAuth";
import Spinner from "../Components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const InstructorsRoutes = ({ children }) => {
  const [userRole, isRoleLoading] = useUserRole();
  const { user, userLoading, userLogout } = useAuth();
  const location = useLocation();

  if (userLoading || isRoleLoading) {
    return <Spinner />;
  }

  if (user && userRole === "Instructor") {
    return children;
  } else {
    userLogout();
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default InstructorsRoutes;
