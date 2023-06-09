import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useClass = (id) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, userLoading } = useAuth();
  const { data: classData = {} } = useQuery({
    queryKey: ["classdata", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/class/${id}`);
      return res.data;
    },
  });
  return [classData];
};
