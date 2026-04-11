"use client";

import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
 * Now refactored into a draggable carousel.
 */
export default function TeamSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4; // Assuming md screens mostly

    const maxIndex = Math.max(0, team.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black overflow-hidden">
            <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest">Our Team</h2>
                <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`transition-colors p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:text-black'}`}
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className={`transition-colors p-2 ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed text-gray-500' : 'text-black cursor-pointer hover:text-gray-500'}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-6"
                    drag="x"
                    dragConstraints={{ right: 0, left: -2000 }}
                    animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group min-w-full md:min-w-[calc(25%-1.125rem)] flex-shrink-0"
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
