"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

const DesktopHero = () => {
    const {scrollY} = useScroll();

    // Parallax background
    const yBackground = useTransform(scrollY, [0, 300], [0, 100]);

    // Typewriter effect
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Teman Setia Dalam Setiap Langkah Dan Perjalanan Tumbuh Si Kecil";

    // Blur overlay
    const [showBlur, setShowBlur] = useState(false);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);
            }, 50);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    useEffect(() => {
        const timer = setTimeout(() => setShowBlur(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative flex h-screen items-end justify-center overflow-hidden md:items-center">
            {/* Background with parallax */}
            <motion.div style={{y: yBackground}} className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero_section.webp"
                    alt="Hero background"
                    fill
                    priority
                    quality={80}
                    placeholder="blur"
                    blurDataURL="/images/hero_section_blur.png"
                    className="object-cover"
                />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 via-purple-300/20 to-pink-300/30"/>

            {/* Floating shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 h-20 w-20 rounded-full bg-white/20"
                animate={{y: [0, -20, 0]}}
                transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 h-16 w-16 rounded-full bg-purple-300/30"
                animate={{y: [0, -15, 0]}}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-6 mb-20 w-full max-w-6xl text-center md:mb-0">
                <motion.div
                    className="absolute inset-0 -z-10 rounded-3xl bg-white/10 backdrop-blur-md"
                    initial={{opacity: 0}}
                    animate={{opacity: showBlur ? 1 : 0}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                />

                <div className="p-8">
                    {/* Title */}
                    <motion.h1
                        className="mb-6 font-bold leading-tight text-[#321c5a]"
                        style={{fontSize: "clamp(1.5rem, 5vw, 3rem)"}}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        {displayText}
                        {currentIndex < fullText.length && (
                            <motion.span
                                animate={{opacity: [0, 1, 0]}}
                                transition={{duration: 0.8, repeat: Infinity}}
                                className="ml-1"
                            >
                                |
                            </motion.span>
                        )}
                        <br className="hidden md:inline"/>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-700"
                        style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                            lineHeight: "1.75",
                        }}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        <span className="font-semibold text-[#321c5a]">SiKecil</span>{" "}
                        menghadirkan artikel parenting lokal dan alat bantu praktis untuk
                        setiap momen tumbuh kembang yang menyenangkan.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, delay: 0.6}}
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
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5}}
            >
                <div className="flex h-12 w-8 justify-center rounded-full border-2 border-indigo-400">
                    <motion.div
                        animate={{y: [0, 12, 0]}}
                        transition={{duration: 1.5, repeat: Infinity}}
                        className="mt-2 h-3 w-1 rounded-full bg-indigo-500"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default DesktopHero;
