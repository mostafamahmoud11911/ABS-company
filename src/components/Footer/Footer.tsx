import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Logo + About */}
                <div>
                    <Image src="/logo.png" alt="ABS Tech" width={140} height={60} />
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        ABS Tech – Delivering trusted pest control and facility services
                        with a commitment to quality and long-term client satisfaction.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <Phone size={18} className="text-orange-500 mt-1" />
                            <span>+971 800 227227</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail size={18} className="text-orange-500 mt-1" />
                            <span>info@abstech.ae</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Globe size={18} className="text-orange-500 mt-1" />
                            <span>www.abstech.ae</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin size={18} className="text-orange-500 mt-1" />
                            <span>
                                P. O. Box 43666, 74th Street, Near Al Fahidi Metro Station,
                                Dubai - United Arab Emirates
                            </span>
                        </li>
                    </ul>
                </div>

                {/* License */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                    <p className="text-sm text-gray-400">
                        ABS Tech is dedicated to providing reliable pest control
                        and facility services with a focus on quality and long-term
                        client relationships.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} ABS Tech. All rights reserved.
            </div>
        </footer>
    )
}
