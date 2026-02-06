
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Hero Component
 *
 * The main introductory section of the website.
 * Features a parallax scrolling effect where the background image moves at a different speed than the foreground content.
 *
 * Animations:
 * - Parallax background: Driven by `useScroll` and `useTransform`.
 * - Text reveals: Staggered fade-in and slide-up animations for the title and subtitle.
 * - Scroll indicator: A pulsing line animation at the bottom.
 */
export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effect: moves the background image down as user scrolls
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // Opacity fade: fades out the background image as user scrolls
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y, opacity }}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full bg-[url('/images/gallery-1.png')] bg-cover bg-center brightness-50"
                />
            </div>

            <div className="z-10 text-center px-4 mix-blend-difference">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none font-oswald mb-4"
                >
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block"
                    >
                        Sanskar
                    </motion.span>
                    <br className="md:hidden" />
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="inline-block md:ml-6"
                    >
                        Sontakke
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-2xl tracking-[0.5em] uppercase text-gray-300 font-light"
                >
                    Photography
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
