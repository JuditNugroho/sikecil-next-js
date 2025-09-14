"use client"

import {useRef} from "react"
import {motion, useScroll, useTransform} from "framer-motion"

const MobileHeroSection = () => {
    const {scrollY} = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 50]) // Less parallax for mobile
    const ref = useRef<HTMLElement | null>(null)

    return (
        <section
            ref={ref}
            className="relative flex h-screen items-end justify-center overflow-hidden pb-12 sm:pb-16 lg:pb-24"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{y}}
                className="absolute inset-0 bg-[url('/images/hero_section.webp')] bg-cover bg-center"
            />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 md:px-8 text-center">
                <motion.h1
                    className="mb-3 sm:mb-4 font-black text-white drop-shadow-2xl"
                    style={{
                        fontSize: "clamp(2rem, 6vw, 3.5rem)", // 32px → responsive → max 56px
                    }}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                >
                    Si Kecil
                </motion.h1>

                <motion.p
                    className="mb-6 sm:mb-8 font-medium text-white/90 drop-shadow-lg"
                    style={{
                        fontSize: "clamp(1rem, 4vw, 1.5rem)", // 16px → responsive → max 24px
                        lineHeight: "1.6",
                    }}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.2}}
                >
                    Teman Setia Dalam Setiap Langkah Dan Perjalanan <br/> Tumbuh Si Kecil
                </motion.p>
            </div>
        </section>
    )
}

export default MobileHeroSection
