import React from 'react'

export default function Loading() {
    return (
        <main className="animate-pulse space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex p-6 shadow-sm justify-between bg-gray-200 text-gray-500 rounded-md">
                        <div className="space-y-3">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                            <div className="h-3 w-32 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                {[1, 2].map((i) => (
                    <div key={i} className="flex p-6 shadow-sm justify-between rounded bg-gray-200 text-gray-500">
                        <div className="space-y-3">
                            <div className="h-4 w-24 bg-gray-300 rounded"></div>
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
                {[1, 2].map((i) => (
                    <div key={i} className="shadow-sm rounded p-3 space-y-3 bg-gray-200">
                        <div className="h-4 w-32 bg-gray-300 rounded"></div>
                        <div className="flex gap-3">
                            {[1, 2, 3, 4, 5].map((j) => (
                                <div key={j} className="w-12 h-12 bg-gray-300 rounded"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
