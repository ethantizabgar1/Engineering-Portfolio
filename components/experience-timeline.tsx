import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="/ 03"
          title="Education & Experience"
          subtitle="A track record of building, testing, and shipping engineering work."
        />

        <ol className="mt-14 space-y-0">
          {timeline.map((item, i) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap
            const isLast = i === timeline.length - 1
            return (
              <li key={item.title} className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                {/* rail */}
                <div className="flex flex-col items-center">
                  <span className="flex size-10 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-border" />}
                </div>

                <div className={isLast ? 'pb-0' : 'pb-12'}>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {item.period}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground">{item.org}</p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 leading-relaxed text-foreground/90">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
