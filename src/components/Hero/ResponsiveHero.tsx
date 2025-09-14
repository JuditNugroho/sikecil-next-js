"use client"

import {useState, useEffect} from "react"
import {isMobile} from "react-device-detect"
import MobileHero from "@/components/Hero/MobileHero"
import DesktopHero from "@/components/Hero/DesktopHero"

const ResponsiveHero = () => {
    const [useMobileLayout, setMobileLayout] = useState(false)

    useEffect(() => {
        if (typeof window === "undefined") return

        const checkLayoutSize = () => {
            setMobileLayout(window.innerWidth < 768)
        }

        checkLayoutSize()
        window.addEventListener("resize", checkLayoutSize)

        return () => window.removeEventListener("resize", checkLayoutSize)
    }, [])

    if (useMobileLayout || isMobile) {
        return <MobileHero/>
    }

    return <DesktopHero/>
}

export default ResponsiveHero
