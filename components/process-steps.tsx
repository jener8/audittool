"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const steps = [
  {
    icon: FileText,
    title: "Get the Cards",
    description: "Print the fun cards and activity sheets",
    cta: "See the Cards",
    link: "/workshop-materials",
  },
  {
    icon: Users,
    title: "Play Together",
    description: "Kids talk about AI and share what they think",
    cta: null,
    link: null,
  },
  {
    icon: Mail,
    title: "Share What You Found",
    description: "Tell us what the kids said so we can help make AI better",
    cta: "Send It In",
    link: "mailto:audit@keepthefuturehuman.org?subject=Kids Workshop Results",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Three fun steps to find out what kids really think about AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10">
                    {index + 1}
                  </div>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-balance">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                  {step.cta &&
                    step.link &&
                    (step.link.startsWith("mailto:") ? (
                      <a href={step.link}>
                        <Button variant="outline" size="sm">
                          {step.cta} →
                        </Button>
                      </a>
                    ) : (
                      <Link href={step.link}>
                        <Button variant="outline" size="sm">
                          {step.cta} →
                        </Button>
                      </Link>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
