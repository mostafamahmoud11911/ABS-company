import { pestServices } from "@/services/pestServices";
import { Pests } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useEditPest = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Pests,
    AxiosError<{ message: string }>,
    { data: FormData; id: string }
  >({
    mutationFn: ({ data, id }) => pestServices.put(data, id),
    onSuccess: () => {
      toast.success("Pest edited successfully");
      queryClient.invalidateQueries({ queryKey: ["pests"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
