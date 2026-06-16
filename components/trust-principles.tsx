"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Heart, Wrench, Scale, UserCheck, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const principles = [
  {
    icon: Eye,
    title: "Clarity",
    tagline: "I understand what this technology does",
    questions: [
      "Can you explain how this system makes decisions?",
      "What data is being collected and why?",
      "Who has access to my information?",
    ],
  },
  {
    icon: Heart,
    title: "Care",
    tagline: "This technology respects my wellbeing",
    questions: [
      "Does this system consider my mental health?",
      "Are there safeguards against harm?",
      "How does this affect vulnerable users?",
    ],
  },
  {
    icon: Wrench,
    title: "Repair",
    tagline: "When things go wrong, I can fix them",
    questions: [
      "Can I correct mistakes the system makes?",
      "Is there a human I can talk to?",
      "How do I appeal automated decisions?",
    ],
  },
  {
    icon: Scale,
    title: "Reciprocity",
    tagline: "This is a fair exchange of value",
    questions: [
      "What am I giving up for this service?",
      "Is the value exchange transparent?",
      "Can I opt out without penalty?",
    ],
  },
  {
    icon: UserCheck,
    title: "Oversight",
    tagline: "Humans remain in control",
    questions: [
      "Who is ultimately responsible for decisions?",
      "Can humans override the system?",
      "How is the technology being monitored?",
    ],
  },
]

export function TrustPrinciples() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="principles" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">The 5 Trust Principles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Framework for evaluating technology through the lens of human trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedIndex === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{principle.title}</CardTitle>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{principle.tagline}</p>
                </CardHeader>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <div className="border-t border-border pt-4">
                          <p className="text-sm font-medium mb-3">Example Questions:</p>
                          <ul className="space-y-2">
                            {principle.questions.map((question, qIndex) => (
                              <li key={qIndex} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
