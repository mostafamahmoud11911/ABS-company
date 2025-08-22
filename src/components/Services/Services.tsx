"use client"
import { useServices } from '@/hooks/useServices';
import Image from 'next/image';
import React from 'react'

export default function Services() {

    const { data } = useServices();


    const services = data?.services.filter(service => service.status === true);

    if (!services) return null;

    // const services = [
    //     {
    //         title: "Building Maintenance",
    //         description:
    //             "At ABS we offer comprehensive building maintenance solutions designed to keep your property in top condition. Our services include expert AC maintenance and repair, duct cleaning, professional painting, plumbing solutions, bathroom fittings, construction, interlocks, car parking, parking sheds, and electrical works. We are committed to quality, efficiency, and customer satisfaction.",
    //         image: "https://i.dailymail.co.uk/1s/2024/09/02/18/89195579-13805427-The_football_star_39_has_been_dating_Georgina_30_since_2016_and_-a-16_1725298061463.jpg",
    //     },
    //     {
    //         title: "Insulation & Protection Services",
    //         description:
    //             "We specialize in advanced waterproofing and insulation solutions to protect your property from water damage and enhance energy efficiency. From roof and wall waterproofing to temperature regulation and sustainability, our team delivers reliable and cost-effective solutions using premium materials.",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoc1BWHoWnTlGR6Pu3Af2LJSke3hGAi0OrdT00e1jU2XX1rfjVZnS8Moh2k57qbgVFNg&usqp=CAU",
    //     },
    //     {
    //         title: "Termite Control Services",
    //         description:
    //             "ABS Technical Services provides expert termite control solutions with detailed inspections, targeted treatments, and preventive measures. Using eco-friendly products and advanced techniques, we ensure safe and long-term protection for your property.",
    //         image: "https://hollywoodlife.com/wp-content/uploads/2021/12/Cristiano-Ronaldo-Georgina-Baby-Bump-ss-vertical.jpg",
    //     },
    //     {
    //         title: "Public Health Pest Control Services",
    //         description:
    //             "We specialize in controlling mosquitoes, cockroaches, rodents, flies, and other pests that pose health risks. Our eco-friendly methods ensure safe and effective pest management for residential, commercial, and industrial spaces.",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijM_YQDTl_a6qMtN_2bZDF8EJQfN8rG4MlPP1LjsZlvW69Tc-PoBTCau2W9zNl-riTNw&usqp=CAU",
    //     },
    //     {
    //         title: "General Cleaning Services",
    //         description:
    //             "ABS offers professional cleaning services for hospitals, schools, offices, and homes. From deep cleaning and sanitization to waste management, we maintain the highest standards of hygiene with eco-friendly products and advanced equipment.",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROT_XehXSp-LjpDWfN6QyjzFjBntmkJEWSohKU7gIWYCXkpiB6E9-8G-Z4ps5MpCoWnUA&usqp=CAU",
    //     },
    // ];
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
                            {/* صورة */}
                            <div className="lg:w-1/2">
                                <div className="overflow-hidden rounded-2xl shadow-lg">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-[300px] lg:h-[400px] hover:scale-105 transition"
                                    />
                                </div>
                            </div>

                            {/* نص */}
                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
