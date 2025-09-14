"use client"

import {useState, useEffect} from 'react'
import {isMobile} from 'react-device-detect'
import MobileNavbar from "@/components/Navbar/MobileNavbar"
import DesktopNavbar from "@/components/Navbar/DesktopNavbar"

const ResponsiveNavbar = () => {
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
        return <MobileNavbar/>
    }

    return <DesktopNavbar/>
}

export default ResponsiveNavbar