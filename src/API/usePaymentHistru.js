import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import { useAuth } from "./useAuth";

export const usePaymentHistry = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentHistry = [], isLoading: histryLoading } = useQuery({
    queryKey: ["paymentHistry", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("payment-histry");
      return res?.data;
    },
  });
  return [paymentHistry, histryLoading];
};
