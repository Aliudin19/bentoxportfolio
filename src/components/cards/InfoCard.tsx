import { cn } from '../../lib/cn'

interface InfoCardProps {
  heading: string
  body: string
  className?: string
  tone?: 'dark' | 'light'
}

export function InfoCard({ heading, body, className, tone = 'dark' }: InfoCardProps) {
  const isLight = tone === 'light'

  return (
    <div className={cn('flex h-full flex-col gap-3', className)}>
      <h2
        className={cn(
          'font-display text-2xl font-semibold uppercase tracking-tight',
          isLight ? 'text-charcoal' : 'text-lavender-blush',
        )}
      >
        {heading}
      </h2>
      <p className={cn('max-w-prose text-sm leading-relaxed', isLight ? 'text-charcoal/80' : 'text-lavender-blush/75')}>
        {body}
      </p>
    </div>
  )
}
