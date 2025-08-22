"use client"

import { useClient } from "@/hooks/useClient";
import ClientsAddDialog from "./ClientsAddDialog";
import Image from "next/image";
import ClientsEditDialog from "./ClientsEditDialog";
import ClientsDeleteDialog from "./ClientsDeleteDialog";

export default function Client() {


  const { data, isLoading, error } = useClient();


  return (
    <div className="p-6">

      <div className="flex justify-end mb-5">
        <ClientsAddDialog />
      </div>


      {isLoading ? (
        // Skeleton Loading
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <thead className="bg-gray-100">
            <tr>
              {["Num", "Image", "Date", "Action"].map((h) => (
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
                <td className="px-4 py-3 border-b">
                  <div className=" bg-gray-200 w-[50px] h-[50px]"></div>
                </td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-20 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Table Data
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Num</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.length === 0 && (
              <tr>
                <td className="px-4 py-16 text-center text-sm text-gray-600 border-b" colSpan={6}>
                  No clients found
                </td>
              </tr>
            )}
            {data?.clients.map((client, index) => (
              <tr key={client._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-600 border-b">{index + 1}</td>

                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  <Image
                    src={client.image || ""}
                    className="w-[50px] h-[50px] object-cover"
                    alt={Image + client._id}
                    width={50}
                    height={50}
                  />
                </td>

                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {new Date(client.createdAt).toLocaleDateString("en-US")}
                </td>
                <td className="flex gap-3 py-2">
                  <ClientsEditDialog client={client} />
                  <ClientsDeleteDialog client={client} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
      {error && (
        <div className="py-16 text-center text-red-500">
          Failed to load clients. Please try again later.
        </div>
      )}
    </div>
  )
}
