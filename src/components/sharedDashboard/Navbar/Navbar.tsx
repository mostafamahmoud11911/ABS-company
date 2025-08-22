"use client"
import { useQuery } from '@tanstack/react-query';
import { fetchSession } from '@/action';
import { ShieldUser } from 'lucide-react';
import Image from 'next/image'

export default function Navbar() {

    const { data: session } = useQuery({
        queryKey: ["session"],
        queryFn: fetchSession,
    });


    return (
        <nav className='shadow-md p-1 flex justify-between items-center mb-2'>
            <div>
                <Image src={"/logo.png"} priority alt="logo" width={60} height={60} />
            </div>
            <div className='flex items-center gap-2 mr-4'>
                <p>{session?.role === "admin" ? <ShieldUser /> : ""}</p>
                <p>{session?.name}</p>
            </div>
        </nav>
    )
}