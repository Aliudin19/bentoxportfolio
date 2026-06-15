import type { MouseEventHandler } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import type { ProjectItem } from '../../types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
  href?: string
  external?: boolean
  ctaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ProjectCard({
  project,
  href,
  external = true,
  ctaLabel = 'View',
  onClick,
}: ProjectCardProps) {
  const targetHref = href ?? project.link
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={targetHref}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group relative block h-full overflow-hidden rounded-[1.15rem] border border-lavender-blush/10 bg-charcoal"
      aria-label={external ? `Open project ${project.title}` : `Open showcase page for ${project.title}`}
      onClick={onClick}
      initial="rest"
      whileHover={reduceMotion ? undefined : 'hover'}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.006 },
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.75 }}
    >
      <motion.img
        src={project.thumbnail}
        alt={project.title}
        className="h-full min-h-[260px] w-full object-cover sm:min-h-[320px]"
        loading="lazy"
        decoding="async"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.025 },
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent p-3.5 sm:p-4"
        variants={{
          rest: { y: 0 },
          hover: { y: -3 },
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-lavender-blush/75 sm:text-xs sm:tracking-[0.16em]">
          {project.year} · {project.tags.join(' / ')}
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-lavender-blush sm:text-xl">{project.title}</p>
        <p className="mt-1 text-sm text-lavender-blush/75">{project.description}</p>
      </motion.div>
      <motion.span
        className="absolute right-3 top-3 rounded-full border border-celadon/40 bg-charcoal/70 px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-lavender-blush backdrop-blur sm:right-4 sm:top-4 sm:text-[0.7rem]"
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: -2, y: 2 },
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {ctaLabel}
      </motion.span>
    </motion.a>
  )
}
