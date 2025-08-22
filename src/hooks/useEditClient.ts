import { clientServices } from "@/services/clientServices";
import { ClientItem, EditClientArgs } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useEditClient = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ClientItem,
    AxiosError<{ message: string }>,
    EditClientArgs
  >({
    mutationFn: ({ data, id }) => clientServices.put<ClientItem>(data, id),

    onSuccess: () => {
      toast.success("Client edited successfully");
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });

    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
