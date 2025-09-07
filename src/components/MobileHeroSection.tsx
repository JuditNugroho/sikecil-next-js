"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const MobileHeroSection = () => {
    const ref = useRef(null)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 50]) // Less parallax for mobile

    return (
        <section
            ref={ref}
            className="relative h-screen flex items-end justify-center overflow-hidden pb-16"
        >
            {/* Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-[url('/images/hero_section.png')] bg-cover bg-center"
            />

            {/* Darker Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Content Container at Bottom */}
            <div className="relative z-10 w-full max-w-4xl mx-6 text-center">

                {/* Main Heading - Larger and Bolder */}
                <motion.h1
                    className="font-black text-5xl text-white mb-4 drop-shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    TEMAN SETIA
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xl text-white/90 mb-8 font-medium drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Dalam Setiap Langkah Dan Perjalanan<br />Tumbuh Si Kecil
                </motion.p>
            </div>
        </section>
    )
}

export default MobileHeroSection