import { contactServices } from "@/services/contactServices";
import { ContactsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";


export const useContacts = () =>{
    return useQuery<ContactsResponse>({
        queryKey: ["contact"],
        queryFn: contactServices.getAll,
    });
}