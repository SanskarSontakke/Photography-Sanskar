
"use client";

import { Quote } from "lucide-react";

/**
 * Testimonials Component
 *
 * Displays client testimonials to build trust and credibility.
 * Currently displays a static testimonial but designed to be extendable to a slider.
 */
export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black border-t border-gray-100">
       <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Testimonials</span>
          
          <div className="flex flex-col md:flex-row justify-between items-start mt-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase max-w-md leading-tight">
                  What Our Client Say About Us
              </h2>
              
              <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500 mt-8 md:mt-0">
                  <span>Prev</span>
                  <span className="text-black cursor-pointer">Next</span>
              </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <Quote className="w-12 h-12 text-black fill-current" />
             
             <div className="max-w-3xl">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 mb-8">
                   &quot;Happ Space Studio was great to work with. I don&apos;t love being in front of the camera
                   (I&apos;d rather art direct from behind!) but I was at ease with Happ Space Studio and the
                   results show it! I now have a photo of myself that I love!&quot;
                </p>
                
                {/* Decorative / Placeholder for person image if needed later */}
                <div className="mt-8">
                    <p className="font-bold font-oswald uppercase text-lg">Abigail Candra</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Professional Model</p>
                </div>
             </div>
             
             <Quote className="w-12 h-12 text-black fill-current self-end rotate-180" />
          </div>
       </div>
    </section>
  );
}
