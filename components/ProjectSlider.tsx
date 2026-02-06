
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Projects Data
 * Configuration for the slider items.
 */
const projects = [
    { id: 1, title: "Fashion", count: "200", image: "/images/gallery-1.png" },
    { id: 2, title: "Portrait", count: "350", image: "/images/gallery-5.png" },
    { id: 3, title: "Product", count: "150", image: "/images/gallery-3.png" },
    { id: 4, title: "Nature", count: "500", image: "/images/gallery-4.png" },
];

/**
 * ProjectSlider Component
 *
 * An interactive slider that showcases different photography categories (Fashion, Portrait, etc.).
 *
 * Features:
 * - Next/Prev controls to cycle through projects.
 * - Large background typography that changes with the slide (using `AnimatePresence`).
 * - Image fade/slide transition.
 * - Circular loop navigation (going prev from first slide goes to last, etc.).
 */
export default function ProjectSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <section className="py-24 bg-gray-100 text-black overflow-hidden relative">
            <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Photo</span>
                <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2">Most Popular</h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 h-[500px] flex items-center justify-center">
                {/* Image Container with AnimatePresence for exit animations */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="flex flex-col md:flex-row items-center gap-12 w-full justify-center z-20"
                    >
                        {/* Large Image */}
                        <div className="relative w-full md:w-[400px] h-[500px] shadow-2xl group cursor-none">
                            <Image
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* View All Button on Image */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                                <button className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                    View All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Typography Decoration - Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 hidden md:block mix-blend-difference text-white">
                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.5 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[10rem] font-oswald font-bold uppercase leading-none"
                        >
                            {projects[currentIndex].title}
                        </motion.h3>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-12 md:bottom-auto md:top-1/2 md:w-full md:justify-between px-4 z-30">
                    <button onClick={prevSlide} className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors">
                        Prev <div className="h-px w-8 bg-black group-hover:bg-gray-600 transition-colors" />
                    </button>
                    <button onClick={nextSlide} className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors">
                        <div className="h-px w-8 bg-black group-hover:bg-gray-600 transition-colors" /> Next
                    </button>
                </div>
            </div>
        </section>
    );
}
