import { Leaf, ShieldCheck } from 'lucide-react'
import React from 'react'

export default function EcoSafe() {
    return (
        <section className="flex justify-center items-center py-16 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
                        We use safe and <span className="text-orange-600">eco‑friendly</span> measures
                    </h2>
                    <p className="text-orange-600 leading-relaxed mb-6">
                        Our approach combines safety, innovation, and sustainability. We make sure our
                        methods protect both people and the environment for a better tomorrow.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-orange-700 font-medium">
                            <ShieldCheck className="w-5 h-5" /> Safe Methods
                        </div>
                        <div className="flex items-center gap-2 text-orange-700 font-medium">
                            <Leaf className="w-5 h-5" /> Eco‑Friendly
                        </div>
                    </div>
                </div>


                <div
                    className="flex justify-center"
                >
                    <div className="relative w-56 h-56 bg-orange-50 rounded-full flex items-center justify-center shadow-inner">
                        <Leaf className="w-24 h-24 text-orange-600" />
                    </div>
                </div>
            </div>
        </section>
    )
}
