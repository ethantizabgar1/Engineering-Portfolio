import { Box, Cpu, Wrench, TerminalSquare } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const icons = [Box, Cpu, Wrench, TerminalSquare]

export function TechnicalSkills() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border bg-blueprint">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="/ 02"
          title="Technical Skills"
          subtitle="Tools and methods across the full mechanical design workflow."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={group.title} className="bg-card p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-mono text-sm uppercase tracking-widest">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-border bg-background px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
