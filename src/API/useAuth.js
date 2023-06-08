import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};
