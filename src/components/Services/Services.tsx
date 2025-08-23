"use client"
import { useServices } from '@/hooks/useServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Services() {

    const { data } = useServices();


    const services = data?.services.filter(service => service.status === true);

    if (!services) return null;



    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-center text-orange-600 text-sm font-semibold tracking-wide uppercase">
                    Our Services
                </h2>
                <p className="mt-2 text-center text-3xl font-bold text-gray-900">
                    Delivering Quality & Reliability
                </p>

                <div className="mt-16 space-y-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="lg:w-1/2">
                                <Link href={`/services/${service.slug}`} className="overflow-hidden rounded-2xl shadow-lg">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-[300px] lg:h-[400px] rounded hover:scale-105 transition"
                                    />
                                </Link>
                            </div>

                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
