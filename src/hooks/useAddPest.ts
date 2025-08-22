import { pestServices } from "@/services/pestServices";
import { Pests } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useAddPest = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Pests,
    AxiosError<{ message: string }>,
    { data: FormData }
  >({
    mutationFn: ({ data }) => pestServices.post(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pests"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Pest added successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};