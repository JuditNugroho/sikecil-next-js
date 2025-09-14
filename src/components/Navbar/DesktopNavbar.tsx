"use client";

import Link from "next/link";
import {useState} from "react";
import {NavItems, NavItem} from "./navbarItems";

export default function DesktopNavbar() {
    const [activeTab, setActiveTab] = useState(NavItems[0].href);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 hidden md:block bg-white/90 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-500">
                    SiKecil
                </Link>
                <div className="flex space-x-6">
                    {NavItems.map((item: NavItem) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-gray-700 hover:text-blue-500 transition ${
                                activeTab === item.href ? "font-semibold text-blue-500" : ""
                            }`}
                            onClick={() => setActiveTab(item.href)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}