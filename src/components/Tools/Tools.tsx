"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { useTools } from '@/hooks/useTools';

export default function Tools() {


    const {data} = useTools();

    // const tools = [
    //     {
    //         img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3hBCtreCXRf3UKv652GFvi0oBstdtnadvEXPJOjC7xqjIBslYSBlyoZlKt-6tQ1PUiqlJ9-NS0iOf6OomWY50IA",
    //         title: "Advanced Equipment",
    //         desc: "We use modern, precise tools to ensure maximum efficiency and safety.",
    //     },
    //     {
    //         img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3hBCtreCXRf3UKv652GFvi0oBstdtnadvEXPJOjC7xqjIBslYSBlyoZlKt-6tQ1PUiqlJ9-NS0iOf6OomWY50IA",
    //         title: "Eco-Safe Sprayers",
    //         desc: "All our sprayers are calibrated for safe and even application.",
    //     },
    //     {
    //         img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3hBCtreCXRf3UKv652GFvi0oBstdtnadvEXPJOjC7xqjIBslYSBlyoZlKt-6tQ1PUiqlJ9-NS0iOf6OomWY50IA",
    //         title: "Non-toxic Solutions",
    //         desc: "Only eco-friendly and safe liquids are used in our process.",
    //     },
    //     {
    //         img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3hBCtreCXRf3UKv652GFvi0oBstdtnadvEXPJOjC7xqjIBslYSBlyoZlKt-6tQ1PUiqlJ9-NS0iOf6OomWY50IA",
    //         title: "Protective Gear",
    //         desc: "Our team is equipped with certified safety gear for full protection.",
    //     },
    // ];
    return (
        <section className="flex justify-center items-center py-16 px-6 bg-gray-50">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Professional Tools
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    We only use reliable, safe, and environmentally conscious tools to ensure
                    the best results for our clients.
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    style={{
                        "--swiper-navigation-color": "#f49a34",
                        "--swiper-pagination-color": "#f49a34",
                    } as React.CSSProperties}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {data?.tools.map((tool, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
                                <Image
                                    src={tool.image}
                                    width={500}
                                    height={500}
                                    alt={tool.name}
                                    className="w-full h-40 object-cover rounded-xl mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
