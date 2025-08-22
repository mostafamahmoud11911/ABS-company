import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEditClient } from '@/hooks/useEditClient'
import { ClientItem } from '@/types/types'
import { EditClientSchema, EditClientSchemaType } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Edit, Loader } from 'lucide-react'

export default function ClientsEditDialog({ client }: { client: ClientItem }) {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const form = useForm({ resolver: zodResolver(EditClientSchema), defaultValues: { image: undefined } });


    const mutation = useEditClient();


    const onSubmit: SubmitHandler<EditClientSchemaType> = async (data) => {

        const formData = new FormData();

        if (data?.image?.[0]) {
            formData.append("image", data.image[0]);
        }

        if (client?._id) {
            mutation.mutate({ data: formData, id: client._id });
        }

        setIsDialogOpen(false);
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-700 p-2 px-4 text-white">
                    <Edit size={20} className='cursor-pointer' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit Client</DialogTitle>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => field.onChange(e.target.files)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='w-full'>{mutation.isPending ? <Loader /> : "Submit"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
