import { cn } from '../../lib/cn'

interface InfoCardProps {
  heading: string
  body: string
  className?: string
}

export function InfoCard({ heading, body, className }: InfoCardProps) {
  return (
    <div className={cn('flex h-full flex-col gap-3', className)}>
      <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
        {heading}
      </h2>
      <p className="max-w-prose text-sm leading-relaxed text-zinc-300">{body}</p>
    </div>
  )
}
