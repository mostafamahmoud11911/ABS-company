"use client";
import { usePests } from '@/hooks/usePests';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Pests() {
    const { data } = usePests();

    return (
        <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white">

            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pest Control Categories
                </h2>
                <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
                    Correct pest identification is the first step in successful pest
                    management. Explore the different categories of pests we handle with
                    professional solutions.
                </p>
                <div className="flex flex-wrap justify-center  gap-8 mx-auto max-w-5xl">
                    {data?.pests.map((pest, index) => (
                        <Link
                            href={`/pests/${pest.name}`}
                            key={index}
                            className="bg-white rounded-xl shadow-md p-4 w-40 flex flex-col items-center text-center group hover:shadow-lg hover:scale-105 transition"
                        >
                            <div className="w-24 h-24 flex items-center justify-center mb-3">
                                <Image
                                    src={pest.image}
                                    alt={pest.name}
                                    width={90}
                                    height={90}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition">
                                {pest.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
