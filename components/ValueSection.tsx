
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ValueSection() {
    return (
        <section className="bg-zinc-900 text-white relative py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: Images & Big Text */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="relative h-[300px] w-full md:h-[400px] overflow-hidden">
                            <Image
                                src="/images/gallery-2.png"
                                alt="Creative Photography"
                                fill
                                className="object-cover opacity-60"
                            />
                        </div>

                        <h2 className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 text-4xl md:text-6xl font-bold uppercase font-oswald leading-tight z-20 mix-blend-overlay">
                            High-End & <br /> Creative <br /> Photography
                        </h2>
                    </motion.div>
                </div>

                {/* Right Side: White Card */}
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white text-black p-8 md:p-12 shadow-2xl relative"
                    >
                        <h3 className="text-2xl font-bold font-oswald mb-6">Our Value</h3>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We prioritize values such as professionalism, creativity, and customer satisfaction in every service we offer.
                            Our team of professional photographers has the expertise and experience to ensure that every image produced meets the highest quality standards.
                        </p>

                        <div className="w-full h-px bg-gray-200 my-6" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                            Est. 2015
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
