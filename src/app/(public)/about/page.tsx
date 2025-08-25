import React from 'react'
import bg from "../../../../public/bg1.jpeg"


export default function About() {
    return (
        <section className="bg-white">

            <div
                className="relative h-[280px] flex flex-col justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 ml-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
                        COMPANY PROFILE
                    </h1>
                    <div className="mt-3 w-24 h-1 bg-white/80 rounded-full"></div>
                </div>
            </div>





            {/* الباث */}
            <div className="container mx-auto px-6 py-4 text-sm text-gray-500">
                Home / About / <span className="text-gray-700 font-medium">Company Profile</span>
            </div>

            {/* المحتوى */}
            <div className="container mx-auto px-6 py-12 space-y-6 text-gray-700 leading-relaxed">
                <p>
                    <span className="font-bold text-gray-900">ABS Technical Services </span>
                    was founded in 2011 in Dubai by <span className="font-medium">Saif Ahmad Al Shehhi</span>
                    with a clear vision to deliver comprehensive maintenance and technical
                    solutions with an unwavering commitment to quality and safety.
                </p>

                <p className="italic font-semibold text-orange-600">
                    Excellence in Technical & environmental solutions
                </p>

                <p>
                    As a trusted maintenance and technical service provider, we cater to diverse sectors,
                    offering cost-effective solutions backed by extensive industry expertise.
                </p>

                <p>
                    We specialize in providing <span className="font-semibold">General Maintenance Services,
                        Air Conditioning, Painting Contracting, Pest Control, Anti-Termite, Insulation,
                        Protection and Waterproofing, Deep Cleaning and Disinfection.</span>
                </p>

                <p>
                    Our competitive advantage lies in the combination of practical knowledge and effective service execution.
                </p>
            </div>
        </section >
    )
}
