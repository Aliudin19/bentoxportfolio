import type { MouseEventHandler } from 'react'
import { responsiveImage } from '../../lib/images'
import type { ProjectItem } from '../../types/portfolio'

export function ProjectCard({
  project,
  href,
  onClick,
}: {
  project: ProjectItem
  href: string
  onClick: MouseEventHandler<HTMLAnchorElement>
}) {
  return (
    <a className="project-card" href={href} onClick={onClick}>
      <div className="project-image">
        <img
          src={project.thumbnail}
          {...responsiveImage(project.thumbnail)}
          sizes="(min-width: 768px) 540px, calc(100vw - 40px)"
          alt={`${project.title} interface`}
          loading="lazy"
          decoding="async"
        />
        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-role">{project.role}</p>
      <span className="text-link">
        Read project overview <span aria-hidden="true">↗</span>
      </span>
    </a>
  )
}
