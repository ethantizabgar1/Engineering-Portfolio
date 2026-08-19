import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 md:flex-row md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Designed &amp; built with precision
        </p>
      </div>
    </footer>
  )
}
