import { motion, useReducedMotion } from 'motion/react'
import { motionTiming } from '../../lib/motion'

export function TitleCard({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  const reduced = useReducedMotion()
  return (
    <>
      <p className="eyebrow">{subtitle}</p>
      <h1
        className="hero-name"
        tabIndex={-1}
        data-page-heading
        aria-label={title}
      >
        {title.split(' ').map((word, index) => (
          <span
            className="name-mask"
            key={`${word}-${index}`}
            aria-hidden="true"
          >
            <motion.span
              className="name-line"
              initial={reduced ? false : { y: '110%', rotate: 4 }}
              animate={{ y: '0%', rotate: 0 }}
              transition={{
                duration: reduced ? 0 : motionTiming.hero,
                delay: reduced ? 0 : 0.12 + index * 0.14,
                ease: motionTiming.ease,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
    </>
  )
}
