"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Workshop Facilitator Guide",
    status: "In Development",
    statusColor: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    emoji: "🚧",
    need: "Facilitators to test and refine",
    subject: "Collaborate: Facilitator Guide",
  },
  {
    title: "Trust Card Deck",
    status: "Designing",
    statusColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    emoji: "🎨",
    need: "Designers and community input",
    subject: "Collaborate: Trust Cards",
  },
  {
    title: "Data Collection Templates",
    status: "Testing",
    statusColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    emoji: "📊",
    need: "Data scientists and ethicists",
    subject: "Collaborate: Data Templates",
  },
  {
    title: "Translation Packs",
    status: "Starting",
    statusColor: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    emoji: "🌍",
    need: "Translators for 10+ languages",
    subject: "Collaborate: Translations",
  },
  {
    title: "Governance Playbook",
    status: "Planning",
    statusColor: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    emoji: "📋",
    need: "Policy experts and communities",
    subject: "Collaborate: Governance",
  },
]

export function JoinBuilding() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Help Build the Open Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We're creating free resources with communities worldwide. Join us!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.emoji}</div>
                    <Badge variant="outline" className={project.statusColor}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-balance">{project.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold">We need:</span> {project.need}
                  </p>

                  <a href={`mailto:audit@keepthefuturehuman.org?subject=${encodeURIComponent(project.subject)}`}>
                    <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                      <Mail className="w-4 h-4" />
                      Join This Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
