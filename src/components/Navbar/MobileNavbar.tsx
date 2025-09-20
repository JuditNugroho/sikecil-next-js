"use client";

import Link from "next/link";
import {useState} from "react";
import {NavItems, NavItem} from "@/components/Navbar/navbarItems";
import BottomSheetNavbar from "@/components/Navbar/BottomSheetNavbar";

export default function MobileNavbar() {
    const [activeTab, setActiveTab] = useState(NavItems[0].href);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    // Handle tab click: set active tab and close bottom sheet
    const handleTabClick = (href: string) => {
        setActiveTab(href);
        setIsSheetOpen(false);
    };

    return (
        <>
            {/* Mobile Header */}
            <div
                className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-sm shadow-sm flex items-center px-4 py-3">
                <Link href="/" className="text-xl font-bold text-blue-500">SiKecil</Link>
            </div>

            {/* Bottom Sheet Navbar Menu */}
            <BottomSheetNavbar isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
                {/* Close Button */}
                <button
                    className="text-gray-500 float-right text-2xl"
                    onClick={() => setIsSheetOpen(false)}
                    aria-label="Close menu"
                >
                    ×
                </button>

                {/* Navigation Items */}
                <nav className="mt-6 flex flex-col gap-2">
                    {NavItems.map((item: NavItem) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 py-2"
                            onClick={() => handleTabClick(item.href)}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </BottomSheetNavbar>

            {/* Mobile Fixed Tab Bar */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-t flex justify-around border-t border-gray-200">
                {NavItems.map((item: NavItem) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col items-center justify-center py-2 w-full"
                        onClick={() => handleTabClick(item.href)}
                    >
                        <span className={`text-2xl ${activeTab === item.href ? "text-blue-500" : "text-gray-400"}`}>
                          {item.icon}
                        </span>
                        <span
                            className={`text-sm ${activeTab === item.href ? "text-blue-500 font-semibold" : "text-gray-400"}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
}
