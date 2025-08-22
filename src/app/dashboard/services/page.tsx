"use client"

import { useServices } from "@/hooks/useServices"
import Image from "next/image";
import ServicesDeleteDialog from "./ServicesDeleteDialog";
import ServicesEditDialog from "./ServicesEditDialog";
import ServicesAddDialog from "./ServicesAddDialog";

export default function Services() {
  const { data, isLoading, error } = useServices();



  return (
    <div className="p-6">

      <div className="flex justify-end mb-5">
        <ServicesAddDialog />
      </div>


      {isLoading ? (
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <thead className="bg-gray-100">
            <tr>
              {["Num", "Title", "Image", "Status", "Date", "Action"].map((h) => (
                <th key={h} className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                <td className="px-4 py-3 border-b"><div className="h-4 w-6 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-24 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b">
                  <div className="w-[50px] h-[50px] bg-gray-200"></div>
                </td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-16 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-20 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Num</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.services.length === 0 && (
              <tr>
                <td className="px-4 py-16 text-center text-sm text-gray-600 border-b" colSpan={6}>
                  No services found
                </td>
              </tr>
            )}
            {data?.services.map((service, index) => (
              <tr key={service._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-600 border-b">{index + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-gray-800 border-b">{service.title}</td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  <Image
                    src={service.image || ""}
                    className="w-[50px] h-[50px] object-cover"
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {service.status ? (
                    <p className="bg-green-400 w-fit text-white px-2 py-1 rounded">Active</p>
                  ) : (
                    <p className="bg-red-400 text-white w-fit px-2 py-1 rounded">Inactive</p>
                  )}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {new Date(service.createdAt).toLocaleDateString("en-US")}
                </td>
                <td className="flex gap-3 py-2">
                  <ServicesEditDialog service={service} />
                  <ServicesDeleteDialog service={service} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
      {error && (
        <div className="py-16 text-center text-red-500">
          Failed to load services. Please try again later.
        </div>
      )}
    </div>
  )
}
