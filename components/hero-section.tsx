"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const emailSubject = encodeURIComponent("Start an Audit")

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-foreground">
            Keep the Future Human Audit
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">
            Communities defining the boundaries between technology and humanity
          </p>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative aspect-video max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden bg-muted border border-border shadow-2xl group cursor-pointer"
          >
            <img
              src="/diverse-community-workshop-discussing-ai-ethics.jpg"
              alt="Community workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="bg-primary/90 group-hover:bg-primary transition-colors rounded-full p-6">
                <Play className="w-12 h-12 text-primary-foreground fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm md:text-base font-medium">
                Watch: How Communities Are Shaping AI Governance • 3 min
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            A free, open-source toolkit for communities to audit AI systems and define human boundaries. Turn lived
            experiences into governance insights that shape trustworthy technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={`mailto:audit@keepthefuturehuman.org?subject=${emailSubject}`}>
              <Button size="lg" className="text-base w-full sm:w-auto">
                Start an Audit
              </Button>
            </a>
            <Link href="/berlin-case-study">
              <Button size="lg" variant="outline" className="text-base bg-transparent w-full sm:w-auto">
                See Berlin Case Study
              </Button>
            </Link>
            <Link href="/workshop-materials">
              <Button size="lg" variant="outline" className="text-base bg-transparent w-full sm:w-auto">
                View Workshop Materials
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
