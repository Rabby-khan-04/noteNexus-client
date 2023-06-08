import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

// Save Logged In user
export const saveUser = async (user) => {
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    role: "Student",
  };

  const res = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/user/${user?.email}`,
    currentUser
  );
};

export const useUserRole = () => {
  const { user, userLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: userRole, isLoading: isRoleLoading } = useQuery(
    ["userRole", user?.email],

    async () => {
      try {
        const res = await axiosSecure.get(`/user-role/${user?.email}`);
        return res.data.role;
      } catch (error) {
        // Handle the error here (e.g., show an error message or log it)
        throw new Error("Failed to fetch user role.");
      }
    },
    {
      enabled: !userLoading,
    }
  );
  return [userRole, isRoleLoading];
};
