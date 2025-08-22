import { pestServices } from "@/services/pestServices";
import { PestsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const usePests = () => {
  return useQuery<PestsResponse>({
    queryKey: ["pests"],
    queryFn: pestServices.getAll,
  });
};
