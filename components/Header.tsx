"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Logo from "@/components/Logo";

/**
 * Header Component
 *
 * Displays the main navigation bar at the top of the page.
 * Uses Framer Motion for an entrance animation (fades in and slides down).
 *
 * Features:
 * - Logo/Brand name linking to home with custom brand mark SVG
 * - Desktop navigation links (WORK, ABOUT, CONTACT)
 * - Interactive slide-in mobile navigation menu
 * - Sticky blurred header on scroll
 */
export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.7)"]
    );

    const headerBorder = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
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
                className={`fixed top-0 left-0 w-full z-45 flex items-center justify-between px-6 py-4 md:px-12 text-white transition-all duration-300 ${isScrolled ? 'backdrop-blur-md' : ''}`}
            >
                <Link href="/" className="relative z-10 transition-transform duration-300 hover:scale-[1.02]">
                    <Logo variant="horizontal" theme="dark" iconSize={36} />
                </Link>

                <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-widest relative z-10">
                    <Link href="#work" className="hover:text-zinc-400 transition-colors uppercase">WORK</Link>
                    <Link href="#about" className="hover:text-zinc-400 transition-colors uppercase">ABOUT</Link>
                    <Link href="#contact" className="hover:text-zinc-400 transition-colors uppercase">CONTACT</Link>
                </nav>

                <button 
                    onClick={toggleMenu}
                    className="md:hidden flex items-center gap-2 text-white uppercase text-xs tracking-widest relative z-10 cursor-pointer p-2 hover:opacity-80 transition-opacity"
                    aria-label="Toggle Menu"
                >
                    <Menu className="w-5 h-5" />
                    <span>Menu</span>
                </button>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-8 md:hidden backdrop-blur-lg"
                    >
                        {/* Drawer Header */}
                        <div className="flex justify-between items-center w-full">
                            <Logo variant="horizontal" theme="dark" iconSize={36} />
                            <button 
                                onClick={closeMenu}
                                className="text-white p-2 cursor-pointer hover:opacity-85"
                                aria-label="Close Menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Drawer Links */}
                        <nav className="flex flex-col gap-8 text-4xl font-bold font-oswald uppercase tracking-widest my-auto">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Link 
                                    href="#work" 
                                    onClick={closeMenu}
                                    className="hover:text-zinc-400 transition-colors block py-2 border-b border-white/10"
                                >
                                    Work
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link 
                                    href="#about" 
                                    onClick={closeMenu}
                                    className="hover:text-zinc-400 transition-colors block py-2 border-b border-white/10"
                                >
                                    About
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link 
                                    href="#contact" 
                                    onClick={closeMenu}
                                    className="hover:text-zinc-400 transition-colors block py-2 border-b border-white/10"
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Drawer Footer */}
                        <div className="flex flex-col items-center justify-center gap-4 w-full border-t border-white/10 pt-8">
                            <Logo variant="stacked" theme="dark" iconSize={60} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
