"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    return (
        <span className={`inline-block overflow-hidden align-bottom ${className}`}>
            <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="inline-block origin-bottom"
            >
                {children}
            </motion.span>
        </span>
    );
}
