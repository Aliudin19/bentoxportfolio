import { motion, useReducedMotion } from 'motion/react'

import { cn } from '../../lib/cn'

interface TitleCardProps {
  title: string
  subtitle?: string
  className?: string
}

export function TitleCard({ title, subtitle, className }: TitleCardProps) {
  const words = title.split(' ')
  const reduceMotion = useReducedMotion()

  return (
    <div className={cn('flex h-full flex-col justify-between gap-4', className)}>
      {subtitle ? (
        <motion.p
          className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-celadon"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle}
        </motion.p>
      ) : null}
      <motion.h1
        className="max-w-full font-display text-[clamp(2.45rem,11vw,3.3rem)] font-semibold uppercase leading-[0.9] text-lavender-blush sm:text-[clamp(3rem,5.2vw,3.85rem)] sm:leading-[0.94] xl:text-[3.75rem]"
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.34,
              staggerChildren: 0.16,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="block max-w-full whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: 34, scale: 0.96, filter: 'blur(8px)' },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? <span className="sr-only"> </span> : null}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
