"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useClient } from "@/hooks/useClient";


export default function Clients() {
    const { data } = useClient();

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                    We take pride in delivering outstanding customer service and building lasting partnerships with our clients
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    style={{
                        "--swiper-navigation-color": "#f49a34",
                        "--swiper-pagination-color": "#f49a34",
                    } as React.CSSProperties}
                    className="flex items-center"
                >
                    {data?.clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <Image
                                    src={client.image}
                                    alt={"client"}
                                    width={150}
                                    height={80}
                                    className="object-cover"

                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
