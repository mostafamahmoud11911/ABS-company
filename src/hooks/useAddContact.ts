import { contactServices } from "@/services/contactServices";
import { Contacts } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useAddContact = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Contacts,
    AxiosError<{ message: string }>,
    {
      message: string;
      city: string;
      email: string;
      phone: string;
      blocked: boolean;
    }
  >({
    mutationFn: (data) => contactServices.post(data),
    onSuccess: () => {
      toast.success("sent successfully");
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
