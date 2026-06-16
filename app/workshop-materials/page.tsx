"use client"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Printer } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function WorkshopMaterials() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pb-20">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background print:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-24">Workshop Materials: AI Readiness Scan Toolkit</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to run a community audit. View on screen or print for your workshop.
              </p>

              <Card className="p-6 text-left bg-gradient-to-r from-cyan to-blue-500/10 border-cyan/30 mb-6 print:hidden">
                <h3 className="font-semibold mb-3 text-lg">Using the Audit Tool Prompts:</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The{" "}
                  <Link href="/audit-tool" className="text-primary hover:underline font-semibold">
                    Audit Tool
                  </Link>{" "}
                  generates customized workshop prompts based on your community's specific needs. These prompts are
                  designed to guide your workshop discussions and can be downloaded directly from the tool.
                </p>
                <p className="text-sm text-muted-foreground">
                  Use the generated prompts alongside these materials to create a tailored workshop experience that
                  addresses your community's unique concerns about AI technology.
                </p>
              </Card>

              <Card className="p-6 text-left bg-accent/10 border-accent/20 print:hidden">
                <h3 className="font-semibold mb-3">Printing Instructions:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best printed on cardstock paper for durability</li>
                  <li>• Cards are designed for standard A4/Letter size</li>
                  <li>• Print double-sided for front/back cards where indicated</li>
                  <li>• Materials available in: English (more languages coming)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Principle Cards */}
        <section className="py-12 md:py-16 print:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 print:text-2xl">Set A: Core Trust Principle Cards</h2>
              <p className="text-muted-foreground mb-8">
                Print these cards double-sided on cardstock. Cut along the borders.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-4">
                {[
                  {
                    title: "CLARITY",
                    icon: "🔍",
                    tagline: "I understand what this technology does",
                    color: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
                    questions: [
                      "Can you explain how this AI makes decisions?",
                      "Do you know what data it uses?",
                      "Are the rules clear?",
                      "What confuses you most?",
                      "Who can explain this to you?",
                    ],
                  },
                  {
                    title: "CARE",
                    icon: "❤️",
                    tagline: "This technology respects my wellbeing",
                    color: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
                    questions: [
                      "Does this technology consider your needs?",
                      "Does it protect you from harm?",
                      "Does it respect your time and energy?",
                      "Could it hurt you or others?",
                      "Do you feel cared for or exploited?",
                    ],
                  },
                  {
                    title: "REPAIR",
                    icon: "🔧",
                    tagline: "When things go wrong, I can fix them",
                    color: "bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800",
                    questions: [
                      "What happens when the AI makes a mistake?",
                      "Can you correct errors?",
                      "Is there human help available?",
                      "How long does fixing take?",
                      "Who is responsible?",
                    ],
                  },
                  {
                    title: "RECIPROCITY",
                    icon: "🤝",
                    tagline: "This is a fair exchange of value",
                    color: "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800",
                    questions: [
                      "What are you giving up?",
                      "What are you getting?",
                      "Is this exchange fair?",
                      "Who benefits most?",
                      "Could the terms be better?",
                    ],
                  },
                  {
                    title: "OVERSIGHT",
                    icon: "👁️",
                    tagline: "Humans remain in control",
                    color: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
                    questions: [
                      "Can humans override AI decisions?",
                      "Who has final say?",
                      "Are there limits on what AI can do?",
                      "How is it monitored?",
                      "Can it be turned off?",
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="space-y-4 break-inside-avoid">
                    {/* Front of card */}
                    <Card className={`p-8 ${card.color} text-center print:p-6`}>
                      <div className="text-5xl mb-4 print:text-4xl">{card.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 print:text-xl">{card.title}</h3>
                      <p className="text-sm italic print:text-xs">"{card.tagline}"</p>
                    </Card>

                    {/* Back of card */}
                    <Card className="p-6 print:p-4">
                      <h4 className="font-semibold mb-3 text-sm">Questions to explore:</h4>
                      <ul className="space-y-2 text-sm print:text-xs">
                        {card.questions.map((q, j) => (
                          <li key={j}>• {q}</li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scenario Cards */}
        <section className="py-12 md:py-16 border-t border-border print:py-8 print:break-before-page">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 print:text-2xl">Set B: Scenario Cards</h2>
              <p className="text-muted-foreground mb-8">
                Use these to focus discussions on specific technology contexts
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 print:grid-cols-2">
                {[
                  "Banking & Finance",
                  "Healthcare Decisions",
                  "Social Media",
                  "Education & Learning",
                  "Job Applications",
                  "Government Services",
                  "Shopping & Commerce",
                  "Transportation",
                  "Home Devices",
                  "Communication Tools",
                ].map((scenario, i) => (
                  <Card key={i} className="p-6 text-center print:p-4">
                    <h3 className="font-bold text-lg print:text-base">{scenario}</h3>
                    <p className="text-sm text-muted-foreground mt-2 print:text-xs">
                      Apply the 5 trust principles to this context
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="py-12 md:py-16 border-t border-border print:py-8 print:break-before-page">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 print:text-2xl">Set C: Action Cards</h2>
              <p className="text-muted-foreground mb-8">Workshop activities to move from problems to solutions</p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Map Your Experience", desc: "Draw your journey with this technology" },
                  { title: "Find Breaking Points", desc: "Where does trust fail?" },
                  { title: "Imagine Better", desc: "What would ideal look like?" },
                  { title: "Set Boundaries", desc: "What should be off-limits?" },
                  { title: "Design Solutions", desc: "How could we fix this?" },
                  { title: "Make Demands", desc: "What do we need from companies?" },
                  { title: "Create Governance", desc: "What rules are needed?" },
                  { title: "Build Alternatives", desc: "What else could work?" },
                ].map((card, i) => (
                  <Card key={i} className="p-6 print:p-4">
                    <h3 className="font-bold text-lg mb-2 print:text-base">{card.title}</h3>
                    <p className="text-muted-foreground print:text-sm">{card.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilitator Guide */}
        <section className="py-12 md:py-16 border-t border-border print:py-8 print:break-before-page">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 print:text-2xl">Facilitator Instructions</h2>

              <Card className="p-6 mb-8 bg-gradient-to-r from-pink/10 to-coral/10 border-pink/30 print:p-4">
                <h3 className="text-xl font-bold mb-4 print:text-lg">Workshop Facilitation & Training</h3>
                <p className="text-sm mb-3">
                  These workshops can be facilitated by <strong>Jennifer Simonds-Spellmann</strong>, who developed this
                  methodology and is available to:
                </p>
                <ul className="space-y-2 text-sm ml-4">
                  <li>• Lead workshops directly with your community</li>
                  <li>• Train your team to facilitate workshops independently</li>
                  <li>• Provide ongoing support and guidance</li>
                  <li>• Help adapt materials for your specific context</li>
                </ul>
                <p className="text-sm mt-4">
                  Contact:{" "}
                  <a href="mailto:audit@keepthefuturehuman.org" className="text-primary hover:underline font-semibold">
                    audit@keepthefuturehuman.org
                  </a>
                </p>
              </Card>

              <div className="space-y-8">
                <Card className="p-6 print:p-4">
                  <h3 className="text-xl font-bold mb-4 print:text-lg">Before the Workshop</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Print trust cards on cardstock</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Arrange room for small groups (4-6 people per table)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Prepare flip charts or whiteboards</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Have sticky notes and markers</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Test any tech you'll use</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Prepare sign-in sheet</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="print:hidden" />
                      <span>Have refreshments ready</span>
                    </label>
                  </div>
                </Card>

                <Card className="p-6 print:p-4">
                  <h3 className="text-xl font-bold mb-4 print:text-lg">Workshop Agenda (2.5 hours)</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">0:00-0:15</span>
                      <span>Welcome & Introductions</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">0:15-0:30</span>
                      <span>What is Trust? (Group Discussion)</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">0:30-1:00</span>
                      <span>Trust Card Activity (Small Groups)</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">1:00-1:15</span>
                      <span>Break</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">1:15-2:00</span>
                      <span>Mapping Problems & Solutions</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">2:00-2:20</span>
                      <span>Share Back & Prioritize</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-mono font-semibold w-24">2:20-2:30</span>
                      <span>Next Steps & Close</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 print:p-4">
                  <h3 className="text-xl font-bold mb-4 print:text-lg">Facilitation Tips</h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Opening the Workshop:</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Start with personal stories</li>
                        <li>• Make it safe to share failures</li>
                        <li>• Emphasize: You are the expert on your experience</li>
                        <li>• No tech knowledge required</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Using the Trust Cards:</h4>
                      <ol className="space-y-1 ml-4">
                        <li>1. Give each group one principle card</li>
                        <li>2. Have them discuss the questions</li>
                        <li>3. Share real examples from their lives</li>
                        <li>4. Write insights on sticky notes</li>
                        <li>5. Place notes on a trust map</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Managing Discussions:</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Keep focus on lived experience, not technical details</li>
                        <li>• Redirect from venting to constructive insights</li>
                        <li>• Ensure everyone speaks</li>
                        <li>• Document everything - no insight is too small</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Common Challenges & Solutions:</h4>
                      <ul className="space-y-2 ml-4">
                        <li>
                          • <strong>"I don't understand technology"</strong> → "That's exactly why we need your
                          perspective"
                        </li>
                        <li>
                          • <strong>Dominant voices</strong> → Use round-robin sharing
                        </li>
                        <li>
                          • <strong>Getting too technical</strong> → Return to "How does this affect you daily?"
                        </li>
                        <li>
                          • <strong>Feeling powerless</strong> → Focus on collective action and real examples of change
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Data Collection Templates */}
        <section className="py-12 md:py-16 border-t border-border print:py-8 print:break-before-page">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 print:text-2xl">Data Collection Templates</h2>

              <div className="space-y-6">
                <Card className="p-6 font-mono text-sm print:p-4 print:text-xs">
                  <h3 className="font-bold mb-4 font-sans">Template A: Problem Mapping Sheet</h3>
                  <div className="space-y-3 border border-border p-4 rounded">
                    <div>TECHNOLOGY: _______________________________</div>
                    <div>DATE: __________ LOCATION: __________</div>
                    <div className="pt-2">WHERE TRUST BREAKS:</div>
                    <div className="ml-4 space-y-1">
                      <div>☐ Clarity</div>
                      <div>☐ Care</div>
                      <div>☐ Repair</div>
                      <div>☐ Reciprocity</div>
                      <div>☐ Oversight</div>
                    </div>
                    <div className="pt-2">SPECIFIC PROBLEMS:</div>
                    <div className="ml-4 space-y-1">
                      <div>1. _________________________________</div>
                      <div>2. _________________________________</div>
                      <div>3. _________________________________</div>
                    </div>
                    <div className="pt-2">WHO IS MOST AFFECTED:</div>
                    <div>_______________________________________</div>
                    <div className="pt-2">CONSEQUENCES:</div>
                    <div>_______________________________________</div>
                  </div>
                </Card>

                <Card className="p-6 font-mono text-sm print:p-4 print:text-xs">
                  <h3 className="font-bold mb-4 font-sans">Template B: Solution Design Sheet</h3>
                  <div className="space-y-3 border border-border p-4 rounded">
                    <div className="font-bold">SOLUTION BRAINSTORM</div>
                    <div className="pt-2">GOVERNANCE NEEDED:</div>
                    <div className="ml-4 space-y-1">
                      <div>• _________________________________</div>
                      <div>• _________________________________</div>
                    </div>
                    <div className="pt-2">DESIGN CHANGES:</div>
                    <div className="ml-4 space-y-1">
                      <div>• _________________________________</div>
                      <div>• _________________________________</div>
                    </div>
                    <div className="pt-2">NEW TOOLS/ALTERNATIVES:</div>
                    <div className="ml-4 space-y-1">
                      <div>• _________________________________</div>
                      <div>• _________________________________</div>
                    </div>
                    <div className="pt-2">KEY DEMAND (One Sentence):</div>
                    <div>_______________________________________</div>
                    <div>_______________________________________</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-12 md:py-16 border-t border-border print:py-8 print:break-before-page">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center print:text-2xl">Quick Start Guide</h2>
              <p className="text-center text-muted-foreground mb-8">Running Your First Audit in 5 Steps</p>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Gather", desc: "10-25 people affected by a technology" },
                  { step: "2", title: "Explore", desc: "The 5 trust principles using cards" },
                  { step: "3", title: "Map", desc: "Where trust breaks down" },
                  { step: "4", title: "Design", desc: "Solutions together" },
                  { step: "5", title: "Share", desc: "Results with us at audit@keepthefuturehuman.org" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0 print:h-10 print:w-10 print:text-lg">
                      {item.step}
                    </div>
                    <div>
                      <span className="font-bold">{item.title}:</span> {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-accent/10 border-accent/20 print:p-4">
                <h3 className="font-bold mb-3">What You'll Create:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Community-defined boundaries for technology</li>
                  <li>• Governance recommendations</li>
                  <li>• Innovation opportunities</li>
                  <li>• Real change</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer CTAs */}
        <section className="py-12 border-t border-border print:hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Button onClick={handlePrint} size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Printer className="mr-2 h-5 w-5" />
                Print This Page
              </Button>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:audit@keepthefuturehuman.org?subject=Workshop Results">
                  <Button>Share Your Workshop Results</Button>
                </a>
                <a href="mailto:audit@keepthefuturehuman.org?subject=Request Support">
                  <Button variant="outline">Request Support</Button>
                </a>
              </div>

              <Link href="/" className="block">
                <Button variant="ghost">Back to Main Site</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}
