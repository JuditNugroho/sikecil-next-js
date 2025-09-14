"use client"

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("/")

    const tabItems = [
        { href: "/", label: "Beranda" },
        { href: "/artikel", label: "Artikel" },
        { href: "/alat-bantu", label: "Alat Bantu" },
        { href: "/tentang", label: "Tentang" },
    ]

    return (
        <nav className="fixed top-0 left-0 z-50 hidden w-full bg-white/90 shadow-sm backdrop-blur-md md:block">
            <div className="container mx-auto flex items-center justify-between px-6 py-3 lg:px-10">
                {/* Brand */}
                <Link
                    href="/"
                    className="font-bold text-blue-600 transition hover:text-blue-700"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }} // 20px → responsif → max 28px
                >
                    SiKecil
                </Link>

                {/* Navigation Links */}
                <div className="flex gap-6 lg:gap-8">
                    {tabItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveTab(item.href)}
                            className={`transition-colors ${
                                activeTab === item.href
                                    ? "font-semibold text-blue-600"
                                    : "text-gray-700 hover:text-blue-500"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
