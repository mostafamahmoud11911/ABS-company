import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAddTool } from '@/hooks/useAddTool';
import { addToolSchema, AddToolSchemaType } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ToolsAddDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const form = useForm({ resolver: zodResolver(addToolSchema), defaultValues: { name: "", image: undefined } });


  const mutation = useAddTool(()=> {
    setIsDialogOpen(false);
    form.reset();
  });



  const onSubmit: SubmitHandler<AddToolSchemaType> = (data) => {


    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    mutation.mutate({ data: formData });
    
  }
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className=" justify-end">
          Add Tool
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Tool</DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
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
                      // pass both onChange and ref so RHF can track the input
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
