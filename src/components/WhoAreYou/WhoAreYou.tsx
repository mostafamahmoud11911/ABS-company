import Image from 'next/image'
import img from "../../../public/1.jpeg"
import img2 from "../../../public/3.png"
import React from 'react'
import Link from 'next/link'

export default function WhoAreYou() {
    return (
        <section>
            <div className="relative overflow-hidden bg-white">

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-widest text-orange-600">WHO WE ARE</p>
                        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                            The maintenance & technical partner you can trust.
                        </h1>


                        <div className="space-y-4 text-slate-600">
                            <p>
                                ABS Technical Services began with a significant vision to provide comprehensive maintenance and technical services to clients, with a special focus on quality and safety. ABS was established in 2011 in Dubai as a maintenance company catering to all sectors, offering a wide range of services such as maintenance and construction.
                            </p>
                            <p>
                                It has proven its effectiveness in terms of cost and extensive practical knowledge, making our services competitive. We also take care of all types of air conditioning systems, electrical, mechanical works, and maintenance of building insulation.
                            </p>
                        </div>


                        <div className="mt-8 flex items-center gap-4">
                            <Link href="/about" className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:translate-y-0.5 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Discover more</Link>
                            <Link href="/contact" className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-orange-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5A7.508 7.508 0 0 0 12 4.5Zm0 13.5A6 6 0 1 1 18 12a6.007 6.007 0 0 1-6 6Zm.75-9.75h-1.5v4.5h4.5v-1.5h-3V8.25Z" /></svg>
                                Book a visit
                            </Link>
                        </div>
                    </div>


                    <div className="relative">
                        <div className="card group relative overflow-hidden">
                            <Image src={img} width={500} height={500} alt="Technician performing maintenance in a modern building" className="h-[460px] w-full" />
                        </div>


                        <div className="card absolute bottom-[-40px] right-[-10px] w-[90%] max-w-xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:right-[-40px]">
                            <div className="mb-3 text-4xl leading-none text-orange-500">“</div>
                            <p className="text-slate-700">ABS consistently delivers safe, on‑time, and cost‑effective maintenance—our go‑to technical partner in Dubai.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative overflow-hidden bg-slate-50">


                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 lg:gap-16">

                    <div className="card relative overflow-hidden ring-1 ring-slate-900/5">
                        <Image src={img2} width={500} height={500} alt="Team inspecting and documenting maintenance work" className="h-[460px] w-full object-cover" />
                    </div>


                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-widest text-orange-600">OUR APPROACH</p>
                        <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
                            Delivering quality, safety & reliability.
                        </h2>
                        <p className="mb-8 max-w-2xl text-slate-600">
                            At ABS, we specialize in air conditioning systems, electrical and mechanical works, and building insulation maintenance. With more than a decade of experience, our team combines technical expertise with a strong commitment to safety and innovation.
                        </p>


                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="card bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600"><path d="M5 3a2 2 0 0 0-2 2v2h4V3H5Zm0 6H3v12a2 2 0 0 0 2 2h2V9H5Zm6-6h2v20h-2V3Zm6 0h2a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2V3Z" /></svg>
                                </div>
                                <h3 className="text-lg font-semibold">General Maintenance</h3>
                                <p className="mt-2 text-sm text-slate-600">Reliable, end‑to‑end technical maintenance for facilities of all sizes.</p>
                            </div>


                            <div className="card bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600"><path d="M6 3h12v2H6V3Zm-2 4h16v2H4V7Zm2 4h12v2H6v-2Zm-2 4h16v2H4v-2Zm2 4h12v2H6v-2Z" /></svg>
                                </div>
                                <h3 className="text-lg font-semibold">Air Conditioning</h3>
                                <p className="mt-2 text-sm text-slate-600">Installation, repair and preventive maintenance of all AC systems.</p>
                            </div>


                            <div className="card bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600"><path d="M4 6h16v2H4V6Zm0 4h10v2H4v-2Zm0 4h16v2H4v-2Zm0 4h10v2H4v-2Z" /></svg>
                                </div>
                                <h3 className="text-lg font-semibold">Electrical & Mechanical</h3>
                                <p className="mt-2 text-sm text-slate-600">Certified experts for safe electrical and mechanical works.</p>
                            </div>


                            <div className="card bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600"><path d="M4 4h16v6H4V4Zm0 8h10v8H4v-8Zm12 0h4v8h-4v-8Z" /></svg>
                                </div>
                                <h3 className="text-lg font-semibold">Construction & Insulation</h3>
                                <p className="mt-2 text-sm text-slate-600">Durable construction support and building insulation maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>




    )
}
