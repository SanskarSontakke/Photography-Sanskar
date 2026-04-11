"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface NumberCounterProps {
    value: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

export function NumberCounter({ value, duration = 2, className = "", suffix = "" }: NumberCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (isInView) {
            const start = 0;
            const end = value;
            if (start === end) return;

            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

                // easeOutQuad
                const easeOut = progress * (2 - progress);

                setCount(Math.floor(easeOut * (end - start) + start));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
}
