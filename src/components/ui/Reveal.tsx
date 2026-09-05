import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { motionTiming } from '../../lib/motion'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduced ? 0 : motionTiming.reveal,
        delay: reduced ? 0 : delay,
        ease: motionTiming.ease,
      }}
    >
      {children}
    </motion.div>
  )
}
