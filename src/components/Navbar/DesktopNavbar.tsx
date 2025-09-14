"use client";

import Link from "next/link";
import {useState} from "react";
import {NavItems, NavItem} from "@/components/Navbar/navbarItems";

export default function DesktopNavbar() {
    // State to keep track of the currently active tab
    const [activeTab, setActiveTab] = useState(NavItems[0].href);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 hidden md:block bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Brand */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    SiKecil
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    {NavItems.map((item: NavItem) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                relative
                text-gray-700
                hover:text-blue-600
                transition-colors
                font-medium
                group
                ${activeTab === item.href ? "text-blue-600 font-semibold" : ""}
              `}
                            onClick={() => setActiveTab(item.href)}
                        >
                            {item.label}

                            {/* Active underline indicator */}
                            {activeTab === item.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"/>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
