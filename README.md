# Porfolio — Capt Nahian (retd)

A modern 3D portfolio website built with React, Three.js, and Tailwind CSS.  
Live site: **https://zabulanakakil.github.io/Porfolio/**

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Three Fiber + Drei (3D background)
- Framer Motion (animations)
- Lucide React (icons)

## Edit content

All portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Update name, bio, skills, journey timeline, achievements, and contact links there. No other files need changing for content updates.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 (use `/Porfolio/` base path in production builds).

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo deploys automatically via GitHub Actions (`.github/workflows/static.yml`) on push to `main` or `master`.

1. Ensure GitHub Pages source is set to **GitHub Actions** in repo Settings → Pages.
2. Push to `main` — the workflow builds `dist/` and publishes to Pages.
3. Site URL: `https://<username>.github.io/Porfolio/` (note the repo spelling).

The Vite `base` path is set to `/Porfolio/` in `vite.config.ts` for project-site deployment.

## Features

- Light / dark mode with no flash on load
- Sticky desktop nav + mobile bottom tab bar
- Scroll-triggered 3D background with Google color accents
- Reduced-motion and mobile-optimized fallbacks
- Responsive layout with safe-area support on mobile

## License

Private portfolio — all rights reserved.
