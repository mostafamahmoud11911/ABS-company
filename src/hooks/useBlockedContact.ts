import { contactServices } from "@/services/contactServices";
import { Contacts } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useBlockedContact = () => {
  const queryClient = useQueryClient();
  return useMutation<
    {contacts:Contacts; message: string},
    AxiosError<{ message: string }>,
    { data: boolean; id: string }
  >({
    mutationFn: async ({ data, id }) => {
      const res = contactServices.patch<{contacts:Contacts; message: string}>(data, id);
      return res;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
