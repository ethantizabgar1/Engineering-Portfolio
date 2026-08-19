import Image from 'next/image'
import { projects, type Project } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

function RichProject({ p, i }: { p: Project; i: number }) {
  return (
    <article className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
      {/* Cover render */}
      <div className={i % 2 === 1 ? 'md:order-2' : ''}>
        <div className="group relative overflow-hidden rounded-md border border-border bg-card">
          <div className="absolute left-3 top-3 z-10 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
            Concept Render
          </div>
          <Image
            src={p.image || '/placeholder.svg'}
            alt={`Concept render of ${p.title}`}
            width={800}
            height={640}
            className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Case study */}
      <div className={i % 2 === 1 ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="text-2xl font-bold tabular-nums">{p.index}</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-muted-foreground">{p.category}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>

        {p.status ? (
          <div className="mt-3 rounded-sm border border-amber-500/30 bg-amber-500/10 px-3 py-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
              {p.status.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">{p.status.detail}</p>
          </div>
        ) : null}

        <div className="mt-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Problem
          </p>
          <p className="mt-1.5 leading-relaxed text-foreground/90">{p.problem}</p>
        </div>

        {/* engineering analysis */}
        <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
          {p.analysis.map((a) => (
            <div key={a.label} className="bg-card px-3 py-4 text-center">
              <p className="font-mono text-base font-bold text-primary md:text-lg">{a.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {a.label}
              </p>
            </div>
          ))}
        </div>

        {p.overview ? (
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Overview
            </p>
            <p className="mt-1.5 leading-relaxed text-foreground/90">{p.overview}</p>
          </div>
        ) : null}

        {p.sections?.length ? (
          <div className="mt-6 flex flex-col gap-5">
            {p.sections.map((s) => (
              <div key={s.heading}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.heading}
                </p>
                <p className="mt-1.5 leading-relaxed text-foreground/90">{s.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Prototype
            </p>
            <p className="mt-1.5 leading-relaxed text-foreground/90">{p.prototype}</p>
          </div>
        )}

        {p.highlights?.length ? (
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Technical Work
            </p>
            <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {p.challenges ? (
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Challenges &amp; Problem Solving
            </p>
            <p className="mt-1.5 leading-relaxed text-foreground/90">{p.challenges}</p>
          </div>
        ) : null}

        {p.lessons ? (
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              What I Learned
            </p>
            <p className="mt-1.5 leading-relaxed text-foreground/90">{p.lessons}</p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <span
              key={t}
              className="rounded-sm bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery — full width */}
      {p.gallery?.length ? (
        <div className="md:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Gallery
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {p.gallery.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded-md border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  )
}

function StandardProject({ p, i }: { p: Project; i: number }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      {/* CAD render */}
      <div className={i % 2 === 1 ? 'md:order-2' : ''}>
        <div className="group relative overflow-hidden rounded-md border border-border bg-card">
          <div className="absolute left-3 top-3 z-10 rounded-sm bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
            CAD Render
          </div>
          <Image
            src={p.image || '/placeholder.svg'}
            alt={`CAD render of ${p.title}`}
            width={800}
            height={640}
            className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Case study */}
      <div className={i % 2 === 1 ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="text-2xl font-bold tabular-nums">{p.index}</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-muted-foreground">{p.category}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>

        <div className="mt-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Problem
          </p>
          <p className="mt-1.5 leading-relaxed text-foreground/90">{p.problem}</p>
        </div>

        {/* engineering analysis */}
        <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
          {p.analysis.map((a) => (
            <div key={a.label} className="bg-card px-3 py-4 text-center">
              <p className="font-mono text-lg font-bold text-primary md:text-xl">{a.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {a.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Prototype
          </p>
          <p className="mt-1.5 leading-relaxed text-foreground/90">{p.prototype}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <span
              key={t}
              className="rounded-sm bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="/ 01" title="Featured Projects" subtitle="Selected case studies from concept to working prototype." />

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) =>
            p.sections || p.gallery ? (
              <RichProject key={p.id} p={p} i={i} />
            ) : (
              <StandardProject key={p.id} p={p} i={i} />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
