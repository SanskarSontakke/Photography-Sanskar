"use client";

import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

/**
 * Team Data
 * Information about team members including name, role, and image path.
 */
const team = [
    { name: "Royy Nielsenn", role: "Creative Director", image: "/images/team-1.png" },
    { name: "Anastasia River", role: "Head Photographer", image: "/images/team-2.png" },
    { name: "Morgan Lee", role: "Photographer", image: "/images/team-3.png" },
    { name: "Ella Annes", role: "Editor", image: "/images/team-4.png" },
    { name: "David Chen", role: "Lighting Tech", image: "/images/team-1.png" },
];

/**
 * TeamSection Component
 *
 * Displays the profiles of key team members.
 * Refactored into a fully responsive draggable carousel.
 */
export default function TeamSection() {
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(4);
            }
        };

        // Initialize size
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ensure currentIndex does not exceed bounds when resizing
    const maxIndex = Math.max(0, team.length - itemsPerPage);
    const safeCurrentIndex = Math.min(currentIndex, maxIndex);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x < -threshold && safeCurrentIndex < maxIndex) {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        } else if (info.offset.x > threshold && safeCurrentIndex > 0) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black overflow-hidden">
            <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Our Team</span>
                    <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase">Meet the Experts</h2>
                </div>
                <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
                    <button
                        onClick={prevSlide}
                        disabled={safeCurrentIndex === 0}
                        className={`transition-colors p-2 ${safeCurrentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:text-black text-black'}`}
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={safeCurrentIndex === maxIndex}
                        className={`transition-colors p-2 ${safeCurrentIndex === maxIndex ? 'opacity-30 cursor-not-allowed' : 'text-black cursor-pointer hover:text-gray-500'}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative overflow-hidden">
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    animate={{ x: `-${safeCurrentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-1.125rem)] flex-shrink-0 select-none"
                        >
                            <div className="relative h-[400px] w-full mb-4 overflow-hidden bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                                />

                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                                    <Link href="#" className="p-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="p-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                            <h3 className="text-xl font-oswald font-bold uppercase">{member.name}</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
