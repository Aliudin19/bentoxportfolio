import type { ElementType, ReactNode } from 'react'

import { cn } from '../../lib/cn'

type SectionCardTone = 'charcoal' | 'sage' | 'mutedTeal' | 'celadon' | 'lavender'

interface SectionCardProps {
  as?: ElementType
  id?: string
  className?: string
  padded?: boolean
  tone?: SectionCardTone
  children: ReactNode
}

const toneClasses: Record<SectionCardTone, string> = {
  charcoal: 'border-lavender-blush/10 bg-charcoal text-lavender-blush shadow-[0_18px_38px_rgba(23,27,31,0.28)]',
  sage: 'border-sage/35 bg-sage text-lavender-blush shadow-[0_18px_38px_rgba(23,27,31,0.2)]',
  mutedTeal: 'border-muted-teal/35 bg-muted-teal text-lavender-blush shadow-[0_18px_38px_rgba(23,27,31,0.2)]',
  celadon: 'border-celadon/35 bg-celadon text-charcoal shadow-[0_18px_38px_rgba(23,27,31,0.18)]',
  lavender: 'border-charcoal/10 bg-lavender-blush text-charcoal shadow-[0_18px_38px_rgba(23,27,31,0.16)]',
}

export function SectionCard({
  as: Component = 'article',
  id,
  className,
  padded = true,
  tone = 'charcoal',
  children,
}: SectionCardProps) {
  return (
    <Component
      id={id}
      className={cn(
        'overflow-hidden rounded-[1.35rem] border',
        toneClasses[tone],
        padded && 'p-5 md:p-7',
        className,
      )}
    >
      {children}
    </Component>
  )
}
