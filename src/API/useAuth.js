import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const useAuth = () => {
  const authInf = useContext(AuthContext);
  return authInf;
};
