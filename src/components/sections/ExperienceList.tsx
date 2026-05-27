import type { ExperienceItem } from '../../types/portfolio'

interface ExperienceListProps {
  items: ExperienceItem[]
}

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <section className="flex h-full min-h-0 flex-col gap-4 sm:gap-5">
      <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
        Experience
      </h2>
      <div className="experience-scroll min-h-0 space-y-4 overflow-y-auto pr-1 sm:space-y-5">
        {items.map((item) => (
          <article key={`${item.company}-${item.role}`} className="border-t border-white/10 pt-4">
            <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{item.role}</h3>
            <p className="mt-1 text-sm italic text-zinc-300">
              {item.company} · {item.location}
            </p>
            <p className="text-sm text-zinc-400">{item.period}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.highlights}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
