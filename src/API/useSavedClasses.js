import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useSaveClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userLoading } = useAuth();

  const {
    data: savedClasses = [],
    isLoading: classesLoading,
    refetch: classesRefetch,
  } = useQuery({
    queryKey: ["saveClasses", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get("/saved-class");
      return res.data;
    },
  });

  return [savedClasses, classesLoading, classesRefetch];
};
