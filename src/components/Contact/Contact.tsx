import { Mail, Phone } from 'lucide-react'
import React from 'react'

export default function Contact() {
    return (
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <p className="mt-2 text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                    Find us easily on the map — we’re always ready to welcome you at our location.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-orange-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2615191882173!2d55.30150132555601!3d25.26178662908333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43393c5d6147%3A0x43604e757400fe2f!2sABS%20Technical%20Services!5e0!3m2!1sar!2sae!4v1756138265272!5m2!1sar!2sae"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                    <div className="flex flex-col space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Get in Touch
                        </h3>
                        <p className="text-gray-600">
                            Feel free to reach out to us for any inquiries or support.
                        </p>
                        <div className="space-y-4">
                            <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
                                <span className="text-orange-500"><Mail /></span>
                                Email:{" "}
                                <a
                                    href="mailto:info@abstech.ae"
                                    className="text-orange-600 font-semibold hover:underline"
                                >
                                    info@abstech.ae
                                </a>
                            </p>
                            <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
                                <span className="text-orange-500"><Phone /></span>
                                Phone:{" "}
                                <a
                                    href="tel:+971800227227"
                                    className="text-orange-600 font-semibold hover:underline"
                                >
                                    +971 800 227227
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
