import "./globals.css"
import React from "react";
import type {Metadata} from "next"
import {Poppins, Nunito_Sans} from "next/font/google"

// Import Poppins font for headings
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"], // used for headings
    variable: "--font-poppins",
})

// Import Nunito Sans font for body text
const nunito = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"], // used for body text
    variable: "--font-nunito",
})

// Page metadata
export const metadata: Metadata = {
    title: "SiKecil.id",
    description: "Teman Parenting",
}

// RootLayout wraps the entire Next.js application
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.variable} ${nunito.variable} font-sans`}>
        {children}
        </body>
        </html>
    )
}
