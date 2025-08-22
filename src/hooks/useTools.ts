import { tool } from "@/services/toolServices";
import { ToolsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useTools = () => {
  return useQuery<ToolsResponse>({
    queryKey: ["tools"],
    queryFn: tool.getAll,
  });
};
