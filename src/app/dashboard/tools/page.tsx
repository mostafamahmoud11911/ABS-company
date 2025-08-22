"use client"
import React from 'react'
import ToolsAddDialog from './ToolsAddDialog'
import ToolsEditDialog from './ToolsEditDialog'
import ToolsDeleteDialog from './ToolsDeleteDialog'
import Image from 'next/image'
import { useTools } from '@/hooks/useTools'

export default function Tools() {
  const { data, isLoading, error } = useTools();


  return (
    <div className="p-6">

      <div className="flex justify-end mb-5">
        <ToolsAddDialog />
      </div>


      {isLoading ? (
        // Skeleton Loading
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <thead className="bg-gray-100">
            <tr>
              {["Num", "Name", "Description", "Image", "Date", "Action"].map((h) => (
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
                <td className="px-4 py-3 border-b"><div className="h-4 w-16 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b">
                  <div className="w-[50px] h-[50px] bg-gray-200"></div>
                </td>
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
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.tools.length === 0 && (
              <tr>
                <td className="px-4 py-16 text-center text-sm text-gray-600 border-b" colSpan={6}>
                  No tools found
                </td>
              </tr>
            )}
            {data?.tools.map((tool, index) => (
              <tr key={tool._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-600 border-b">{index + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-gray-800 border-b">{tool.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {tool.description}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  <Image
                    src={tool.image || ""}
                    className="w-[50px] h-[50px] object-cover"
                    alt={tool.name}
                    width={50}
                    height={50}
                  />
                </td>

                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {new Date(tool.createdAt).toLocaleDateString("en-US")}
                </td>
                <td className="flex gap-3 py-2">
                  <ToolsEditDialog tool={tool} />
                  <ToolsDeleteDialog tool={tool} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
      {error && (
        <div className="py-16 text-center text-red-500">
          Failed to load tools. Please try again later.
        </div>
      )}
    </div>
  )
}
