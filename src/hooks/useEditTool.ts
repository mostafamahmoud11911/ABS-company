import { tool } from "@/services/toolServices";
import { Tools } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useEditTool = (onSuccessCallback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<
    Tools,
    AxiosError<{ message: string }>,
    { data: FormData; id: string }
  >({
    mutationFn: ({ id, data }) => tool.put(data, id),
    onSuccess: () => {
      toast.success("Tool updated successfully");
      queryClient.invalidateQueries({ queryKey: ["tools"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (err) => {
      toast.error(err.response?.data.message || "Something went wrong");
    },
  });
};
