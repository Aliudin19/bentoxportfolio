import type { ProjectItem } from '../../types/portfolio'
import type { MouseEventHandler } from 'react'

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

  return (
    <a
      href={targetHref}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group relative block h-full overflow-hidden rounded-[1.15rem] border border-white/10 bg-black"
      aria-label={external ? `Open project ${project.title}` : `Open showcase page for ${project.title}`}
      onClick={onClick}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[320px]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3.5 sm:p-4">
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-zinc-300 sm:text-xs sm:tracking-[0.16em]">
          {project.year} · {project.tags.join(' / ')}
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">{project.title}</p>
        <p className="mt-1 text-sm text-zinc-300">{project.description}</p>
      </div>
      <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-zinc-200 sm:right-4 sm:top-4 sm:text-[0.7rem]">
        {ctaLabel}
      </span>
    </a>
  )
}
