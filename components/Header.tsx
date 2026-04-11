"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

/**
 * Header Component
 *
 * Displays the main navigation bar at the top of the page.
 * Uses Framer Motion for an entrance animation (fades in and slides down).
 *
 * Features:
 * - Logo/Brand name linking to home
 * - Desktop navigation links (WORK, ABOUT, CONTACT)
 * - Mobile menu button (visual only in this iteration)
 * - Responsive design
 * - Sticky blurred header on scroll
 */
export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const headerBg = useTransform(
        scrollY,
        [0, 50],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]
    );

    const headerBorder = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
    );

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                backgroundColor: headerBg,
                borderBottomColor: headerBorder,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid"
            }}
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 text-white transition-all duration-300 ${isScrolled ? 'backdrop-blur-md' : 'mix-blend-difference'}`}
        >
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase font-oswald relative z-10">
                Sanskar Sontakke
            </Link>

            <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide relative z-10">
                <Link href="#work" className="hover:text-gray-300 transition-colors">WORK</Link>
                <Link href="#about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
            </nav>

            <button className="md:hidden text-white uppercase text-sm tracking-widest relative z-10">
                Menu
            </button>
        </motion.header>
    );
}
