import { contactServices } from "@/services/contactServices";
import { Contacts } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useGetContact = (id: string) => {
  return useQuery<{ contact: Contacts }>({
    queryKey: ["contact", id],
    queryFn: () => contactServices.getById(id),
    enabled: !!id,
  });
};
