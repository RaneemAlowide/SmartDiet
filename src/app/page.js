import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/Navigation/Navbar"
import Footer from "@/components/ui/Navigation/Footer"
import ContactInfo from "@/components/ui/LandingPage/ContactInfo"
import FeatureCards from "@/components/ui/LandingPage/FeatureCards"
import HeroComponent from "@/components/ui/LandingPage/HeroComponent"
import ServicesSection from "@/components/ui/LandingPage/ServicesSection"
import ProfileCard from "@/components/ui/LandingPage/ProfileCard"
import TestimonialSlider from "@/components/ui/LandingPage/TestimonialSlider"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import FAQ from "@/components/ui/LandingPage/FAQ"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-1">

     

        {/* Features Section */}
        <section className="">
        <HeroComponent />
          <FeatureCards />
          <ServicesSection />
          <BackgroundWrapper>
            <ProfileCard />
            < TestimonialSlider />
          </BackgroundWrapper>
          < FAQ />
        </section>
        {/* Contact Section */}
        <section className="bg-[#EFEDE9] p-10">
          <ContactInfo />
        </section>

      </main>
      <Footer />
    </div>
  )
}

