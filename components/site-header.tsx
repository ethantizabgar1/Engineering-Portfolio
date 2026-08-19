'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-sm border border-primary/50 font-mono text-xs font-bold text-primary">
            ET
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          download
          className="inline-flex h-8 items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
