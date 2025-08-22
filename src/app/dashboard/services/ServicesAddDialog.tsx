import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useAddServices } from '@/hooks/useAddServices'
import { addServiceSchema, AddServiceSchemaType } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ServicesAddDialog() {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const form = useForm({ resolver: zodResolver(addServiceSchema), defaultValues: { title: "", description: "", summary: "", image: undefined, status: undefined } });


    const mutation = useAddServices();



    const onSubmit: SubmitHandler<AddServiceSchemaType> = (data) => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("summary", data.summary);
        if (data.image?.[0]) {
            formData.append("image", data.image[0]);
        }
        formData.append("status", data.status.toString());

        mutation.mutate({ data: formData });
        setIsDialogOpen(false);
    }


    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className=" justify-end">
                    Add Service
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Create Service</DialogTitle>

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
                                            // pass both onChange and ref so RHF can track the input
                                            onChange={(e) => field.onChange(e.target.files)}
                                            ref={field.ref}
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
                                            value={field.value === undefined ? "" : field.value ? "true" : "false"}
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

                        <Button type="submit" disabled={mutation.isPending} className='w-full'>{mutation.isPending ? <Loader /> : "Submit"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
