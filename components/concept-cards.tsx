"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, Shield } from "lucide-react"
import { motion } from "framer-motion"

const concepts = [
  {
    icon: Users,
    title: "Communities Define Boundaries",
    description: "Communities run workshops to identify where tech should stop",
    detail: "Real people defining real limits based on lived experience",
  },
  {
    icon: Settings,
    title: "Transform Ethics into Action",
    description: "Turn community insights into concrete governance recommendations",
    detail: "Bridge the gap between ethical principles and practical design",
  },
  {
    icon: Shield,
    title: "Build Human-Centered Tech",
    description: 'Companies use insights to create trustworthy "Tool AI"',
    detail: "Innovation that empowers rather than replaces humans",
  },
]

export function ConceptCards() {
  return (
    <section id="concept" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Is This?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A participatory toolkit that transforms community wisdom into technology governance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <concept.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-balance">{concept.title}</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{concept.description}</p>
                  <p className="text-sm text-primary font-medium">{concept.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
