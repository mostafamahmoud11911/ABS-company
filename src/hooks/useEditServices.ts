import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { EditServiceArgs, ServiceItem } from "@/types/types";
import { services } from "@/services/serviceServices";

export const useEditServices = () => {
  const queryClient = useQueryClient();

  return useMutation<ServiceItem, AxiosError<{ message: string }>, EditServiceArgs>({
    mutationFn: ({ data, id }) => services.put<ServiceItem>(data, id),

    onSuccess: () => {
      toast.success("Service updated successfully");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
