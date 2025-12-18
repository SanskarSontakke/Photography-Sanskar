
"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#1a1a1a] text-white pt-24 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <div className="mb-12 md:mb-0">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Contact Us</span>
                        <h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase leading-none">
                            Get In <br /> Touch
                        </h2>
                    </div>

                    <div className="w-full md:w-1/2">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Drop Us A Line</span>

                        <div className="group flex items-center justify-between border-b border-gray-700 py-6 hover:border-white transition-colors cursor-pointer">
                            <a href="mailto:sanskarsontakke@gmail.com" className="text-xl md:text-2xl font-light">sanskarsontakke@gmail.com</a>
                            <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                        </div>



                        <p className="text-xs text-gray-500 mt-8 max-w-xs">
                            If you want to work with us, book now, or just say hello, so let's chat!
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 md:mb-0">
                        © {new Date().getFullYear()} Sanskar Sontakke Gallery
                    </p>

                    {/* Scroll Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-4 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-4 md:mb-0 md:-translate-y-12"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </button>

                    <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-white transition-colors">Newsletter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
