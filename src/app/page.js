import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/Navigation/Navbar"
import Footer from "@/components/ui/Navigation/Footer"
import ContactInfo from "@/components/ui/LandingPage/ContactInfo"
import FeatureCards from "@/components/ui/LandingPage/FeatureCards"
import HeroComponent from "@/components/ui/LandingPage/HeroComponent"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-1">

     

        {/* Features Section */}
        <section className="">
        <HeroComponent />
          <FeatureCards />
        </section>
        {/* Contact Section */}
        <section className="bg-[#EFEDE9] p-10">
          <ContactInfo />
        </section>



        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier lifestyle with Smart Diet Center
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

