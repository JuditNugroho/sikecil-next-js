import ResponsiveHero from "@/components/ResponsiveHero"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <main>
            <Navbar />
            <ResponsiveHero />
            {/* Section lain nanti dimasukin sini */}
            <Footer />
        </main>
    )
}
