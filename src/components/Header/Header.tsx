import React from 'react'
import bg from "../../../public/bg1.jpeg"
import Link from 'next/link'

export default function Header() {
    return (
        <section
            className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    `url(${bg.src})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50" />


            <div className="relative z-10 text-center text-white max-w-5xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Excellence in <span className="text-orange-500">Technical </span> & <span className='text-orange-500'>environmental solutions</span>
                </h1>
                <p className="text-lg md:text-2xl font-light mb-8">
                    Delivering high-quality, reliable, and innovative services tailored
                    to exceed expectations.
                </p>
                <Link href="/about" className=" text-orange-500 py-3 px-5 border border-orange-500 hover:bg-orange-500 hover:text-white font-medium transition-colors duration-100">LEARN MORE</Link>
            </div>
        </section>
    )
}
