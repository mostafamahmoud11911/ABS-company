import { clientServices } from "@/services/clientServices";
import { Client } from "@/types/types";
import { useQuery } from "@tanstack/react-query";


export const useClient = () => {
    return useQuery<Client>({
        queryKey: ["clients"],
        queryFn: clientServices.getAll,
    });
}