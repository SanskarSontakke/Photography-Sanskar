"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor Component
 *
 * Replaces the default system cursor with a custom styled element that follows the mouse.
 * It changes state (size and color) when hovering over interactive elements (links, buttons).
 *
 * Features:
 * - Follows mouse position using `mousemove` event listener.
 * - Detects hover over interactive elements using `mouseover` event delegation.
 * - Scales up and changes color on hover.
 * - Hidden on touch devices (via CSS `hidden md:block`).
 */
export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const mouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the target or its parent is a link or button
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                backgroundColor: isHovering ? "white" : "transparent",
                border: isHovering ? "1px solid white" : "1px solid rgba(255, 255, 255, 0.5)",
            }}
            animate={{
                scale: isHovering ? 2 : 1,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        />
    );
}
