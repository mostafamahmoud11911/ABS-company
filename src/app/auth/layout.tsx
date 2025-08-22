import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='bg-gray-200 h-screen flex justify-center items-center p-2'>
            <div className='max-w-lg w-full mx-auto p-6 bg-white shadow-md border-2 rounded-sm'>
                <div className='relative h-[100px] w-[150px] mx-auto'>
                    <Image src="/logo.png" alt="logo" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill priority className="mx-auto object-cover" />
                </div>
                {children}
            </div>
        </main>
    )
}
