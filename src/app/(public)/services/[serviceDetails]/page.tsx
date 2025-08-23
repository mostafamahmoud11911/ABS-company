"use client"
import { useGetService } from '@/hooks/useGetSevice'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ServiceDetails() {

  const slug = useParams();

  const { data } = useGetService(slug.serviceDetails as string)



  return (
    <div className="bg-gray-50 py-12 ">
      <div className="relative h-64 w-full flex items-center justify-center shadow-lg bg-gradient-to-t from-orange-400 to-orange-500">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold">Services</h2>
          <p className="text-orange-100 mt-2">Home &gt; Services</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10">


        <div className="mt-8 text-center my-10">
          <p className="text-xl font-semibold text-orange-600 tracking-wide mb-2">          What we offer</p>
          <h3 className='text-5xl font-bold my-5'>

            Get rid of unwanted pests!
          </h3>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Our mission is to deliver reliable, high-quality maintenance services
            that elevate your experience and ensure complete customer satisfaction.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

          <div className="flex flex-col justify-center">
            <p className='text-orange-600 text-xl'>OUR SERVICES</p>
            <h2 className="text-3xl font-bold my-4">{data?.service.title}</h2>
            <p className="text-gray-600 mb-4">{data?.service.description}</p>
          </div>


          <div className="flex items-center justify-center">
            <Image src={data?.service.image ?? ""} alt="Service Image" width={300} height={300} />
          </div>
        </div>

      </div>




    </div>
  )
}
