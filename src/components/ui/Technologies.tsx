import type { CSSProperties } from 'react'
import { technologies } from '../../data/portfolio'

export function Technologies() {
  return (
    <div className="technology-showcase">
      <div className="technology-controls">
        <p>Technologies I work with</p>
      </div>
      <div className="technology-marquee">
        <div className="technology-track">
          {[0, 1].map((copy) => (
            <ul
              className="technology-group"
              key={copy}
              aria-label={copy === 0 ? 'Technologies used' : undefined}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {technologies.map((tool) => (
                <li
                  className="technology-tile"
                  key={tool.icon}
                  style={{ '--tool-color': tool.color } as CSSProperties}
                >
                  <img
                    src={`/icons/technologies/${tool.icon}.svg`}
                    alt=""
                    width={30}
                    height={30}
                    decoding="async"
                  />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
