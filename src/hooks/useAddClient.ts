import { clientServices } from "@/services/clientServices";
import { ClientItem } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useAddClient = (onSuccessCallback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<
    ClientItem,
    AxiosError<{ message: string }>,
    { data: FormData }
  >({
    mutationFn: ({ data }) => clientServices.post(data),
    onSuccess: () => {
      toast.success("Client added successfully");
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
