import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, AlertTriangle, Eye, Brain, ShieldAlert } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>

        {/* Hero — full-bleed illustration with overlay, matching TrustAudit */}
        <section className="relative min-h-[520px] md:min-h-[580px] flex items-center">
          {/* Background illustration */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-illustration.jpg"
              alt=""
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-5xl py-24">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display leading-tight max-w-2xl mb-8">
              <span className="block text-white">Making Trust</span>
              <span className="block text-[#7EB4D8]">Verifiable in AI</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-10">
              {"Not all AI risk lives in the code. Some only becomes visible when real people use the system.\nWe work directly with people affected by AI to surface real-world risks and document them for audit and EU AI Act compliance."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity bg-primary text-primary-foreground"
              >
                Start an Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#risk-landscape"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-white bg-white text-foreground hover:bg-gray-100 transition-colors"
              >
                Review the Risk Landscape
              </a>
            </div>
          </div>
        </section>

        {/* Red banner bar — category strip */}
        <section className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-2 gap-6">
              <Link href="/child-audit" className="text-center hover:opacity-80 transition-opacity">
                <h3 className="font-semibold text-sm md:text-base">Children &amp; AI</h3>
                <p className="text-xs md:text-sm text-primary-foreground/75 mt-1">Ethical education &amp; safeguarding</p>
              </Link>
              <Link href="/older-adult-audit" className="text-center hover:opacity-80 transition-opacity">
                <h3 className="font-semibold text-sm md:text-base">Older Adults &amp; AI      </h3>
                <p className="text-xs md:text-sm text-primary-foreground/75 mt-1">Care &amp; financial safety</p>
              </Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl py-20">

          {/* The Risk Landscape */}
          <section id="risk-landscape" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display text-center">The Risk Landscape</h2>
            <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-center">
              Many AI systems are designed for confident digital users. In high-risk contexts involving children and older adults, this design bias can increase exposure to harm.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Cognitive Overload", desc: "AI interfaces that are complex or poorly structured can overwhelm users, leading to errors, anxiety, and disengagement from essential services.", icon: AlertTriangle },
                { title: "Opacity of Decisions", desc: "When AI influences education, care, or financial decisions without clear explanation, trust erodes and users may make harmful counter-decisions.", icon: Eye },
                { title: "Inappropriate Reliance", desc: "Over-reliance on AI systems can undermine autonomy, critical thinking, and independent decision-making.", icon: Brain },
                { title: "Privacy Vulnerabilities", desc: "Users may disclose sensitive information to systems without adequate safeguards, increasing exposure to misuse or exploitation.", icon: ShieldAlert },
              ].map((risk, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <risk.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{risk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TrustBridge design service CTA */}
          <section className="mb-24">
            <div className="rounded-xl border border-border bg-secondary/50 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Want to act on your audit findings?</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Use our design research service to turn audit insights into concrete product improvements, inclusive design patterns, and governance-ready documentation.
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

          {/* Audit Case Studies */}
          <section id="case-studies" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">Our Trust Audits</h2>
            <p className="text-base text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Deep dives into solving trust challenges for vulnerable user groups. Each audit includes assessment frameworks, facilitation guides, and evidence of impact.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Card: Child AI Audit */}
              <Link href="/child-audit" className="group block">
                <div className="rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src="/images/card-child-audit.jpg"
                      alt="Children engaging with technology in a classroom setting"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-display">AI Education for Children</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Evaluate AI systems used by or around children for safeguarding, developmental, and ethical risk. Includes facilitated session framework and trust assessment tools.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card: Older Adult AI Audit */}
              <Link href="/older-adult-audit" className="group block">
                <div className="rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src="/images/card-older-adult-audit.jpg"
                      alt="Older adult engaging with technology supported by a caregiver"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-display">AI Banking for Older Adults</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Assess AI systems used by or around older adults for dependency risk, cognitive vulnerability, autonomy, and wellbeing impact.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">Want to be a trust designer too?</h2>
              <p className="text-base text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                {"We're"} looking for partners who believe AI should work for everyone. Get in touch to explore how we can collaborate on building trustworthy AI experiences together.
              </p>
              <a
                href="mailto:info@jennifersimonds.com?subject=Trust Audit Collaboration"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Or email directly at{" "}
                <a href="mailto:info@jennifersimonds.com" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
                  info@jennifersimonds.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Already completed an audit?{" "}
                <a href="https://trustbridge.design/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                  Use TrustBridge Design to act on your findings.
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
