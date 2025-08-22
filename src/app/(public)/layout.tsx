import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
