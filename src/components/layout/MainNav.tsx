import { useId, useState } from 'react'

import type { NavItem } from '../../types/portfolio'

interface MainNavProps {
  brand: string
  items: NavItem[]
}

export function MainNav({ brand, items }: MainNavProps) {
  const menuId = useId()
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-3 z-30 sm:static">
      <div className="relative z-20 rounded-2xl border border-lavender-blush/10 bg-charcoal/90 px-3 py-3 shadow-[0_14px_30px_rgba(23,27,31,0.35)] backdrop-blur sm:px-5 sm:py-4">
        <nav className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="font-display text-lg font-semibold uppercase tracking-wide text-lavender-blush sm:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            {brand}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-lavender-blush/10 bg-lavender-blush/[0.04] text-lavender-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80 sm:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-[0.35rem] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                  isMenuOpen ? 'translate-y-[0.28rem] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-[0.35rem] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                  isMenuOpen ? '-translate-y-[0.28rem] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
          <ul className="hidden items-center gap-2 sm:flex">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.12em] text-lavender-blush/75 transition hover:bg-celadon/15 hover:text-lavender-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id={menuId}
        className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-10 rounded-2xl border border-lavender-blush/10 bg-charcoal/95 px-6 py-6 shadow-[0_18px_40px_rgba(23,27,31,0.45)] backdrop-blur transition duration-300 ease-out sm:hidden ${
          isMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
          <ul
            className={`flex flex-col gap-5 transition duration-300 ease-out ${
              isMenuOpen ? 'translate-y-0 opacity-100 delay-75' : '-translate-y-1 opacity-0'
            }`}
          >
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block font-display text-3xl font-semibold uppercase leading-none tracking-tight text-lavender-blush transition hover:text-celadon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celadon/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </header>
  )
}
