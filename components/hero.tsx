import { ArrowDown, Download, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-blueprint">
      {/* corner registration marks for a technical drawing feel */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-24 hidden size-3 border-l border-t border-primary/40 md:block" />
        <div className="absolute right-6 top-24 hidden size-3 border-r border-t border-primary/40 md:block" />
        <div className="absolute bottom-10 left-6 hidden size-3 border-b border-l border-primary/40 md:block" />
        <div className="absolute bottom-10 right-6 hidden size-3 border-b border-r border-primary/40 md:block" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <h1 className="max-w-4xl text-pretty text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {profile.name}
          <span className="mt-2 block text-muted-foreground">
            {profile.role}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {profile.bio}
        </p>

        {/* focus areas */}
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.focus.map((f, i) => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground"
            >
              <span className="text-primary">{String(i + 1).padStart(2, '0')}</span>
              {f}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          {profile.location}
        </div>
      </div>
    </section>
  )
}
