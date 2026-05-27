# Alif Bento Portfolio

Bento-style personal portfolio for showcasing selected projects, professional experience, expertise, tools, and contact information.

## Overview

This portfolio is built as a responsive single-page React app with a lightweight in-app showcase view. The homepage presents a compact bento layout, while the project showcase page provides a focused detail view and mobile-friendly project selector.

## Features

- Responsive bento layout for desktop and mobile
- Featured project cards with showcase navigation
- Project detail/showcase view using URL query params
- Mobile project selector for quick project switching
- Animated reveal effects on scroll
- Toolbox marquee with icon-only tool tiles
- Contact form prepared for Formspree integration
- Social links and email CTA

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

The contact form is prepared for Formspree. Create a `.env` file based on `.env.example`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If the endpoint is not configured, the form will show an error when submitted.

## Content Management

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update this file to change:

- Profile information
- Experience items
- Expertise items
- Project showcase data
- Social links

Project images are stored in:

```text
public/images/
```

## Project Links

The showcase detail button is currently disabled and shown as `Visit Project Soon`. Enable it again after live project or repository links are ready.

## Deployment

This app can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider that supports Vite builds.

Production build output is generated in:

```text
dist/
```

The `dist/` directory is ignored by Git because it can be rebuilt from source.

## Notes

- Keep `.env` private and do not commit it.
- Use `.env.example` to document required environment variables.
- Replace placeholder project links before enabling external project buttons.
