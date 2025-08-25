import bg from "../../../public/bg2.jpeg"
import React from 'react'


export default function WhoAreYou() {
    const features = [
        {
            title: "Market Leaders",
            description:
                "We began operations in Dubai in 2011, and we are fully certified and trusted by some of the biggest companies in the UAE.",

        },
        {
            title: "Guaranteed Services",
            description:
                "All our services are guaranteed providing our customers protection going forwards. Open 7 days a week and same day service available for both residential & commercial jobs.",

        },
        {
            title: "Customer Satisfaction",
            description:
                "To enhance maintenance experience by providing high-quality and reliable services to achieve customer satisfaction.",
        },
    ];
    return (
        <section className="relative bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white rounded-3xl shadow-xl p-10">
                    {features.map((item, i) => (
                        <div key={i} className="text-center px-6">
                            {/* أيقونة Placeholder */}
                            <div className="mb-4 flex justify-center">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                    ★
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
