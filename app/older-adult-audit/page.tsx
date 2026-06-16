"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Lightbulb,
  MessageCircle,
  ClipboardCheck,
  BookOpen,
  PlayCircle,
  User,
  Heart,
  Eye,
  Wrench,
  Search,
  Scale,
  Download,
  Monitor,
  Tablet,
  Users,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function OlderAdultAuditPage() {
  const [showFramework, setShowFramework] = useState(false)
  const [showContext, setShowContext] = useState(false)
  const [showAudit, setShowAudit] = useState(false)

  // Audit tool state
  const [selectedAI, setSelectedAI] = useState("")
  const [flippedCards, setFlippedCards] = useState<string[]>([])
  const [trustScores, setTrustScores] = useState({
    clarity: 50, care: 50, repair: 50, reciprocity: 50, oversight: 50,
  })
  const [notes, setNotes] = useState({
    clarity: "", care: "", repair: "", reciprocity: "", oversight: "",
  })

  const averageTrustScore = Math.round(
    (trustScores.clarity + trustScores.care + trustScores.repair + trustScores.reciprocity + trustScores.oversight) / 5,
  )

  const getRiskLevel = (score: number) => {
    if (score >= 70) return { text: "Low risk identified.", color: "text-green-700" }
    if (score >= 40) return { text: "Moderate risk. Requires attention.", color: "text-amber-700" }
    return { text: "High risk. Immediate review recommended.", color: "text-red-700" }
  }

  const riskLevel = getRiskLevel(averageTrustScore)

  const toggleCard = (cardId: string) => {
    setFlippedCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]))
  }

  const getRiskIcon = (score: number) => {
    if (score >= 70) return <div className="w-3 h-3 rounded-full bg-green-600 flex-shrink-0" />
    if (score >= 40) return <div className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0" />
    return <div className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0" />
  }

  const trustPrinciples = [
    {
      id: "clarity", icon: Search, title: "CLARITY",
      statement: "I understand what this AI does and how it affects me",
      questions: ["Can the system explain its decisions in clear, jargon-free language?", "Is it transparent about what data it collects and how it is used?", "Are instructions accessible to people with varying levels of digital literacy?"],
      placeholder: "Note any transparency or comprehension concerns...",
    },
    {
      id: "care", icon: Heart, title: "CARE",
      statement: "This AI supports my wellbeing and dignity",
      questions: ["Does the system account for cognitive decline or fatigue?", "Does it avoid creating unnecessary dependency?", "Does it preserve the dignity and agency of the person using it?"],
      placeholder: "Note any wellbeing or dignity concerns...",
    },
    {
      id: "repair", icon: Wrench, title: "REPAIR",
      statement: "When something goes wrong, it can be fixed",
      questions: ["Can errors or incorrect decisions be reversed?", "Is a human support person accessible when needed?", "Are complaint and appeal processes clearly available?"],
      placeholder: "Note any recourse or error recovery concerns...",
    },
    {
      id: "reciprocity", icon: Scale, title: "FAIRNESS",
      statement: "The relationship is equitable and respectful",
      questions: ["What is being collected from the person and what do they receive in return?", "Who benefits most from this system's operation?", "Are costs, risks, and benefits distributed fairly?"],
      placeholder: "Note any fairness or equity concerns...",
    },
    {
      id: "oversight", icon: Eye, title: "CONTROL",
      statement: "People retain meaningful control",
      questions: ["Can the person or their advocate opt out or modify how the system works?", "Who has final authority when the system makes a consequential decision?", "Is human oversight built into critical decision points?"],
      placeholder: "Note any autonomy or oversight concerns...",
    },
  ]

  const popularAIOptions = [
    "Health monitoring or telehealth system",
    "Care management platform",
    "Voice assistant (Alexa, Google Home)",
    "Banking or financial management app",
    "Social connection or companionship AI",
    "Benefits or entitlements system",
    "Other (specify below)",
  ]

  const downloadReport = () => {
    const content = `
OLDER ADULT AI TRUST AUDIT REPORT
===================================

AI System: ${selectedAI || "Not specified"}
Date: ${new Date().toLocaleDateString()}
Context: AI used by or around older adults

TRUST ASSESSMENT RESULTS
Overall Trust Score: ${averageTrustScore}/100
Risk Level: ${riskLevel.text}

DIMENSION SCORES
- CLARITY (transparency and comprehension): ${trustScores.clarity}/100
- CARE (wellbeing and dignity): ${trustScores.care}/100
- REPAIR (recourse and error recovery): ${trustScores.repair}/100
- FAIRNESS (equity and reciprocity): ${trustScores.reciprocity}/100
- CONTROL (autonomy and human oversight): ${trustScores.oversight}/100

ASSESSOR NOTES
- CLARITY: ${notes.clarity || "No notes recorded"}
- CARE: ${notes.care || "No notes recorded"}
- REPAIR: ${notes.repair || "No notes recorded"}
- FAIRNESS: ${notes.reciprocity || "No notes recorded"}
- CONTROL: ${notes.oversight || "No notes recorded"}

Generated by Older Adult AI Audit -- TrustAudit
Framework: trustbridge.design
Date: ${new Date().toLocaleString()}
`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    const aiSystemName = selectedAI.replace(/[^a-zA-Z0-9]/g, "_")
    const dateStr = new Date().toISOString().split("T")[0]
    a.download = `Older_Adult_AI_Audit_${aiSystemName}_${dateStr}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">

          {/* Hero */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Checking if the AI is Safe for Older Adults </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight text-balance">
                  Building Confidence in AI for Older Adults
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                  Assess AI systems used by or around older adults for dependency risk, cognitive vulnerability, autonomy, and wellbeing impact.
                </p>
                <Button
                  size="lg"
                  onClick={() => {
                    setShowAudit(true)
                    setTimeout(() => document.getElementById("audit-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                  }}
                  className="h-12 px-8 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Start the Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                  <Image
                    src="/images/older-adult-audit-hero.jpg"
                    alt="Older adult engaging with technology in a warm home setting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Risk themes */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">Risk Dimensions</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Key areas where AI systems may pose risks to older adults.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
              {[
                { title: "Cognitive vulnerability", desc: "Does the system account for cognitive decline, memory challenges, or decision-making under fatigue?" },
                { title: "Digital literacy gaps", desc: "Is the system accessible to people with limited digital experience or confidence?" },
                { title: "Isolation amplification", desc: "Does the system reduce meaningful human contact or increase social isolation?" },
                { title: "Automation of care decisions", desc: "Are consequential care or health decisions being delegated to automated systems without adequate oversight?" },
                { title: "Loss of human oversight", desc: "Do caregivers, family members, or advocates retain meaningful involvement in system decisions?" },
                { title: "Manipulation or nudging", desc: "Does the system exploit cognitive vulnerabilities through persuasive design or dark patterns?" },
                { title: "Consent clarity", desc: "Is informed consent genuinely obtainable, or are terms of use effectively inaccessible?" },
                { title: "Accessibility bias", desc: "Does the system disadvantage people with sensory, motor, or cognitive accessibility needs?" },
              ].map((theme, i) => (
                <div key={i} className="py-5 border-t border-border">
                  <h3 className="text-base font-semibold text-foreground mb-1">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{theme.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 Steps */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">How It Works</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Four stages from scoping to actionable recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { num: 1, icon: Shield, title: "Define boundaries", desc: "Establish what the AI system should never do. Identify non-negotiable protections for older adults." },
                { num: 2, icon: Lightbulb, title: "Envision better design", desc: "What would a genuinely supportive, autonomy-respecting system look like for older adults?" },
                { num: 3, icon: MessageCircle, title: "Gather perspectives", desc: "Consult older adults, caregivers, and advocates directly about their lived experience with the system." },
                { num: 4, icon: ClipboardCheck, title: "Document findings", desc: "Compile the audit report with evidence, risk scores, and actionable recommendations." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 py-5 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TrustBridge design service CTA */}
          <section className="mb-20">
            <div className="rounded-xl border border-border bg-secondary/50 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Ready to improve your product?</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Turn audit findings into inclusive, dignity-preserving design improvements with our research and design service.
                </p>
              </div>
              <a
                href="https://trustbridge.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-border bg-card text-foreground hover:bg-secondary transition-colors flex-shrink-0"
              >
                Explore TrustBridge Design
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Three expandable sections */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setShowFramework(!showFramework)
                  if (!showFramework) setTimeout(() => document.getElementById("framework-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                }}
                className={`rounded-xl p-5 border text-left transition-all duration-300 ${
                  showFramework ? "bg-secondary border-border shadow-sm" : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Framework Detail</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Principles and methodology</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${showFramework ? "rotate-180" : ""}`} />
                </div>
              </button>

              <button
                onClick={() => {
                  setShowContext(!showContext)
                  if (!showContext) setTimeout(() => document.getElementById("context-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                }}
                className={`rounded-xl p-5 border text-left transition-all duration-300 ${
                  showContext ? "bg-secondary border-border shadow-sm" : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Context</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Why this audit matters</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${showContext ? "rotate-180" : ""}`} />
                </div>
              </button>

              <button
                onClick={() => {
                  setShowAudit(!showAudit)
                  if (!showAudit) setTimeout(() => document.getElementById("audit-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                }}
                className={`rounded-xl p-5 border text-left transition-all duration-300 ${
                  showAudit ? "bg-secondary border-border shadow-sm" : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Start Audit</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Run the trust assessment now</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${showAudit ? "rotate-180" : ""}`} />
                </div>
              </button>
            </div>
          </section>

          {/* FRAMEWORK DETAIL (expandable) */}
          <AnimatePresence>
            {showFramework && (
              <motion.div
                id="framework-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-16 mb-20 pt-4">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">{"Boundaries + Aspirations = Responsible AI"}</h2>
                    <p className="text-base text-muted-foreground mb-6">Every audit examines two dimensions:</p>
                    <div className="space-y-4">
                      <div className="py-4 border-t border-border">
                        <p className="text-base">
                          <span className="font-semibold text-foreground">1. Boundaries</span> -- What should this system never do? What safeguards are non-negotiable when older adults are involved?
                        </p>
                      </div>
                      <div className="py-4 border-t border-border">
                        <p className="text-base">
                          <span className="font-semibold text-foreground">2. Aspirations</span> -- What would a genuinely supportive, dignity-preserving system look like for older adults?
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-muted-foreground">Together, these produce actionable governance recommendations.</p>
                  </section>

                  <section>
                    <div className="rounded-xl p-8 md:p-10 border border-border bg-card">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">Why AI Systems Need Governance</h2>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-4">The challenge</h3>
                          <p className="text-sm text-muted-foreground mb-4">AI systems increasingly mediate critical aspects of life for older adults. Without governance, they may:</p>
                          <ul className="space-y-3">
                            {[
                              "Exploit cognitive vulnerabilities through persuasive design",
                              "Replace meaningful human contact with automated interactions",
                              "Make consequential health or care decisions without adequate oversight",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-4">What this audit produces</h3>
                          <p className="text-sm text-muted-foreground mb-4">When conducted with older adults and their advocates, this audit reveals:</p>
                          <ul className="space-y-3">
                            {[
                              "Gaps between system design and lived experience of older adults",
                              "Specific dependency, dignity, and autonomy risks",
                              "Concrete recommendations for improving safety and accountability",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">Audit Outcomes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { title: "Risk assessment", desc: "Documented evidence of dependency, vulnerability, and autonomy risks across the system", num: "1" },
                        { title: "Participatory evidence", desc: "Perspectives from older adults and caregivers recorded and analysed systematically", num: "2" },
                        { title: "Action plan", desc: "Prioritised recommendations for improving safety, dignity, and human oversight", num: "3" },
                      ].map((item, i) => (
                        <div key={i} className="py-6 border-t border-border">
                          <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-sm mb-4">{item.num}</div>
                          <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTEXT (expandable) */}
          <AnimatePresence>
            {showContext && (
              <motion.div
                id="context-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-16 mb-20 pt-4">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance mb-4 font-display">
                      Why This Audit Exists
                    </h2>
                    <p className="text-base text-muted-foreground text-balance mb-8 leading-relaxed max-w-2xl">
                      AI systems are increasingly deployed in contexts that directly affect older adults -- health monitoring, care management, financial services, social connection, and benefits administration. These systems often operate without meaningful input from the people they affect most.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">Key Concerns</h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
                      {[
                        { title: "Invisible automation", desc: "Decisions about care, benefits, and services are increasingly delegated to algorithms. Older adults may not know when or how AI is shaping their experience." },
                        { title: "Digital exclusion", desc: "Systems designed for digitally confident users create barriers for those with limited technology experience, compounding existing inequalities." },
                        { title: "Dependency creation", desc: "AI companions and care tools can replace rather than supplement human relationships, increasing isolation while appearing to address it." },
                        { title: "Consent as fiction", desc: "Terms of service and consent mechanisms are often inaccessible in practice, making informed consent effectively impossible for many older adults." },
                      ].map((item, i) => (
                        <div key={i} className="py-5 border-t border-border">
                          <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="rounded-xl p-8 border border-border bg-card">
                      <h3 className="text-lg font-semibold text-foreground mb-3">The case for participatory audit</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Governance frameworks developed without the participation of affected communities are incomplete at best and harmful at worst.
                        This audit provides a structured method for centring the perspectives of older adults in AI governance, producing evidence that
                        can inform policy, procurement, and design decisions.
                      </p>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AUDIT TOOL (expandable) */}
          <AnimatePresence>
            {showAudit && (
              <motion.div
                id="audit-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-12 mb-20 pt-4">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                      Older Adult AI Trust Assessment
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                      Select an AI system and evaluate it across five trust dimensions. Your assessment generates a downloadable report.
                    </p>
                    <div className="mt-6 max-w-2xl border border-border rounded-xl p-5 bg-card text-left">
                      <p className="text-sm font-semibold text-foreground mb-3">Before you begin:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="font-semibold flex-shrink-0">1.</span>
                          <span><strong>Review the context section</strong> to understand the governance rationale.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold flex-shrink-0">2.</span>
                          <span><strong>Running a group session?</strong>{" "}
                            <a href="mailto:info@jennifersimonds.com?subject=Older Adult AI Audit - Group Session" className="underline font-semibold text-primary hover:text-primary/80">
                              Contact Jenny Simonds
                            </a>{" "}for facilitation support.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Pick an AI */}
                  <Card className="p-8 border border-border">
                    <h3 className="text-xl font-semibold mb-6 font-display">Select AI System</h3>
                    <div className="space-y-4 max-w-2xl">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Choose from common systems:</label>
                      <select
                        className="w-full p-3 text-sm border border-input rounded-lg focus:border-ring focus:ring-2 focus:ring-ring/20 bg-background"
                        value={selectedAI}
                        onChange={(e) => setSelectedAI(e.target.value)}
                      >
                        <option value="">Select a system...</option>
                        {popularAIOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>

                      {selectedAI === "Other (specify below)" && (
                        <input
                          type="text"
                          placeholder="Describe the AI system..."
                          className="w-full p-3 text-sm border border-input rounded-lg focus:border-ring focus:ring-2 focus:ring-ring/20 bg-background"
                        />
                      )}

                      {selectedAI && selectedAI !== "Other (specify below)" && (
                        <div className="mt-6 p-5 rounded-xl border border-border bg-secondary">
                          <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Current Assessment</h4>
                          <div className={`text-base font-semibold ${riskLevel.color} flex items-center gap-2`}>
                            {getRiskIcon(averageTrustScore)}
                            <span>{riskLevel.text}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>

                  {/* Trust Cards */}
                  {selectedAI && (
                    <>
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 font-display">Trust Dimension Cards</h3>
                        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
                          Each card represents a trust dimension. Click to reveal assessment questions and scoring.
                        </p>
                        <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
                          <div className="p-3 rounded-lg border border-border bg-card text-center">
                            <Monitor className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">Projector</p>
                          </div>
                          <div className="p-3 rounded-lg border border-border bg-card text-center">
                            <Tablet className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">Tablet</p>
                          </div>
                          <div className="p-3 rounded-lg border border-border bg-card text-center">
                            <User className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                            <p className="text-xs text-muted-foreground">Individual</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trustPrinciples.map((principle) => {
                          const Icon = principle.icon
                          const isFlipped = flippedCards.includes(principle.id)
                          return (
                            <div key={principle.id} className="relative h-96 perspective-1000 cursor-pointer" onClick={() => toggleCard(principle.id)}>
                              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                                <Card className="absolute w-full h-full backface-hidden border border-border bg-secondary p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                  <Icon className="w-8 h-8 text-muted-foreground mb-4" />
                                  <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider text-foreground">{principle.title}</h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.statement}</p>
                                  <p className="text-xs text-muted-foreground mt-4">Click to assess</p>
                                </Card>
                                <Card className="absolute w-full h-full backface-hidden rotate-y-180 border border-border bg-card p-6 overflow-y-auto">
                                  <div className="flex items-center gap-3 mb-4">
                                    <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                    <h4 className="text-sm font-semibold uppercase tracking-wider">{principle.title}</h4>
                                  </div>
                                  <div className="space-y-3 mb-5">
                                    <p className="font-medium text-xs text-foreground">Assessment questions:</p>
                                    <ul className="space-y-2">
                                      {principle.questions.map((q, i) => (
                                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                                          <span className="text-foreground flex-shrink-0">{"--"}</span>
                                          <span>{q}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="space-y-3">
                                    <label className="block">
                                      <span className="text-xs font-medium text-foreground mb-2 block">
                                        Score: {trustScores[principle.id as keyof typeof trustScores]}/100
                                      </span>
                                      <input
                                        type="range" min="0" max="100"
                                        value={trustScores[principle.id as keyof typeof trustScores]}
                                        onChange={(e) => { e.stopPropagation(); setTrustScores((prev) => ({ ...prev, [principle.id]: Number(e.target.value) })) }}
                                        className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                      />
                                    </label>
                                    <textarea
                                      placeholder={principle.placeholder}
                                      value={notes[principle.id as keyof typeof notes]}
                                      onChange={(e) => { e.stopPropagation(); setNotes((prev) => ({ ...prev, [principle.id]: e.target.value })) }}
                                      onClick={(e) => e.stopPropagation()}
                                      className="w-full p-2 text-xs border border-input rounded-lg focus:border-ring focus:ring-2 focus:ring-ring/20 bg-background resize-none"
                                      rows={3}
                                    />
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-3 text-center">Click to flip back</p>
                                </Card>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Results */}
                      <Card className="p-8 border border-border">
                        <h3 className="text-xl font-semibold mb-6 font-display">Assessment Results</h3>
                        <div className="flex flex-col md:flex-row items-center justify-start gap-8 mb-8">
                          <div className="relative">
                            <svg className="w-32 h-32 transform -rotate-90">
                              <circle cx="64" cy="64" r="56" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />
                              <circle cx="64" cy="64" r="56" stroke="hsl(var(--foreground))" strokeWidth="8" fill="none" strokeDasharray={`${(averageTrustScore / 100) * 352} 352`} strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-3xl font-bold text-foreground">{averageTrustScore}</span>
                              <span className="text-xs text-muted-foreground">Trust Score</span>
                            </div>
                          </div>
                          <div className="max-w-md">
                            <div className={`text-base font-semibold ${riskLevel.color} mb-2 flex items-center gap-2`}>
                              {getRiskIcon(averageTrustScore)}
                              <span>{riskLevel.text}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Based on your assessment across five trust dimensions.</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                          {trustPrinciples.map((principle) => (
                            <div key={principle.id} className="p-3 bg-secondary rounded-lg text-center">
                              <div className="text-xs text-muted-foreground mb-1">{principle.title}</div>
                              <div className="text-lg font-semibold text-foreground">{trustScores[principle.id as keyof typeof trustScores]}</div>
                            </div>
                          ))}
                        </div>
                        <Button className="bg-foreground text-background hover:opacity-90 px-6 py-2.5 text-sm" onClick={downloadReport}>
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </Button>
                      </Card>

                      {/* Group session */}
                      <Card className="p-8 border border-border">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <Users className="w-8 h-8 text-muted-foreground flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-3 font-display">Facilitated Group Sessions</h3>
                            <p className="text-sm text-muted-foreground mb-4 max-w-2xl leading-relaxed">
                              This assessment is most effective when conducted with older adults, their caregivers, and advocates in a facilitated group setting.
                              Professional facilitation ensures accessibility, rigorous methodology, and actionable outcomes.
                            </p>
                            <div className="border border-border rounded-lg p-4 mb-6 max-w-xl bg-secondary text-left">
                              <p className="text-xs font-medium text-foreground mb-2">Next steps:</p>
                              <ol className="space-y-1.5 text-xs text-muted-foreground list-decimal list-inside">
                                <li>Review the context section to understand the governance rationale.</li>
                                <li>Contact Jenny Simonds to arrange a facilitated session.</li>
                              </ol>
                            </div>
                            <a href="mailto:info@jennifersimonds.com?subject=Older Adult AI Audit - Group Session Request">
                              <Button className="bg-foreground text-background hover:opacity-90 px-6 py-2.5 text-sm">
                                Request Facilitation Support
                              </Button>
                            </a>
                          </div>
                        </div>
                      </Card>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  )
}
