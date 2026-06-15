import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type RevealVariant = 'soft' | 'hero' | 'media' | 'card'
type RevealDirection = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  direction?: RevealDirection
}

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 38 },
  left: { x: -48, y: 16 },
  right: { x: 48, y: 16 },
  none: { x: 0, y: 0 },
}

const variantMotion: Record<RevealVariant, { blur: number; scale: number; duration: number }> = {
  soft: { blur: 8, scale: 0.985, duration: 0.82 },
  hero: { blur: 10, scale: 0.965, duration: 0.95 },
  media: { blur: 6, scale: 0.985, duration: 0.88 },
  card: { blur: 8, scale: 0.975, duration: 0.86 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'card',
  direction = 'up',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offset = directionOffset[direction]
  const motionConfig = variantMotion[variant]
  const motionDelay = Math.min(delay, 340) / 1000

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn('min-w-0', className)}
      initial={{
        opacity: 0.08,
        x: offset.x,
        y: offset.y,
        scale: direction === 'none' ? 1 : motionConfig.scale,
        filter: `blur(${motionConfig.blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
      transition={{
        delay: motionDelay,
        duration: motionConfig.duration,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
