"use client"
import { useContacts } from '@/hooks/useContact';
import React from 'react'
import ContactsDeleteDialog from './ContactsDeleteDialog';
import ContactEditDialog from './ContactEditDialog';
import ContactDialog from './ContactDialog';

export default function Contacts() {
  const { data, isLoading, error } = useContacts();

  return (
    <div className="p-6">


      {isLoading ? (
        // Skeleton Loading
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden animate-pulse">
          <thead className="bg-gray-100">
            <tr>
              {["Num", "Message", "E-mail", "Country", "City", "Phone", "Status", "Action"].map((h) => (
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
                <td className="px-4 py-3 border-b"><div className="h-4 w-16 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-20 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
                <td className="px-4 py-3 border-b"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
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
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Message</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">E-mail</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">City</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.contacts.length === 0 && (
              <tr>
                <td className="px-4 py-16 text-center text-sm text-gray-600 border-b" colSpan={6}>
                  No contacts found
                </td>
              </tr>
            )}
            {data?.contacts.map((contact, index) => (
              <tr key={contact._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-600 border-b">{index + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-gray-800 border-b">{contact.message}</td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {contact.email}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {contact.city}
                </td>

                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  {contact.phone}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                  <ContactEditDialog contact={contact} />
                </td>
                <td className="flex gap-3 py-2">
                  <ContactDialog contact={contact}/>
                  <ContactsDeleteDialog contact={contact} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
      {error && (
        <div className="py-16 text-center text-red-500">
          Failed to load contacts. Please try again later.
        </div>
      )}
    </div>
  )
}
