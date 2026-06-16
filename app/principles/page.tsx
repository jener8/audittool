"use client"
import { Navigation } from "@/components/navigation"
import { TrustPrinciples } from "@/components/trust-principles"
import { Footer } from "@/components/footer"

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <TrustPrinciples />
      </main>
      <Footer />
    </div>
  )
}
