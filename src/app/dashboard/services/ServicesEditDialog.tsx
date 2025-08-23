import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useEditServices } from '@/hooks/useEditServices'
import { ServiceItem } from '@/types/types'
import { EditServiceSchema, EditServiceSchemaType } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, Loader } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ServicesEditDialog({ service }: { service: ServiceItem }) {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const form = useForm({ resolver: zodResolver(EditServiceSchema), defaultValues: { title: service?.title, description: service?.description, summary: service?.summary, image: undefined, status: service?.status } });


    const mutation = useEditServices(()=> {
        setIsDialogOpen(false);
        form.reset();
    });



    const onSubmit: SubmitHandler<EditServiceSchemaType> = async (data) => {

        const formData = new FormData();

        formData.append("title", data.title ?? "");
        formData.append("description", data.description ?? "");
        formData.append("summary", data.summary ?? "");

        if (data?.image?.[0]) {
            formData.append("image", data.image[0]);
        }

        formData.append("status", String(data.status ?? false));

        if (service?._id) {
            mutation.mutate({ data: formData, id: service._id });
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
                <DialogTitle>Edit Service</DialogTitle>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="summary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Summary</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Summary" {...field} />
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

                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select
                                            value={field.value ? "true" : "false"}
                                            onValueChange={(val) => field.onChange(val === "true")}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="true">Active</SelectItem>
                                                <SelectItem value="false">Inactive</SelectItem>
                                            </SelectContent>
                                        </Select>
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
