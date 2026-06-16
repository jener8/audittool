"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Start Your Community Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
                Join a global movement of communities defining the boundaries between technology and humanity
              </p>

              <a href="mailto:audit@keepthefuturehuman.org?subject=Start Community Audit">
                <Button size="lg" className="gap-2 mb-8">
                  <Mail className="w-5 h-5" />
                  Start Your Community Audit
                </Button>
              </a>

              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button className="gap-2">
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Get updates on new audits, resources, and community events
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:audit@keepthefuturehuman.org?subject=Host a Workshop">
                  <Button size="lg" variant="outline">
                    Host a Workshop
                  </Button>
                </a>
                <a href="mailto:audit@keepthefuturehuman.org?subject=Partnership Inquiry">
                  <Button size="lg" variant="outline">
                    Partner With Us
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm font-medium mb-4">Share this toolkit:</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  {[
                    {
                      name: "Twitter",
                      url: "https://twitter.com/intent/tweet?text=Check%20out%20the%20Keep%20the%20Future%20Human%20Audit%20toolkit",
                    },
                    { name: "LinkedIn", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
                    { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=" },
                    {
                      name: "Email",
                      url: "mailto:?subject=Keep%20the%20Future%20Human%20Audit&body=Check%20out%20this%20toolkit",
                    },
                  ].map((platform) => (
                    <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        {platform.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
