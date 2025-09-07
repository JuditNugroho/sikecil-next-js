"use client"

import HeroSection from "@/components/Hero"
import MobileHeroSection from "@/components/MobileHeroSection"
import {useState, useEffect} from 'react'

const ResponsiveHero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIsMobile()

        // Add event listener
        window.addEventListener('resize', checkIsMobile)

        // Clean up
        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    return isMobile ? <MobileHeroSection/> : <HeroSection/>
}

export default ResponsiveHero