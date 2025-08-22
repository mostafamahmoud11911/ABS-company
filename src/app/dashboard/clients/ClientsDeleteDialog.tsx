import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useDeleteClient } from '@/hooks/useDeleteClient'
import { ClientItem } from '@/types/types'
import { TrashIcon } from 'lucide-react'
import React from 'react'

export default function ClientsDeleteDialog({ client }: { client: ClientItem }) {


  const mutation = useDeleteClient()


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 rounded-md bg-red-500 hover:bg-red-700 p-2 px-4 text-white">
          <TrashIcon size={20} className='cursor-pointer' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Client</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this client?
            <Button disabled={mutation.isPending} onClick={() => mutation.mutate(client._id)} className="flex items-center mt-3 justify-end gap-2 rounded-md bg-red-500 hover:bg-red-700 p-2 px-4 text-white">Delete</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
