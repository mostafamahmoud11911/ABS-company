import React from 'react'

export default function About() {
    return (
        <div className="bg-white text-gray-800">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">About ABS Technical Services</h1>
                <p className="max-w-2xl mx-auto text-lg">
                    Excellence in Maintenance & Technical Solutions since 2011
                </p>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction</h2>
                <p className="mb-4 leading-relaxed">
                    Founded in 2011 in Dubai, ABS Technical Services was established by{" "}
                    <span className="font-semibold">Saif Ahmad Al Shehhi</span> with a
                    clear vision to deliver comprehensive maintenance and technical
                    solutions with an unwavering commitment to quality and safety.
                </p>
                <p className="leading-relaxed">
                    As a trusted maintenance and technical service provider, we cater to
                    diverse sectors, offering cost-effective solutions backed by extensive
                    industry expertise. Our services include{" "}
                    <span className="font-semibold">
                        General Maintenance, Air Conditioning, Painting Contracting, Pest
                        Control, Anti-Termite, Insulation, Waterproofing, Deep Cleaning, and
                        Disinfection
                    </span>
                    .
                </p>
            </section>

            {/* Vision & Mission */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed">
                            To be a leader in providing pioneering services in facilities
                            management.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            To enhance the maintenance experience by providing high-quality
                            and reliable services to achieve customer satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Customer-Centric Approach", desc: "Prioritizing client needs and satisfaction." },
                        { title: "Governance", desc: "Guided by ethics, quality, safety, and trust." },
                        { title: "Unmatched Professionalism", desc: "Delivering expert and reliable services." },
                        { title: "Continuous Innovation", desc: "Implementing advanced technologies and solutions." },
                        { title: "Pioneering Partnerships", desc: "Building alliances for sustainable growth." },
                        { title: "Competitive Excellence", desc: "Striving for superior quality and efficiency." },
                    ].map((value, i) => (
                        <div
                            key={i}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-orange-600 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-700">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Raising the Bar in Maintenance & Technical Solutions
                </h2>
                <p className="max-w-2xl mx-auto text-lg">
                    With steadfast dedication to operational excellence, ABS Technical
                    Services continues to innovate and lead in the maintenance and
                    technical solutions industry.
                </p>
            </section>
        </div>
    )
}
