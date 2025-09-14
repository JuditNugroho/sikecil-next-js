import ResponsiveHero from "@/components/Hero/ResponsiveHero"
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <main>
            <ResponsiveNavbar/>
            <ResponsiveHero/>
            {/* Section lain nanti dimasukin sini */}
            <Footer/>
        </main>
    )
}
