"use client"

import {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect'
import MobileHeroSection from "@/components/Hero/MobileHeroSection"
import DesktopHeroSection from "@/components/Hero/DesktopHeroSection"

const ResponsiveHero = () => {
    const [useMobileLayout, setMobileLayout] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const checkLayoutSize = () => {
            setMobileLayout(window.innerWidth < 768)
        }

        checkLayoutSize()
        window.addEventListener('resize', checkLayoutSize)

        return () => window.removeEventListener('resize', checkLayoutSize)
    }, [])

    // Render based on both conditions
    if (useMobileLayout || isMobile) {
        return <MobileHeroSection/>
    }

    return <DesktopHeroSection/>
}

export default ResponsiveHero