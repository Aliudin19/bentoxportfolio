import type { SocialLink } from '../../types/portfolio'

import { cn } from '../../lib/cn'

const platformLabels: Record<SocialLink['platform'], string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  x: 'X',
}

function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  const className = 'h-5 w-5'

  if (platform === 'github') {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.65 0 8.16c0 3.61 2.29 6.67 5.47 7.75.4.08.55-.18.55-.39 0-.19-.01-.83-.01-1.51-2.01.38-2.53-.51-2.69-.97-.09-.24-.49-.97-.83-1.16-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.54.28-.88.5-1.08-1.78-.21-3.64-.92-3.64-4.08 0-.9.31-1.63.82-2.21-.08-.21-.36-1.05.08-2.2 0 0 .67-.22 2.2.84.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.15.16 1.99.08 2.2.51.58.82 1.3.82 2.21 0 3.17-1.87 3.87-3.65 4.08.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.47.55.39A8.2 8.2 0 0 0 16 8.16C16 3.65 12.42 0 8 0Z" />
      </svg>
    )
  }

  if (platform === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.47a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.45 19h2.98V9.64H5.45V19Zm4.85 0h2.86v-4.94c0-1.3.25-2.56 1.86-2.56 1.59 0 1.61 1.48 1.61 2.65V19h2.98v-5.45c0-2.68-.58-4.74-3.71-4.74-1.51 0-2.52.83-2.94 1.62h-.04v-1.38H10.3V19Z" />
      </svg>
    )
  }

  if (platform === 'instagram') {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4 4h4.8l4 5.6L17.5 4H20l-6 7 6.3 9H15l-4.5-6.2L5 20H2.3l6.7-7.8L4 4Z" />
    </svg>
  )
}

export function SocialButtons({ items }: { items: SocialLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {items.map((item) => (
        <a
          key={item.platform}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'social-btn',
            item.platform === 'github' && 'social-btn--github',
            item.platform === 'linkedin' && 'social-btn--linkedin',
            item.platform === 'instagram' && 'social-btn--instagram',
            item.platform === 'x' && 'social-btn--x',
          )}
          aria-label={platformLabels[item.platform]}
          title={platformLabels[item.platform]}
        >
          <SocialIcon platform={item.platform} />
        </a>
      ))}
    </div>
  )
}
