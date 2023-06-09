import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userLoading } = useAuth();
  const {
    data: allUser = [],
    isLoading: allUserLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["allUser", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users/${user?.email}`);
      return res.data;
    },
  });
  return [allUser, allUserLoading, userRefetch];
};
