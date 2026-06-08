"use client";


import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

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
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-4">Selected Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A curation of our best moments captured across various styles.</p>
                </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {categories.map((cat, index) => (
                    <StaggerItem
                        key={index}
                        className={`relative group overflow-hidden ${cat.colSpan} ${cat.rowSpan} bg-gray-900 cursor-pointer`}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-end md:items-center justify-start md:justify-center p-6 md:p-0">
                             <h3 className="text-xl md:text-3xl font-bold font-oswald uppercase tracking-wider text-white translate-y-0 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                                {cat.name}
                            </h3>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
