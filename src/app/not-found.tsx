import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center  bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* خلفية ديكور دوائر شفافة */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* المحتوى */}
      <div className="text-center relative z-10 px-6">
        <h1 className="text-9xl font-extrabold drop-shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text py-3 text-transparent">404</h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="mt-3 text-lg text-white/90 max-w-lg mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-white text-orange-600 shadow-lg hover:bg-gray-100 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* الفوتر باسم الشركة */}
      <div className="absolute bottom-6 text-sm text-white/70">
        © {new Date().getFullYear()} ABS Technical Services
      </div>
    </section>
  )
}
