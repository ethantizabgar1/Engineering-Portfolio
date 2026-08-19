export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{index}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  )
}
