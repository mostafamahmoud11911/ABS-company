import { services } from "@/services/serviceServices";
import { Services } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useGetService = (slug: string) => {
  return useQuery<Services>({
    queryKey: ["service", slug],
    queryFn: () => services.getBySlug(slug),
  });
};
