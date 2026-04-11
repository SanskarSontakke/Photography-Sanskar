
"use client";

import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";

/**
 * Team Data
 * Information about team members including name, role, and image path.
 */
const team = [
    { name: "Royy Nielsenn", role: "Creative Director", image: "/images/team-1.png" },
    { name: "Anastasia River", role: "Head Photographer", image: "/images/team-2.png" },
    { name: "Morgan Lee", role: "Photographer", image: "/images/team-3.png" },
    { name: "Ella Annes", role: "Editor", image: "/images/team-4.png" },
];

/**
 * TeamSection Component
 *
 * Displays the profiles of key team members.
 *
 * Features:
 * - Grid layout for team cards.
 * - Hover effect: Image goes from grayscale to color.
 * - Social icons overlay appears on hover.
 */
export default function TeamSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black">
            <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest">Our Team</h2>
                <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
                    <span className="cursor-pointer hover:text-black transition-colors">Prev</span>
                    <span className="text-black cursor-pointer hover:text-gray-500 transition-colors">Next</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative h-[400px] w-full mb-4 overflow-hidden bg-gray-100">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
            </div>
        </section>
    );
}
