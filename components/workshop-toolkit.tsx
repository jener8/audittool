"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const focusAreas = [
  { title: "Cybersecurity for Seniors", icon: "👵", color: "bg-blue-500/10 text-blue-600" },
  { title: "AI in Education", icon: "🎓", color: "bg-green-500/10 text-green-600" },
  { title: "Social Media & Youth", icon: "📱", color: "bg-purple-500/10 text-purple-600" },
  { title: "Healthcare Algorithms", icon: "🏥", color: "bg-red-500/10 text-red-600" },
  { title: "Workplace Automation", icon: "💼", color: "bg-orange-500/10 text-orange-600" },
  { title: "Digital Banking", icon: "💳", color: "bg-cyan-500/10 text-cyan-600" },
]

const sampleQuestions = [
  "Where do you lose trust in this technology?",
  "What would make you feel safer?",
  "Who should have the final say?",
  "When should a human intervene?",
  "What information do you need to feel confident?",
]

export function WorkshopToolkit() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  return (
    <section id="toolkit" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Create Your Custom Workshop</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore sample questions and generate materials tailored to your community
          </p>
        </motion.div>

        {/* Step 1: Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
              1
            </span>
            Choose Your Focus Area
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                    selectedArea === area.title ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedArea(area.title)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <p className="font-medium text-sm text-balance">{area.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Step 2: Sample Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
              2
            </span>
            Explore Sample Questions
          </h3>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                These questions help facilitators guide discussions. Adapt them to your community's needs.
              </p>
              <div className="space-y-3">
                {sampleQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{question}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step 3: Generate Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">
              3
            </span>
            Generate Your Kit
          </h3>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Download Workshop Materials</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get everything you need: Trust Card Deck, Facilitator Guide, Data Collection Template, and Governance
                Worksheet
              </p>
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Complete Kit
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Free • Open Source • Available in multiple languages</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
