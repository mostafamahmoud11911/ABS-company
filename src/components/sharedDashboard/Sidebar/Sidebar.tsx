"use client"
import { logout } from '@/action';
import { Dashboard } from '@/constant/constants';
import { BugOff, Contact, Home, IdCard, Layers, LogOut, Menu, SprayCan, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, href: Dashboard.DASHBOARD },
    { name: "Services", icon: <Layers size={20} />, href: Dashboard.SERVICES },
    { name: "Clients", icon: <IdCard size={20} />, href: Dashboard.CLIENT },
    { name: "Tools", icon: <SprayCan size={20} />, href: Dashboard.TOOLS },
    { name: "Pests", icon: <BugOff size={20} />, href: Dashboard.PESTS },
    { name: "Contacts", icon: <Contact size={20} />, href: Dashboard.CONTACTS },
  ];
  return (
    <>
      <button
        className="lg:hidden p-4 flex items-start gap-3"
      >
        <Menu onClick={() => setIsMobileOpen(true)} className='cursor-pointer' />
      </button>

      <div
        className={`hidden lg:flex flex-col bg-blue-900 text-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-56"
          }`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4"
        >
          <Menu />
        </button>
        <nav className="flex flex-col mt-4 space-y-1">
          {menuItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={`flex items-center gap-3 p-3 hover:bg-blue-800 transition-colors ${isCollapsed ? "justify-center" : ""}`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
          <p
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-blue-800 transition-colors ${isCollapsed ? "justify-center" : ""}`}
            onClick={async () => await logout()}
          >
            <LogOut />
            {!isCollapsed && <span>Logout</span>}
          </p>
        </nav>
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-56 bg-blue-900 text-white transform transition-transform duration-300 z-50 lg:hidden ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between p-4">
          <X />
        </button>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="flex items-center gap-3 p-3 hover:bg-blue-800 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  )
}
