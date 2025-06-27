import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AIModelsSelector } from "@/components/ai-models-selector"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Hero />
      <Services />
      <AIModelsSelector />
      <Booking />
      <Footer />
    </main>
  )
}
