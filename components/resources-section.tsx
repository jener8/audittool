"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Upload, Globe } from "lucide-react"
import { motion } from "framer-motion"

const resources = [
  {
    icon: FileText,
    title: "Facilitator Handbook",
    description: "Complete guide to running effective workshops",
    size: "24 pages",
    downloads: "2,847",
  },
  {
    icon: FileText,
    title: "Trust Card Deck",
    description: "Printable cards for workshop activities",
    size: "PDF",
    downloads: "3,921",
  },
  {
    icon: FileText,
    title: "Workshop Templates",
    description: "Editable documents for data collection",
    size: "Multiple formats",
    downloads: "1,653",
  },
  {
    icon: Upload,
    title: "Data Upload Portal",
    description: "Share your audit results with the community",
    size: "Web portal",
    downloads: "892 uploads",
  },
  {
    icon: Globe,
    title: "Translation Packs",
    description: "Materials in 12+ languages",
    size: "Multiple languages",
    downloads: "1,234",
  },
  {
    icon: FileText,
    title: "Governance Worksheet",
    description: "Transform insights into recommendations",
    size: "8 pages",
    downloads: "2,156",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Open Source</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Free Resources for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to run a successful audit, completely free and open source
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-balance">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.size}</span>
                    <span>{resource.downloads}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
