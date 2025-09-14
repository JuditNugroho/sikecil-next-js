"use client";

import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const MobileHero = () => {
    const {scrollY} = useScroll();
    // Apply small parallax effect for background image
    const y = useTransform(scrollY, [0, 300], [0, 50]);
    const ref = useRef<HTMLElement | null>(null);

    return (
        <section
            ref={ref}
            className="relative flex h-screen items-end justify-center overflow-hidden pb-12 sm:pb-16 lg:pb-24"
        >
            {/* Background Image with parallax */}
            <motion.div
                style={{y}}
                className="absolute inset-0 bg-[url('/images/hero_section.webp')] bg-cover bg-center"
            />

            {/* Dark overlay to improve text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8 text-center">
                {/* Hero Title */}
                <motion.h1
                    className="mb-3 sm:mb-4 font-black text-white drop-shadow-2xl"
                    style={{fontSize: "clamp(2rem, 6vw, 3.5rem)"}}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                >
                    Si Kecil
                </motion.h1>

                {/* Hero Subtitle */}
                <motion.p
                    className="mb-6 sm:mb-8 font-medium text-white/90 drop-shadow-lg"
                    style={{
                        fontSize: "clamp(1rem, 4vw, 1.5rem)",
                        lineHeight: "1.6",
                    }}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.2}}
                >
                    Teman Setia Dalam Setiap Langkah dan Perjalanan <br/>
                    Tumbuh Si Kecil
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, delay: 0.4}}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className="inline-block"
                >
                    <button
                        className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600
                       px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3
                       text-base sm:text-lg font-semibold text-white
                       shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                        Jelajahi Sekarang
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileHero;
