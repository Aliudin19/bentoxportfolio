import type { ElementType, ReactNode } from 'react'

import { cn } from '../../lib/cn'

interface SectionCardProps {
  as?: ElementType
  id?: string
  className?: string
  padded?: boolean
  children: ReactNode
}

export function SectionCard({
  as: Component = 'article',
  id,
  className,
  padded = true,
  children,
}: SectionCardProps) {
  return (
    <Component
      id={id}
      className={cn(
        'overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(160deg,#0b0e13_0%,#090b0f_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.45)]',
        padded && 'p-5 md:p-7',
        className,
      )}
    >
      {children}
    </Component>
  )
}
