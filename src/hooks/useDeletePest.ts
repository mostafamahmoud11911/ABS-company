import { pestServices } from "@/services/pestServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useDeletePest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => pestServices.delete(id),
    onSuccess: () => {
      toast.success("Pest deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["pests"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      }
    },
  });
};
