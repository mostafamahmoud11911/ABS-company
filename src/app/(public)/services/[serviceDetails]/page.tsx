"use client"
import { useGetService } from '@/hooks/useGetSevice'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import noImage from '../../../../../public/noImage.jpg'
import React from 'react'

export default function ServiceDetails() {

  const slug = useParams();

  const { data } = useGetService(slug.serviceDetails as string)



  return (
    <section className="relative overflow-hidden py-24 ">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">


        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text py-3 text-transparent">
            {data?.service.title}
          </h2>
          <p className="leading-relaxed text-lg max-w-lg">
            {data?.service.description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <Image
            src={data?.service.image || noImage}
            alt="Building Maintenance"
            width={600}
            height={400}
            className="relative rounded-2xl shadow-2xl border border-white/20 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
