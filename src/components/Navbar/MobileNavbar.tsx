"use client";

import Link from "next/link";
import {useState, useEffect, useRef} from "react";
import {NavItems, NavItem} from "./navbarItems";

export default function MobileNavbar() {
    const [activeTab, setActiveTab] = useState(NavItems[0].href);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const sheetRef = useRef<HTMLDivElement>(null);

    // Lock scroll saat bottom sheet mobile terbuka
    useEffect(() => {
        document.body.style.overflow = isSheetOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSheetOpen]);

    // Swipe down untuk close
    useEffect(() => {
        if (!sheetRef.current) return;
        let startY = 0;
        let currentY = 0;

        const touchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY;
        };
        const touchMove = (e: TouchEvent) => {
            currentY = e.touches[0].clientY;
            const delta = currentY - startY;
            if (delta > 50) setIsSheetOpen(false);
        };

        const el = sheetRef.current;
        el.addEventListener("touchstart", touchStart);
        el.addEventListener("touchmove", touchMove);

        return () => {
            el.removeEventListener("touchstart", touchStart);
            el.removeEventListener("touchmove", touchMove);
        };
    }, [isSheetOpen]);

    return (
        <>
            {/* Mobile Header */}
            <div
                className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-sm shadow-sm flex items-center px-4 py-3">
                <Link href="/" className="text-xl font-bold text-blue-500">
                    SiKecil
                </Link>
            </div>

            {/* Mobile Bottom Sheet */}
            {isSheetOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsSheetOpen(false)}
                    />

                    {/* Sheet */}
                    <div
                        ref={sheetRef}
                        className="fixed bottom-0 w-full z-50 bg-white rounded-t-xl p-4 max-h-[70%] overflow-y-auto animate-slide-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="text-gray-500 float-right text-2xl"
                            onClick={() => setIsSheetOpen(false)}
                        >
                            ×
                        </button>

                        {/* Menu Items */}
                        {NavItems.map((item: NavItem) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 py-2"
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* Mobile Fixed Tab Bar */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-t flex justify-around border-t border-gray-200">
                {NavItems.map((item: NavItem) => (
                    <button
                        key={item.href}
                        className="flex flex-col items-center justify-center py-2 w-full"
                        onClick={() => {
                            setActiveTab(item.href);
                            setIsSheetOpen(false);
                        }}
                    >
            <span
                className={`text-2xl ${
                    activeTab === item.href ? "text-blue-500" : "text-gray-400"
                }`}
            >
              {item.icon}
            </span>
                        <span
                            className={`text-sm ${
                                activeTab === item.href
                                    ? "text-blue-500 font-semibold"
                                    : "text-gray-400"
                            }`}
                        >
              {item.label}
            </span>
                    </button>
                ))}
            </div>

            <style jsx>{`
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out forwards;
                }

                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}