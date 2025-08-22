import { services } from "@/services/serviceServices";
import { ServicesResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useServices = () => {
  return useQuery<ServicesResponse>({
    queryKey: ["services"],
    queryFn: () => services.getAll(),
  });
};
