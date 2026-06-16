"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, BookOpen } from "lucide-react"

export default function AboutAguirrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">Where This Idea Came From</h1>
            <p className="text-3xl md:text-4xl font-bold text-muted-foreground">The writing that started it all</p>
          </motion.div>

          {/* Main Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Essay Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                A scientist called <span className="font-semibold text-primary">Anthony Aguirre</span> wrote an
                essay called{" "}
                <span className="font-semibold">"Keep the Future Human"</span>. He said AI should help people, not replace them. It should have clear limits so humans stay in control.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                We took his ideas and turned them into something anyone can use: simple tools and workshops for communities.
              </p>
            </div>

            {/* Key Concepts */}
            <div className="bg-white/70 border border-cyan-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display">The Big Ideas</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "AI should be a helper, not a boss",
                    description:
                      "There is a big difference between AI that helps you do things better, and AI that tries to do everything for you. The helpful kind is what we want.",
                  },
                  {
                    title: "Keep AI inside the fence",
                    description:
                      "AI needs clear rules and limits. People should always be able to say 'stop' and stay in control.",
                  },
                  {
                    title: "Fair for everyone",
                    description:
                      "AI should not let one big company win everything. It should help lots of different people and groups do well.",
                  },
                  {
                    title: "People come first",
                    description:
                      "Technology must respect people. It should make your life better, not take away your choices.",
                  },
                ].map((concept, index) => (
                  <div key={concept.title} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{concept.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground">{concept.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* From Theory to Practice */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-display">From Ideas to Action</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                Aguirre wrote about what a good future could look like. We built the tools to help you make it happen. His big ideas become real through workshops, cards, and conversations that anyone can use.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                  <div className="font-semibold text-cyan-700 mb-2">What Aguirre said</div>
                  <div className="text-sm text-muted-foreground">AI should have limits and people should be in charge</div>
                </div>
                <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <div className="font-semibold text-pink-700 mb-2">What we built</div>
                  <div className="text-sm text-muted-foreground">Simple tools that help communities check if AI is safe</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <a
                href="https://keepthefuturehuman.ai/contest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="gap-2">
                  Read the Original Essay
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Go to keepthefuturehuman.ai/contest to read the full essay by Anthony Aguirre
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
