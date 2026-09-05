# Alif’s portfolio

A React + TypeScript portfolio for full-stack work. An open, typographic introduction leads into project overviews, professional experience, technologies, and direct contact links.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

## Content

Edit `src/data/portfolio.ts` for profile information, email, experience, capabilities, and projects. Only use verified contributions and outcomes. Project links are optional; omit unavailable destinations. Screenshots can have a gallery with source, alt text, and caption.

Project URLs use `?page=projects&project=<slug>`. The project page without a slug shows the first project; unknown slugs display a project selection. No environment variables or contact service are required. Email, LinkedIn, and GitHub provide direct contact.

## Assets and motion

Original photographs and screenshots are preserved in `public/images`. Responsive WebP variants are used by the app. Project variants use `-800.webp` and `-1920.webp` naming; the latter preserves the original capture resolution. Keep readable screenshots and descriptive alternative text when updating images.

Animation timing is centralized in `src/lib/motion.ts`; CSS interaction transitions use the same 180ms duration. Motion respects reduced-motion preferences, and scrolling remains native. Screenshot enlargement uses a native modal dialog with keyboard support.

## Deployment

Build output is in `dist/` and can be served by a static host. Before publishing, replace the relative `og:image` URL in `index.html` with the deployed absolute URL and add `og:url` once the production domain is known. The local social preview is `public/images/social-preview.png`.

Technology icons are served locally from `public/icons/technologies`, sourced from Devicon v2.17.0 (MIT; license included in that directory). Go Fiber uses the Go language mark. The technology strip runs continuously, including on hover, and becomes a static list with reduced motion. GitHub and LinkedIn contact buttons retain visible names alongside their icons and brand colors.
