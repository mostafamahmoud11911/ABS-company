import { services } from "@/services/serviceServices";
import { ServiceItem } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useAddServices = (onSuccessCallback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<
    ServiceItem,
    AxiosError<{ message: string }>,
    { data: FormData }
  >({
    mutationFn: ({ data }) => services.post<ServiceItem>(data),
    onSuccess: () => {
      toast.success("Service added successfully");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
