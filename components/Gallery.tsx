
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Categories Data
 * Configuration for the gallery grid items, including span size for layout variety.
 */
const categories = [
    { name: "Wedding", image: "/images/gallery-2.png", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { name: "Cinematic", image: "/images/gallery-3.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { name: "Wildlife", image: "/images/gallery-4.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
    { name: "Portrait", image: "/images/gallery-5.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { name: "Fashion", image: "/images/gallery-1.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
];

/**
 * Gallery Component
 *
 * Displays a bento-grid style gallery of selected works.
 *
 * Features:
 * - Responsive grid layout using CSS Grid.
 * - Varied item sizes (some span 2 columns/rows) to create visual interest.
 * - Hover effects: Image scale and title reveal.
 * - Entrance animation: Staggered fade-in for each item.
 */
export default function Gallery() {
    return (
        <section id="work" className="py-24 px-4 md:px-12 bg-black text-white">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-4">Selected Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A curation of our best moments captured across various styles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative group overflow-hidden ${cat.colSpan} ${cat.rowSpan} bg-gray-900`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                        <div className="absolute bottom-6 left-6 z-10">
                            <h3 className="text-2xl font-bold font-oswald uppercase tracking-wider translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {cat.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
