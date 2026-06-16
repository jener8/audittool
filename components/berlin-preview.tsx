"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function BerlinPreview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/diverse-community-workshop-discussing-ai-ethics.jpg"
                  alt="Berlin workshop participants"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  How 25 Berlin Seniors Transformed Digital Banking
                </h2>

                <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg">
                  <TrendingDown className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-primary">40%</div>
                    <div className="text-sm text-muted-foreground">
                      Reduction in fraud after implementing their recommendations
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A groundbreaking community audit that led to real policy changes, new innovations, and a model being
                  replicated across Europe.
                </p>

                <Link href="/berlin-case-study">
                  <Button size="lg" className="gap-2 group">
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
