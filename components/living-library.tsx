"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Users, Lightbulb, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const audits = [
  {
    title: "Seniors & Digital Banking",
    image: "/senior-citizens-using-digital-banking-technology.jpg",
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20",
    count: 15,
    preview: "Fraud through confusing interfaces and lack of human support",
    problems: [
      "Fraud through confusing interfaces designed without their input",
      "No human support when AI systems fail or make errors",
      "AI making critical financial decisions without oversight",
      "Complex authentication processes hurting access to services",
      "Assumptions about digital literacy that exclude seniors",
    ],
    communities: "Berlin, Munich, Hamburg seniors groups (ages 65-82)",
    insights: [
      "78% couldn't understand how AI made decisions about their accounts",
      "92% had no recourse when automated systems made mistakes",
      "Participants designed 'Trusted Guardian' app concept for verification",
    ],
  },
  {
    title: "Youth & Social Media Addiction",
    image: "/teenagers-using-smartphones-and-social-media.jpg",
    color: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-500/20",
    count: 23,
    preview: "Algorithms maximizing engagement over wellbeing",
    problems: [
      "Algorithms designed to maximize engagement over mental wellbeing",
      "Dark patterns and infinite scroll keeping young people hooked",
      "Mental health impacts unreported and unaddressed by platforms",
      "Parental controls that are ineffective or easily bypassed",
      "No transparency in how content is recommended or prioritized",
    ],
    communities: "High school students across 5 cities, ages 14-18",
    insights: [
      "89% felt platforms didn't care about their wellbeing",
      "Youth demanded 'time well spent' metrics instead of engagement metrics",
      "Co-created design for 'intentional browsing' mode with clear endpoints",
    ],
  },
  {
    title: "Care Workers & Algorithmic Scheduling",
    image: "/healthcare-care-workers-helping-elderly-patients.jpg",
    color: "from-rose-500/10 to-rose-600/5",
    borderColor: "border-rose-500/20",
    count: 8,
    preview: "Algorithms ignoring worker needs and treating people as numbers",
    problems: [
      "Scheduling algorithms that ignore worker needs and preferences",
      "No flexibility for family emergencies or personal circumstances",
      "Dehumanizing optimization that treats workers as interchangeable units",
      "Workers reduced to productivity numbers without context",
      "No input into the systems that control their work lives",
    ],
    communities: "Home care workers in London and Manchester",
    insights: [
      "95% wanted human oversight restored to scheduling decisions",
      "Workers identified need for 'care context' in algorithms",
      "Proposed governance requiring worker input in algorithm design",
    ],
  },
  {
    title: "Students & AI in Education",
    image: "/students-learning-with-computers-and-ai-technology.jpg",
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/20",
    count: 19,
    preview: "Surveillance instead of support, bias in grading",
    problems: [
      "Surveillance systems that monitor students instead of supporting them",
      "Bias in automated grading that disadvantages certain groups",
      "Loss of human connection and mentorship with teachers",
      "Privacy concerns with extensive data collection on minors",
      "AI tutors that can't understand individual learning needs",
    ],
    communities: "University and high school students, 8 institutions",
    insights: [
      "84% felt AI was used for control rather than learning support",
      "Students demanded transparency in how AI grades and evaluates",
      "Co-designed principles for 'AI as learning partner, not judge'",
    ],
  },
  {
    title: "Refugees & Digital Bureaucracy",
    image: "/diverse-refugees-navigating-digital-systems-and-pa.jpg",
    color: "from-teal-500/10 to-teal-600/5",
    borderColor: "border-teal-500/20",
    count: 12,
    preview: "Language barriers and automated rejections without explanation",
    problems: [
      "Language barriers in digital systems with inadequate translation",
      "No recourse or appeals process for automated decisions",
      "Digital ID requirements that exclude people without documentation",
      "Automated rejections without human review or explanation",
      "Systems designed without input from refugee communities",
    ],
    communities: "Refugee support organizations in Germany and Greece",
    insights: [
      "100% demanded human review for all automated decisions affecting asylum",
      "Identified need for multilingual support and cultural context",
      "Proposed 'right to human decision-maker' in critical systems",
    ],
  },
  {
    title: "Workers & Workplace Surveillance",
    image: "/workplace-surveillance-cameras-monitoring-office-w.jpg",
    color: "from-slate-500/10 to-slate-600/5",
    borderColor: "border-slate-500/20",
    count: 14,
    preview: "Constant monitoring destroying trust and missing context",
    problems: [
      "Constant monitoring and tracking destroying workplace trust",
      "Productivity scores that miss context and human factors",
      "AI-powered hiring systems with documented bias",
      "No transparency in how performance is measured and evaluated",
      "Workers have no say in surveillance systems used on them",
    ],
    communities: "Office workers, warehouse staff, gig workers across sectors",
    insights: [
      "91% felt surveillance reduced trust rather than improving productivity",
      "Workers proposed 'transparency parity' - if AI watches us, we see how",
      "Demanded worker councils with power to approve surveillance tools",
    ],
  },
]

export function LivingLibrary() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-balance">
            Explore Real Audits from Communities Worldwide
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tap any card to see detailed problems, insights, and how you can start your own audit
          </p>
        </motion.div>

        <div className="space-y-4 mb-8">
          {audits.map((audit, index) => {
            const isExpanded = expandedIndex === index
            const emailSubject = encodeURIComponent(`Audit Request: ${audit.title}`)

            return (
              <Card
                key={audit.title}
                className={`transition-shadow duration-200 ${
                  isExpanded ? "shadow-lg" : "shadow-sm"
                } bg-gradient-to-br ${audit.color} border-2 ${audit.borderColor}`}
              >
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? "Collapse" : "Expand"} ${audit.title}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                          src={audit.image || "/placeholder.svg"}
                          alt={audit.title}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl font-bold text-balance mb-1">{audit.title}</CardTitle>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{audit.preview}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Badge variant="secondary" className="text-xs">
                          {audit.count} audits
                        </Badge>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <CardContent className="pt-0 pb-6 space-y-6">
                    <div className="h-px bg-border" />

                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                      {/* Problems Section */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-destructive" />
                          <h4 className="text-xl font-bold">Problems Identified</h4>
                        </div>
                        <ul className="space-y-2">
                          {audit.problems.map((problem, i) => (
                            <li
                              key={i}
                              className="text-base md:text-lg text-muted-foreground leading-relaxed flex gap-2"
                            >
                              <span className="text-destructive mt-1">•</span>
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Communities & Insights Section */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-primary" />
                            <h4 className="text-xl font-bold">Communities Involved</h4>
                          </div>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {audit.communities}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            <h4 className="text-xl font-bold">Key Insights</h4>
                          </div>
                          <ul className="space-y-2">
                            {audit.insights.map((insight, i) => (
                              <li
                                key={i}
                                className="text-base md:text-lg text-muted-foreground leading-relaxed flex gap-2"
                              >
                                <span className="text-amber-500 mt-1">•</span>
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href={`mailto:audit@keepthefuturehuman.org?subject=${emailSubject}`}
                        onClick={(e) => e.stopPropagation()}
                        className="block"
                      >
                        <Button size="lg" className="w-full md:w-auto">
                          <Mail className="w-4 h-4 mr-2" />
                          Start an Audit on This Topic
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 border-2 border-dashed">
            <CardContent className="p-6 md:p-8 text-center">
              <img
                src="/lightbulb-idea-innovation-community-collaboration.jpg"
                alt="New idea"
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover mx-auto mb-3 md:mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Your Community's Problem</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Don't see your issue? Start a new audit and help us expand the library
              </p>
              <a href="mailto:audit@keepthefuturehuman.org?subject=Start Custom Audit">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Start Custom Audit
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
