import type { TestimonialItem } from '../../types/portfolio'

interface TestimonialRowProps {
  items: TestimonialItem[]
}

export function TestimonialRow({ items }: TestimonialRowProps) {
  return (
    <section>
      <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
        Testimonials
      </h2>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:mt-5">
        {items.map((item) => (
          <article
            key={`${item.name}-${item.company}`}
            className="min-w-[250px] flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:min-w-[270px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium text-white">{item.name}</h3>
                <p className="text-xs text-zinc-400">
                  {item.role} at {item.company}
                </p>
              </div>
              <span className="rounded-md border border-white/10 px-2 py-1 text-xs tracking-[0.15em] text-zinc-300">
                {item.logo}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">"{item.quote}"</p>
          </article>
        ))}
      </div>
    </section>
  )
}
