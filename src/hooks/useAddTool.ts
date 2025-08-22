import { tool } from "@/services/toolServices";
import { Tools } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useAddTool = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Tools,
    AxiosError<{ message: string }>,
    { data: FormData }
  >({
    mutationFn: ({ data }) => tool.post<Tools>(data),
    onSuccess: () => {
      toast.success("Tool added successfully");
      queryClient.invalidateQueries({ queryKey: ["tools"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
