import Image from 'next/image'
import about from "../../../public/about.jpeg"
import React from 'react'

export default function About() {
    return (
        <section className="relative bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">

                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-orange-600 uppercase tracking-wide font-semibold text-sm mb-2">
                        Welcome to ABS Technical Services
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        We prioritize <span className="text-orange-600">quality</span> &{" "}
                        <span className="text-orange-600">safety</span>
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6">
                        Offering innovative services in waterproofing, pest control, and all
                        maintenance. Our goal is to exceed client expectations and set industry
                        standards.
                    </p>
                    <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6">
                        Providing pioneering services in facilities management and enhancing the
                        maintenance experience by delivering high-quality and reliable services.
                    </p>
                    <ul className="text-gray-700 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                        <li>✔ Customer First</li>
                        <li>✔ Governance</li>
                        <li>✔ Professionalism</li>
                        <li>✔ Innovation</li>
                        <li>✔ Pioneering Partnership</li>
                        <li>✔ Competitiveness</li>
                    </ul>
                </div>

                <div className="flex-1 relative">
                    <Image
                        src={about}
                        width={500}
                        height={500}
                        priority
                        alt="ABS Technical Services"
                        className="w-full rounded-xl shadow-lg"
                    />
                    <div className="absolute bottom-6 right-6 bg-white shadow-lg px-6 py-4 rounded-lg">
                        <h3 className="text-orange-600 text-3xl font-bold">10+</h3>
                        <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
