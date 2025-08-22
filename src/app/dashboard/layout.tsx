import Navbar from '@/components/sharedDashboard/Navbar/Navbar'
import Sidebar from '@/components/sharedDashboard/Sidebar/Sidebar'
import React from 'react'

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex">
            <Sidebar />
            <div className='w-full flex-1 bg-gray-100'>
                <div className="p-1">
                    <Navbar />
                    {children}
                </div>
            </div>
        </main>
    )
}
