"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const timeline = [
  {
    phase: "The Challenge",
    icon: "😟",
    title: "Berlin seniors losing €2M annually",
    description: "Digital banking fraud targeting elderly users through confusing interfaces and AI-assisted scams",
  },
  {
    phase: "The Workshop",
    icon: "👥",
    title: "25 seniors gathered to map trust breakdowns",
    description: "Used trust cards to identify pain points in digital banking experiences",
  },
  {
    phase: "Key Insights",
    icon: "💡",
    title: "Community wisdom revealed patterns",
    insights: [
      "Confusing interfaces make us vulnerable",
      "No human to call when something goes wrong",
      "AI should verify, not decide",
    ],
  },
  {
    phase: "The Outcomes",
    icon: "🎯",
    title: "Dual-track innovation",
    outcomes: [
      {
        type: "Governance",
        title: "Mandatory human confirmation for AI-assisted banking",
      },
      {
        type: "Innovation",
        title: '"Trusted Guardian" - bounded AI that verifies before transacting',
      },
    ],
  },
  {
    phase: "The Impact",
    icon: "📈",
    title: "Real-world results",
    metrics: [
      { label: "Banks implementing", value: "3" },
      { label: "Fraud reduction", value: "40%" },
      { label: "Startups launched", value: "1" },
    ],
  },
]

export function BerlinCaseStudy() {
  return (
    <section id="case-study" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Case Study</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Berlin: Protecting Seniors from Digital Banking Fraud
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            How community wisdom transformed into both policy and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <Card className="md:ml-20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">
                          {item.phase}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 text-balance">{item.title}</h3>
                        {item.description && (
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        )}
                        {item.insights && (
                          <div className="mt-4 space-y-2">
                            {item.insights.map((insight, i) => (
                              <div
                                key={i}
                                className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-sm font-medium"
                              >
                                "{insight}"
                              </div>
                            ))}
                          </div>
                        )}
                        {item.outcomes && (
                          <div className="mt-4 grid md:grid-cols-2 gap-4">
                            {item.outcomes.map((outcome, i) => (
                              <div key={i} className="bg-muted rounded-lg p-4">
                                <Badge className="mb-2">{outcome.type}</Badge>
                                <p className="text-sm font-medium leading-relaxed">{outcome.title}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.metrics && (
                          <div className="mt-4 grid grid-cols-3 gap-4">
                            {item.metrics.map((metric, i) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
