"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAddContact } from '@/hooks/useAddContact'
import { useContacts } from '@/hooks/useContact'
import { Contacts } from '@/types/types'
import { contactSchema, ContactSchemaType } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import contact from '../../../../public/contact.jpg'

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: "",
      email: "",
      phone: "",
      city: "",
      blocked: false
    }
  });

  const mutation = useAddContact();
  const { data: contacts } = useContacts();



  function handleSendMessage(data: ContactSchemaType) {
    const isBlocked = contacts?.contacts.some((contact: Contacts) => contact.blocked === true);

    if (isBlocked) {
      return toast.error("You are blocked by the admin");
    }

    mutation.mutate(data);
  }

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    handleSendMessage(data);
  }
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">


        <div className="space-y-6 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
          <p className="text-gray-600">
            Reach out to us directly through the following channels:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-600" />
              <span>+971 800 227227</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-600" />
              <span>info@abstech.ae</span>
            </li>
          </ul>
          <Image src={contact} width={400} height={400} className="object-cover rounded" alt={"contact"} />
        </div>



        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you shortly.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={mutation.isPending} className="!bg-orange-600 w-full !hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
                {mutation.isPending ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>
        </div>


      </div>
    </section>
  )
}
