import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetContact } from '@/hooks/useGetContact';
import { Contacts } from '@/types/types'
import { Eye } from "lucide-react";
import React from 'react'

export default function ContactDialog({ contact }: { contact: Contacts }) {


  const { data, isLoading, error, isError } = useGetContact(contact._id);



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 rounded-md p-2 px-4 text-white">
          <Eye size={20} className='cursor-pointer' />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Details</DialogTitle>
        </DialogHeader>


        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}


        {isError && (
          <div className="text-center text-red-500 py-5">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        )}

        {data && (
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Message:</p>
              <p className="text-gray-600 whitespace-pre-line">
                {data.contact.message}
              </p>
            </div>

            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-gray-600">{data.contact.email}</p>
            </div>

            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-gray-600">{data.contact.phone}</p>
            </div>

            <div>
              <p className="font-semibold">City:</p>
              <p className="text-gray-600">{data.contact.city}</p>
            </div>



            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Blocked:</p>
                <p
                  className={
                    data.contact.blocked ? "text-red-500" : "text-green-500"
                  }
                >
                  {data.contact.blocked ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <p className="font-semibold">Created At:</p>
                <p className="text-gray-600">
                  {new Date(data.contact.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog >
  )
}
