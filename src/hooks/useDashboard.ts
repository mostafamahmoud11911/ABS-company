"use client";
import { dashboardServices } from "@/services/dashboardServices";
import { Dashboard } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const useDashboard = () => {
  return useQuery<{ data: Dashboard }>({
    queryKey: ["dashboard"],
    queryFn: dashboardServices.getAll,
  });
};

export default useDashboard;
