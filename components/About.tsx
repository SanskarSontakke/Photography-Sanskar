
"use client";

import { motion } from "framer-motion";

/**
 * About Component
 *
 * Displays the "About Us" section of the portfolio.
 * Includes a brief description of the studio's philosophy and key statistics (Shoots, Awards, Years).
 *
 * Animations:
 * - Elements slide in from the sides (left for title, right for text) when scrolled into view.
 */
export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-24 bg-white text-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                {/* Left Side: Title */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-8 leading-tight">
                        Capturing <br />
                        <span className="text-gray-500">The Unseen</span>
                    </h2>
                </motion.div>

                {/* Right Side: Description & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2"
                >
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                        &quot;For us, photography is a way to manifest our memories and emotions.&quot;
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We don&apos;t just take pictures; we capture moments that tell a story.
                        Whether it&apos;s the grandeur of a wedding, the raw beauty of wildlife,
                        or the cinematic flair of a fashion shoot, our lens seeks the soul of the subject.
                    </p>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <span className="block text-3xl font-bold font-oswald">500+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Shoots</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold font-oswald">50+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Awards</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold font-oswald">8+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Years</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
