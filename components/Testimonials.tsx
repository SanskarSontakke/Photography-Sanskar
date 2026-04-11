"use client";

import { Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "Happ Space Studio was great to work with. I don't love being in front of the camera (I'd rather art direct from behind!) but I was at ease with Happ Space Studio and the results show it! I now have a photo of myself that I love!",
        author: "Abigail Candra",
        role: "Professional Model"
    },
    {
        id: 2,
        text: "The attention to detail and creative direction was unparalleled. They managed to capture the exact mood we were looking for in our campaign. Truly professional team.",
        author: "Marcus Ray",
        role: "Creative Director"
    },
    {
        id: 3,
        text: "I was blown away by the final results. The team was punctual, professional, and had a great eye for capturing candid moments that felt authentic and raw.",
        author: "Sarah Jenkins",
        role: "Event Coordinator"
    }
];

/**
 * Testimonials Component
 *
 * Displays client testimonials to build trust and credibility.
 * Refactored into a draggable carousel.
 */
export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
        const swipe = Math.abs(offset.x) * velocity.x;

        if (swipe < -10000) {
            paginate(1);
        } else if (swipe > 10000) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            position: "absolute" as const
        })
    };

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black border-t border-gray-100 overflow-hidden">
       <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Testimonials</span>
          
          <div className="flex flex-col md:flex-row justify-between items-start mt-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase max-w-md leading-tight">
                  What Our Client Say About Us
              </h2>
              
              <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500 mt-8 md:mt-0">
                  <button onClick={() => paginate(-1)} className="hover:text-black transition-colors p-2">Prev</button>
                  <button onClick={() => paginate(1)} className="text-black hover:text-gray-500 transition-colors p-2">Next</button>
              </div>
          </div>
          
          <div className="relative min-h-[300px]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={handleDragEnd}
                      className="flex flex-col md:flex-row gap-8 items-start w-full cursor-grab active:cursor-grabbing"
                  >
                     <Quote className="w-12 h-12 text-black fill-current flex-shrink-0" />

                     <div className="max-w-3xl">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 mb-8 select-none">
                           &quot;{testimonials[currentIndex].text}&quot;
                        </p>

                        <div className="mt-8 select-none">
                            <p className="font-bold font-oswald uppercase text-lg">{testimonials[currentIndex].author}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                        </div>
                     </div>

                     <Quote className="w-12 h-12 text-black fill-current self-end rotate-180 flex-shrink-0" />
                  </motion.div>
              </AnimatePresence>
          </div>
       </div>
    </section>
  );
}
