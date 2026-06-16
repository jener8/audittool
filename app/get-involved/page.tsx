"use client"
import { Navigation } from "@/components/navigation"
import { JoinBuilding } from "@/components/join-building"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <JoinBuilding />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
