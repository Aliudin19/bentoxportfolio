import type { ExperienceItem } from '../../types/portfolio'
export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="experience-list">
      {items.map((item) => (
        <article
          className="experience-row"
          key={`${item.company}-${item.role}`}
        >
          <p className="experience-period">{item.period}</p>
          <div>
            <h3>{item.role}</h3>
            <p className="company">
              {item.company} <span>· {item.location}</span>
            </p>
            <p>{item.highlights}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
