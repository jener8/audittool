import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-semibold text-foreground font-display text-lg mb-3">TrustAudit</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Human-centred AI trust design for vulnerable populations. Part of the TrustAudit framework.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-3">Audits</p>
            <div className="flex flex-col gap-2">
              <Link href="/child-audit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Child AI Audit
              </Link>
              <Link href="/older-adult-audit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Older Adult AI Audit
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-3">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@jennifersimonds.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@jennifersimonds.com
              </a>
              <a
                href="https://trustbridge.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                trustbridge.design
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            A TrustAudit project by Jenny Simonds. For communities, policymakers, and practitioners committed to accountable AI.
          </p>
        </div>

      </div>
    </footer>
  )
}
