import { Mail, Phone, Download, FileText, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function ContactSection() {
  const contacts = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'in/ethan-tizabgar', href: profile.linkedin },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
  ]

  return (
    <section id="contact" className="scroll-mt-16 bg-blueprint">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="/ 04"
          title="Get In Touch"
          subtitle="Open to internship and full-time mechanical engineering roles. Let's build something."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact links */}
          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="block truncate font-medium text-foreground">{c.value}</span>
                </span>
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>

          {/* Resume PDF viewer */}
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <FileText className="size-4 text-primary" />
                resume.pdf
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-8 items-center gap-2 rounded-sm bg-primary px-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-3.5" />
                Download
              </a>
            </div>
            <object
              data="/resume.pdf#toolbar=0&view=FitH"
              type="application/pdf"
              className="h-[440px] w-full bg-muted"
              aria-label="Resume preview"
            >
              <div className="flex h-[440px] flex-col items-center justify-center gap-3 p-6 text-center">
                <FileText className="size-8 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Your browser can&apos;t display the embedded PDF.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex h-9 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground"
                >
                  <Download className="size-4" />
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  )
}
