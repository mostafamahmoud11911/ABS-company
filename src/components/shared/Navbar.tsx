"use client"
import { Mail, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from "../../../public/logo.png"


export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200">
      <div className="bg-gray-50 text-sm text-gray-600 flex justify-end items-center px-6 py-2 space-x-6">
        <a href="mailto: info@abstech.ae" className="flex items-center space-x-1 hover:text-orange-600">
          <Mail className="w-4 h-4 text-orange-600" />
          <span> info@abstech.ae</span>
        </a>
        <a href="tel:+971 800 227227" className="flex items-center space-x-1 hover:text-orange-600">
          <Phone className="w-4 h-4 text-orange-600" />
          <span>+971 800 227227</span>
        </a>
      </div>

      <nav className="bg-white flex justify-between items-center px-6">
        <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="logo" width={50} height={50}/>
        </Link>

        <ul className="hidden lg:flex space-x-8 text-sm font-semibold text-gray-800">
          <li>
            <Link href="/" className="relative group">
              HOME
              <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className='relative group'>
              ABOUT US
              <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
            </Link>

          </li>
          <li>
            <Link href="/contact" className='relative group'>
              CONTACT US
              <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
            </Link>
          </li>

        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800 focus:outline-none"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>


      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block font-medium relative group">
            HOME
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block font-medium">
            ABOUT US
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block font-medium">
            SERVICES
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block font-medium">
            CONTACT US
          </Link>
        </div>
      )}

    </header>
  );
}
