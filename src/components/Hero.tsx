"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const HeroSection = () => {
    const ref = useRef(null)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 100])

    return (
        <section
            ref={ref}
            className="relative h-screen flex items-end justify-center overflow-hidden md:items-center"
        >
            {/* Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-[url('/images/hero_section.png')] bg-cover bg-center"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-white/50 to-purple-100/60" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-6 text-center mb-20 md:mb-0">

                {/* Main Heading */}
                <motion.h1
                    className="font-bold text-4xl md:text-6xl lg:text-7xl text-[#321c5a] mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Teman Setia Dalam Setiap<br className="hidden md:inline" />
                    Langkah Tumbuh Si Kecil
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <span className="font-semibold text-[#321c5a]">SiKecil</span> menghadirkan artikel parenting lokal
                    dan alat bantu praktis untuk setiap momen tumbuh kembang yang menyenangkan.
                </motion.p>
            </div>
        </section>
    )
}

export default HeroSection