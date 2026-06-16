"use client"
import { Navigation } from "@/components/navigation"
import { ProcessSteps } from "@/components/process-steps"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  )
}
