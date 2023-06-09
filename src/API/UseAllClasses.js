import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const useAllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: allClasses = [],
    isLoading: isClassLoading,
    refetch: refetchClasses,
  } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });

  return [allClasses, isClassLoading, refetchClasses];
};
