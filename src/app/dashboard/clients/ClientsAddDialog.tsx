import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAddClient } from '@/hooks/useAddClient';
import { addClientSchema, AddClientSchemaType } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ClientsAddDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const form = useForm({ resolver: zodResolver(addClientSchema), defaultValues: { image: undefined } });


  const mutation = useAddClient(() => {
    setIsDialogOpen(false);
    form.reset();
  });



  const onSubmit: SubmitHandler<AddClientSchemaType> = (data) => {
    const formData = new FormData();
    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    mutation.mutate({ data: formData });
    setIsDialogOpen(false);
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className=" justify-end">
          Add Client
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Client</DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            {/* <FormField
              control={form.control}
              name="company"
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
                    <Input type='text' placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}


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
                      ref={field.ref}
                    />
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
