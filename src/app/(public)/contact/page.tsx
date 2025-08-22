import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">


        <div className="space-y-6 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
          <p className="text-gray-600">
            Reach out to us directly through the following channels:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-600" />
              <span>+971 800 227227</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-600" />
              <span>info@abstech.ae</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span>
                P. O. Box 43666, 74th Street, Near Al Fahidi Metro Station,
                Dubai - United Arab Emirates
              </span>
            </li>
          </ul>
        </div>



        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form and our team will get back to you shortly.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>


      </div>
    </section>
  )
}
