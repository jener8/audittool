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

export default function ChildAuditPage() {
  const [showStory, setShowStory] = useState(false)
  const [showAudit, setShowAudit] = useState(false)
  const [showLearn, setShowLearn] = useState(false)

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

  const workshopSteps = [
    { title: "Participants arrive", desc: "Children aged 6-8 gather in a facilitated session. The facilitator explains the purpose: to evaluate whether an AI system treats them fairly and safely.", image: "/images/workshop-step1.jpg" },
    { title: "Reviewing the Trust Cards", desc: "Each child receives 5 cards, each containing a key question: Does the system explain itself? Does it treat everyone equally? Is help available when needed?", image: "/images/workshop-step2.jpg" },
    { title: "Small group discussion", desc: "Children discuss in small groups what works well and what feels confusing, unfair, or exclusionary about the system.", image: "/images/workshop-step3.jpg" },
    { title: "Consolidating findings", desc: "The group maps common themes. Patterns emerge: many children share the same concerns about fairness and clarity.", image: "/images/workshop-step4.jpg" },
    { title: "Generating recommendations", desc: "Children propose changes. What would a better, kinder, fairer system look like? Their ideas form the basis of the audit report.", image: "/images/workshop-step5.jpg" },
  ]

  const trustPrinciples = [
    {
      id: "clarity", icon: Search, title: "CLARITY",
      statement: "I understand what this AI does",
      questions: ["Can the system explain how it works in age-appropriate language?", "Is it clear what information it collects?", "Is it transparent about automated decisions?"],
      placeholder: "Note any clarity concerns...",
    },
    {
      id: "care", icon: Heart, title: "CARE",
      statement: "This AI prioritises wellbeing",
      questions: ["Does the system support developmental needs?", "Are safeguarding measures in place?", "Does it consider emotional and psychological impact?"],
      placeholder: "Note any care or safeguarding concerns...",
    },
    {
      id: "repair", icon: Wrench, title: "REPAIR",
      statement: "When something goes wrong, it can be fixed",
      questions: ["Can errors be reversed?", "Is a human available for support?", "What happens when the system fails?"],
      placeholder: "Note any repair or recourse concerns...",
    },
    {
      id: "reciprocity", icon: Scale, title: "FAIRNESS",
      statement: "The relationship is equitable",
      questions: ["What data is collected and what is given in return?", "Who benefits most from this system?", "Is the exchange fair for the child?"],
      placeholder: "Note any fairness or equity concerns...",
    },
    {
      id: "oversight", icon: Eye, title: "CONTROL",
      statement: "Humans retain meaningful oversight",
      questions: ["Can a responsible adult intervene at any point?", "Who has the final authority over the system?", "Can children or guardians opt out?"],
      placeholder: "Note any oversight or autonomy concerns...",
    },
  ]

  const popularAIOptions = [
    "Educational learning platform",
    "Voice assistant (Siri, Alexa)",
    "Content recommendation algorithm (YouTube Kids, TikTok)",
    "School assessment or grading system",
    "Search engine",
    "Chatbot or conversational AI",
    "Other (specify below)",
  ]

  const downloadReport = () => {
    const content = `
CHILD AI TRUST AUDIT REPORT
============================

AI System: ${selectedAI || "Not specified"}
Date: ${new Date().toLocaleDateString()}
Context: AI used by or around children (ages 6-8)

TRUST ASSESSMENT RESULTS
Overall Trust Score: ${averageTrustScore}/100
Risk Level: ${riskLevel.text}

DIMENSION SCORES
- CLARITY (transparency and explainability): ${trustScores.clarity}/100
- CARE (safeguarding and wellbeing): ${trustScores.care}/100
- REPAIR (recourse and error recovery): ${trustScores.repair}/100
- FAIRNESS (equity and reciprocity): ${trustScores.reciprocity}/100
- CONTROL (human oversight and autonomy): ${trustScores.oversight}/100

ASSESSOR NOTES
- CLARITY: ${notes.clarity || "No notes recorded"}
- CARE: ${notes.care || "No notes recorded"}
- REPAIR: ${notes.repair || "No notes recorded"}
- FAIRNESS: ${notes.reciprocity || "No notes recorded"}
- CONTROL: ${notes.oversight || "No notes recorded"}

Generated by Child AI Audit -- TrustAudit
Framework: trustbridge.design
Date: ${new Date().toLocaleString()}
`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    const aiSystemName = selectedAI.replace(/[^a-zA-Z0-9]/g, "_")
    const dateStr = new Date().toISOString().split("T")[0]
    a.download = `Child_AI_Audit_${aiSystemName}_${dateStr}.txt`
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
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Checking if the AI is Safe for Children</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display leading-tight text-balance">
                  AI Education for Children
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                  Evaluate AI systems used by or around children for safeguarding, developmental, and ethical risk.
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
                    src="/images/child-trust-audit-hero.jpg"
                    alt="Colourful child-friendly trust audit interface with gradient cards, rating sliders, and a playful character"
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
              Key areas where AI systems may pose risks to children.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
              {[
                { title: "Safeguarding", desc: "Is the system designed to protect children from harm, exploitation, or inappropriate content?" },
                { title: "Developmental appropriateness", desc: "Does the system account for cognitive, emotional, and social development stages?" },
                { title: "Autonomy and consent", desc: "Can children and guardians meaningfully consent to and control the system?" },
                { title: "Fairness and inclusion", desc: "Does the system treat all children equitably regardless of background or ability?" },
                { title: "Transparency", desc: "Can the system explain its decisions in age-appropriate language?" },
                { title: "Human oversight", desc: "Do responsible adults retain meaningful control over the system?" },
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
                { num: 1, icon: Shield, title: "Define boundaries", desc: "Establish what the AI system should never do. Identify what matters most for child safety." },
                { num: 2, icon: Lightbulb, title: "Envision better design", desc: "What would a responsible, child-centred version of this system look like?" },
                { num: 3, icon: MessageCircle, title: "Gather perspectives", desc: "Consult children directly. What do they experience? Where do they feel safe or unsafe?" },
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
                  Turn audit findings into child-centred design improvements with our research and design service.
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
                  setShowLearn(!showLearn)
                  if (!showLearn) setTimeout(() => document.getElementById("learn-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                }}
                className={`rounded-xl p-5 border text-left transition-all duration-300 ${
                  showLearn ? "bg-secondary border-border shadow-sm" : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Framework Detail</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Rules, principles, and outcomes</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${showLearn ? "rotate-180" : ""}`} />
                </div>
              </button>

              <button
                onClick={() => {
                  setShowStory(!showStory)
                  if (!showStory) setTimeout(() => document.getElementById("story-section")?.scrollIntoView({ behavior: "smooth" }), 100)
                }}
                className={`rounded-xl p-5 border text-left transition-all duration-300 ${
                  showStory ? "bg-secondary border-border shadow-sm" : "bg-card border-border hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Case Study</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">A facilitated session with children</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${showStory ? "rotate-180" : ""}`} />
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

          {/* LEARN MORE (expandable) */}
          <AnimatePresence>
            {showLearn && (
              <motion.div
                id="learn-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-16 mb-20 pt-4">
                  <section>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-2/5 aspect-square relative rounded-xl overflow-hidden bg-muted border border-border">
                        <Image src="/images/how-to-use-rules-ideas.jpg" alt="Framework principles" fill className="object-cover" />
                      </div>
                      <div className="w-full md:w-3/5">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">{"Rules + Ideas = Responsible AI"}</h2>
                        <p className="text-base text-muted-foreground mb-6">Every audit examines two dimensions:</p>
                        <div className="space-y-4">
                          <div className="py-4 border-t border-border">
                            <p className="text-base">
                              <span className="font-semibold text-foreground">1. Boundaries</span> -- What should this system never do? What safeguards are non-negotiable for children?
                            </p>
                          </div>
                          <div className="py-4 border-t border-border">
                            <p className="text-base">
                              <span className="font-semibold text-foreground">2. Aspirations</span> -- What would a genuinely child-centred system look like? What should it enable?
                            </p>
                          </div>
                        </div>
                        <p className="mt-5 text-base text-muted-foreground">Together, these produce actionable governance recommendations.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="rounded-xl p-8 md:p-10 border border-border bg-card">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">Why AI Systems Need Governance</h2>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-4">The challenge</h3>
                          <p className="text-sm text-muted-foreground mb-4">AI systems increasingly make decisions that affect children. Without proper governance, they may:</p>
                          <ul className="space-y-3">
                            {["Treat children inequitably based on background or ability", "Make consequential decisions without transparency", "Create dependency without safeguarding mechanisms"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-4">What this audit produces</h3>
                          <p className="text-sm text-muted-foreground mb-4">When conducted with children, this audit reveals:</p>
                          <ul className="space-y-3">
                            {["Lived experience of the system from the child's perspective", "Gaps between intended design and actual impact", "Concrete recommendations for improving safety and fairness"].map((item, i) => (
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
                        { title: "Fairness assessment", desc: "Documented evidence of whether the system treats all children equitably", num: "1" },
                        { title: "Participatory evidence", desc: "Children's own perspectives recorded and analysed systematically", num: "2" },
                        { title: "Action plan", desc: "Prioritised list of changes to improve safety, fairness, and accountability", num: "3" },
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

          {/* CASE STUDY (expandable) */}
          <AnimatePresence>
            {showStory && (
              <motion.div
                id="story-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="space-y-16 mb-20 pt-4">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance mb-4 font-display">
                      Case Study: Children Evaluate a School Learning Platform
                    </h2>
                    <p className="text-base text-muted-foreground text-balance mb-8 leading-relaxed max-w-2xl">
                      A facilitated session where children assessed the AI system their school uses and identified what needed to change.
                    </p>
                  </section>

                  <section>
                    <div className="space-y-6">
                      {workshopSteps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 items-center rounded-xl p-4 border border-border bg-card">
                          <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden bg-muted">
                            <Image src={step.image} alt={step.title} fill className="object-cover" />
                          </div>
                          <div className="w-full md:w-1/2 p-2">
                            <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Step {i + 1}</div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">Participant Responses</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { quote: "The app gives me hard questions but gives my friend easy ones. That is not fair.", name: "Participant, age 7" },
                        { quote: "When I get stuck, there is nobody to help me. I just want to ask someone.", name: "Participant, age 6" },
                        { quote: "I want the computer to let me pick what I learn next, not just pick for me.", name: "Participant, age 8" },
                      ].map((item, i) => (
                        <div key={i} className="py-6 border-t border-border">
                          <p className="text-sm text-foreground mb-4 italic leading-relaxed">{`"${item.quote}"`}</p>
                          <p className="text-xs text-muted-foreground">-- {item.name}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">Trust Deficit Analysis</h2>
                    <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
                      Percentage of participants who identified each dimension as problematic.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {[
                        { principle: "Clarity", percent: 78 },
                        { principle: "Care", percent: 89 },
                        { principle: "Repair", percent: 92 },
                        { principle: "Fairness", percent: 84 },
                        { principle: "Control", percent: 95 },
                      ].map((item, i) => (
                        <div key={i} className="py-5 text-center border-t border-border">
                          <div className="text-3xl font-bold text-foreground mb-1">{item.percent}%</div>
                          <div className="text-sm text-muted-foreground">{item.principle}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="rounded-xl p-8 border border-border bg-card">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Finding</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Children consistently identified a disconnect between the {"system's"} design assumptions and their lived experience. The audit produced actionable recommendations
                        for improving transparency, fairness, and the availability of human support within the platform.
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
                      Child AI Trust Assessment
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                      Select an AI system and evaluate it across five trust dimensions. Your assessment generates a downloadable report.
                    </p>
                    <div className="mt-6 max-w-2xl border border-border rounded-xl p-5 bg-card text-left">
                      <p className="text-sm font-semibold text-foreground mb-3">Before you begin:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="font-semibold flex-shrink-0">1.</span>
                          <span><strong>Review the case study</strong> to understand the facilitation method.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold flex-shrink-0">2.</span>
                          <span><strong>Running a group session?</strong>{" "}
                            <a href="mailto:info@jennifersimonds.com?subject=Child AI Audit - Group Session" className="underline font-semibold text-primary hover:text-primary/80">
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
                              This assessment is most effective when conducted as a facilitated group session. Professional support ensures rigorous methodology and actionable outcomes.
                            </p>
                            <div className="border border-border rounded-lg p-4 mb-6 max-w-xl bg-secondary text-left">
                              <p className="text-xs font-medium text-foreground mb-2">Next steps:</p>
                              <ol className="space-y-1.5 text-xs text-muted-foreground list-decimal list-inside">
                                <li>Review the case study to understand the facilitation method.</li>
                                <li>Contact Jenny Simonds to arrange a facilitated session.</li>
                              </ol>
                            </div>
                            <a href="mailto:info@jennifersimonds.com?subject=Child AI Audit - Group Session Request">
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
