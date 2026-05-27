import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'reveal-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
