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
            <div className="max-w-6xl mx-auto px-6">
                <p className="mt-2 text-center text-xl text-black max-w-2xl mx-auto">
                    Explore our range of professional services designed to keep your property in top condition — combining quality, care, and reliability.
                </p>

                <div className="mt-16 space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="lg:w-1/3 max-w-md">
                                <Link href={`/services/${service.slug}`} className="overflow-hidden shadow-lg">
                                    <div className="overflow-hidden rounded-xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={200}
                                            className="w-full max-h-64 object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                </Link>
                            </div>

                            <div className="lg:w-2/3">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
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
