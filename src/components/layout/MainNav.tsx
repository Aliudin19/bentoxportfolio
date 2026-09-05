import { useEffect, useRef, useState } from 'react'
import type { NavItem } from '../../types/portfolio'
export function MainNav({
  items,
  homeHref = '#top',
  onHome,
}: {
  items: NavItem[]
  homeHref?: string
  onHome?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        button.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href={homeHref} onClick={onHome}>
          alif<span aria-hidden="true">.</span>
        </a>
        <div className="desktop-nav">
          {items.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="menu-button button"
          ref={button}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <div id="mobile-navigation" className="mobile-nav" hidden={!open}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setOpen(false)
                button.current?.focus()
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
