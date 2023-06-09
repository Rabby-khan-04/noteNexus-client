import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const usePopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userLoading } = useAuth();
  const {
    data: popularClass = [],
    isLoading: isPopularClassLoading,
    refetch: popularClassesRefetch,
  } = useQuery({
    queryKey: ["popularClass", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get("/popular-classes");
      return res.data;
    },
  });

  return [popularClass, isPopularClassLoading, popularClassesRefetch];
};
