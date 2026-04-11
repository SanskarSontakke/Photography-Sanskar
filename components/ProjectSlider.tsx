"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "./animations/MagneticButton";

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
 * An interactive slider that showcases different photography categories.
 *
 * Features:
 * - Next/Prev controls to cycle through projects.
 * - Drag to swipe using Framer Motion.
 */
export default function ProjectSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = projects.length - 1;
        if (newIndex >= projects.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = Math.abs(offset.x) * velocity.x;

        if (swipe < -10000) {
            paginate(1);
        } else if (swipe > 10000) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.8
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.8
            };
        }
    };

    return (
        <section className="py-24 bg-gray-100 text-black overflow-hidden relative">
            <div className="text-center mb-16 relative z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Photo</span>
                <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2">Most Popular</h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 h-[500px] flex items-center justify-center">
                {/* Image Container with AnimatePresence for exit animations */}
                <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.4 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={handleDragEnd}
                            className="absolute flex flex-col md:flex-row items-center gap-12 w-full justify-center z-20 cursor-grab active:cursor-grabbing"
                        >
                            {/* Large Image */}
                            <div className="relative w-full md:w-[400px] h-[500px] shadow-2xl group">
                                <Image
                                    src={projects[currentIndex].image}
                                    alt={projects[currentIndex].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                                />

                                {/* View All Button on Image */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                                    <MagneticButton className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors whitespace-nowrap">
                                        View All
                                    </MagneticButton>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Typography Decoration - Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 hidden md:block mix-blend-difference text-white w-full text-center">
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
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-12 md:bottom-auto md:top-1/2 md:w-full md:justify-between px-4 z-30 pointer-events-none">
                    <MagneticButton onClick={() => paginate(-1)} className="pointer-events-auto group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors p-4">
                        Prev <div className="h-px w-8 bg-black group-hover:bg-gray-600 transition-colors" />
                    </MagneticButton>
                    <MagneticButton onClick={() => paginate(1)} className="pointer-events-auto group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-600 transition-colors p-4">
                        <div className="h-px w-8 bg-black group-hover:bg-gray-600 transition-colors" /> Next
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
