
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
 */
export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
        >
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase font-oswald">
                Sanskar Sontakke
            </Link>

            <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                <Link href="#work" className="hover:text-gray-300 transition-colors">WORK</Link>
                <Link href="#about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
            </nav>

            <button className="md:hidden text-white uppercase text-sm tracking-widest">
                Menu
            </button>
        </motion.header>
    );
}
