import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEditTool } from '@/hooks/useEditTool'
import { Tools } from '@/types/types'
import { EditToolSchema, EditToolSchemaType } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, Loader } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ToolsEditDialog({ tool }: { tool: Tools }) {

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const form = useForm({ resolver: zodResolver(EditToolSchema), defaultValues: { name: tool?.name, image: undefined } });


    const mutation = useEditTool(()=> {
        setIsDialogOpen(false);
        form.reset();
    });


    const onSubmit: SubmitHandler<EditToolSchemaType> = async (data) => {

        const formData = new FormData();

        formData.append("name", data.name ?? "");

        if (data?.image?.[0]) {
            formData.append("image", data.image[0]);
        }


        if (tool?._id) {
            mutation.mutate({ data: formData, id: tool._id });
        }

    }
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-700 p-2 px-4 text-white">
                    <Edit size={20} className='cursor-pointer' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit Service</DialogTitle>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


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
