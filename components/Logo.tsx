import React from "react";

interface LogoProps {
    variant?: "icon" | "full" | "stacked" | "horizontal";
    theme?: "brand" | "light" | "dark";
    className?: string;
    iconSize?: number;
}

/**
 * Logo Component
 * 
 * Renders the custom photography logo in various orientations (icon, horizontal, stacked)
 * and color themes (brand, light, dark).
 */
export default function Logo({
    variant = "horizontal",
    theme = "brand",
    className = "",
    iconSize = 48
}: LogoProps) {
    // Define color classes based on the theme
    const isDark = theme === "dark";
    const isLight = theme === "light";
    
    // Circle outline color
    const circleColor = isDark 
        ? "stroke-white" 
        : isLight 
            ? "stroke-black" 
            : "stroke-[#0B2545]";
            
    // Gold elements (Camera and Lotus)
    const goldColor = isDark 
        ? "stroke-zinc-300" 
        : isLight 
            ? "stroke-zinc-800" 
            : "stroke-[#C5A059]";

    const goldFillColor = isDark 
        ? "fill-zinc-300" 
        : isLight 
            ? "fill-zinc-800" 
            : "fill-[#C5A059]";

    // Lens inner circle fill
    const lensBgColor = isDark 
        ? "fill-[#121212]" 
        : "fill-white";

    // Text brand colors
    const navyTextColor = isDark 
        ? "text-white" 
        : isLight 
            ? "text-black" 
            : "text-[#0B2545]";

    const goldTextColor = isDark 
        ? "text-zinc-400" 
        : isLight 
            ? "text-zinc-700" 
            : "text-[#C5A059]";

    // SVG icon element
    const iconSVG = (
        <svg 
            viewBox="0 0 200 200" 
            width={iconSize} 
            height={iconSize} 
            className="flex-shrink-0 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Circle */}
            <circle cx="100" cy="100" r="88" fill="none" className={`${circleColor} transition-all duration-300`} strokeWidth="7" />
            
            {/* Camera body outline */}
            <path 
                d="M 62 76 
                   C 62 71, 66 67, 71 67 
                   H 85 
                   L 91 58 
                   H 109 
                   L 115 67 
                   H 129 
                   C 134 67, 138 71, 138 76 
                   V 124 
                   C 138 129, 134 133, 129 133 
                   H 71 
                   C 66 133, 62 129, 62 124 
                   Z" 
                fill="none" 
                className={`${goldColor} transition-all duration-300`} 
                strokeWidth="4.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
            
            {/* Camera flash/dot */}
            <circle cx="125" cy="77" r="3" className={`${goldFillColor} transition-all duration-300`} />
            
            {/* Lotus flower */}
            {/* Bottom center petal */}
            <path d="M 100 110 C 96 122, 93 129, 100 137 C 107 129, 104 122, 100 110 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Bottom left petal */}
            <path d="M 94 110 C 86 117, 78 123, 85 130 C 93 126, 94 118, 94 110 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Bottom right petal */}
            <path d="M 106 110 C 114 117, 122 123, 115 130 C 107 126, 106 118, 106 110 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Left outer petal */}
            <path d="M 84 100 C 65 101, 58 89, 72 82 C 78 89, 82 95, 84 100 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Right outer petal */}
            <path d="M 116 100 C 135 101, 142 89, 128 82 C 122 89, 118 95, 116 100 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Left inner petal */}
            <path d="M 91 104 C 78 95, 76 80, 87 73 C 89 82, 91 94, 91 104 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Right inner petal */}
            <path d="M 109 104 C 122 95, 124 80, 113 73 C 111 82, 109 94, 109 104 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Center top petal */}
            <path d="M 100 105 C 92 92, 90 77, 100 61 C 110 77, 108 92, 100 105 Z" fill="none" className={`${goldColor} transition-all duration-300`} strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Lens outer circle */}
            <circle cx="100" cy="98" r="20" className={`${lensBgColor} ${goldColor} transition-all duration-300`} strokeWidth="4.5" />
            {/* Lens inner circle */}
            <circle cx="100" cy="98" r="13" className={`${goldFillColor} transition-all duration-300`} />
            {/* Lens highlight reflection */}
            <path d="M 99 90.5 A 7.5 7.5 0 0 1 106.5 98 A 5.5 5.5 0 0 0 99 90.5 Z" fill={isDark ? "#121212" : "#ffffff"} />
        </svg>
    );

    if (variant === "icon") {
        return (
            <div className={`inline-flex items-center justify-center ${className}`}>
                {iconSVG}
            </div>
        );
    }

    if (variant === "stacked") {
        return (
            <div className={`flex flex-col items-center text-center ${className}`}>
                {iconSVG}
                <span className={`mt-4 text-xs font-semibold tracking-[0.4em] uppercase font-oswald ${navyTextColor}`}>
                    Photography
                </span>
                <span className={`text-xl font-bold tracking-[0.25em] uppercase font-oswald leading-tight mt-1 ${goldTextColor}`}>
                    Sanskar
                </span>
                <span className={`text-[9px] font-medium tracking-[0.2em] uppercase font-open-sans mt-2 opacity-80 ${navyTextColor}`}>
                    Capturing Life&apos;s Heritage
                </span>
            </div>
        );
    }

    if (variant === "horizontal") {
        return (
            <div className={`flex items-center gap-4 text-left ${className}`}>
                {iconSVG}
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5 leading-none">
                        <span className={`text-base font-bold tracking-[0.15em] uppercase font-oswald ${goldTextColor}`}>
                            Sanskar
                        </span>
                        <span className={`text-xs font-semibold tracking-[0.3em] uppercase font-oswald ${navyTextColor}`}>
                            Photography
                        </span>
                    </div>
                    <span className={`text-[8px] font-medium tracking-[0.15em] uppercase font-open-sans mt-1 opacity-70 ${navyTextColor}`}>
                        Capturing Life&apos;s Heritage
                    </span>
                </div>
            </div>
        );
    }

    // Default variant is horizontal/full combo
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {iconSVG}
            <div className="flex flex-col">
                <span className={`text-sm font-bold tracking-widest uppercase font-oswald ${navyTextColor}`}>
                    Sanskar Sontakke
                </span>
                <span className={`text-[9px] font-light tracking-[0.3em] uppercase text-gray-400 font-open-sans mt-0.5`}>
                    Photography
                </span>
            </div>
        </div>
    );
}
