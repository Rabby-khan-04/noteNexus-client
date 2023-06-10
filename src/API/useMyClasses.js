import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useMyclasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userLoading } = useAuth();
  const {
    data: myClasses = [],
    isLoading: isClassesLoading,
    refetch: classesRefetch,
  } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-classes/${user?.email}`);
      return res?.data;
    },
  });
  return [myClasses, isClassesLoading, classesRefetch];
};
