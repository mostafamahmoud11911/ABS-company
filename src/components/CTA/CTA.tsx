import { Mail, Phone } from 'lucide-react'
import React from 'react'


export default function CTA() {
  return (
    <section className="relative bg-orange-600 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-5 rounded-full mb-4 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-2xl font-bold mb-1">+971 800 227227</p>
            <span className="text-sm opacity-90">Sunday - Friday (08:00 AM - 05:00 PM)</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/20 p-5 rounded-full mb-4 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-2xl font-bold mb-1">info@abstech.ae</p>
            <span className="text-sm opacity-90">We reply within 24 hours</span>
          </div>

        </div>
      </div>
    </section>
  )
}
