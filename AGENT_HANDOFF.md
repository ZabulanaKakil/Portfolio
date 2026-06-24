# Agent handoff — Porfolio project

> **Purpose:** Quick context for a new Cursor agent. Read this file first, then check git log for anything after the last entry below.
>
> **Maintenance:** After each meaningful session, append a dated entry under [Session log](#session-log) and update [Current state](#current-state).

---

## Project at a glance

| Item | Value |
|------|--------|
| **Owner / subject** | Tanvir Nahian Swapnil (Former Army Officer) |
| **GitHub repo** | [ZabulanaKakil/Porfolio](https://github.com/ZabulanaKakil/Porfolio) |
| **Live site** | https://zabulanakakil.github.io/Porfolio/ |
| **Old site (reference)** | https://tanvirnahian.gt.tc/?i=1 |
| **CV PDF** | https://tanvirnahian.gt.tc/mycv.pdf |
| **Local path** | `e:\Projects\my portfolio` |
| **Deploy** | GitHub Actions → GitHub Pages on push to `main` (`.github/workflows/static.yml`) |
| **Vite base path** | `/Porfolio/` (repo name spelling — intentional) |

---

## Current state

**Last updated:** 2026-06-24  
**Last commit:** `277d4e1` — Replace Three.js background with CSS 3D card tilt and UI polish  
**Branch:** `main` (synced with `origin/main`)

### Tech stack (as implemented)

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (section/card animations)
- Lucide React + inline SVG brand icons (Facebook, Instagram, GitHub, LinkedIn, Discord)
- **3D effects:** CSS `Card3D` hover tilt on cards (desktop); **not** active Three.js/R3F canvas (removed in `277d4e1`; deps still in `package.json` — optional cleanup)

### Site sections (5 tabs)

1. **Info** — Hero photo, name, bio, CV summary, personal specs table, skill highlight chips, Tolkien quote
2. **Journey** — “Through the ages” timeline 1998–2025, color-coded Life / Education / Achievement / Job, tap for detail modals
3. **Skills** — Categorized skills with star ratings + detail modals
4. **Achievements** — GOC Coin, 97 Inf Bde, Commando/Weapons courses, Operation Utoron
5. **Contacts** — Email, WhatsApp, phones, social links, CV download; copy buttons per row

### Design

- Google-inspired accent colors (blue, red, yellow, green)
- Light / dark mode (`localStorage` + `prefers-color-scheme`, no flash — script in `index.html`)
- Desktop: sticky top nav | Mobile: bottom tab bar (5 items), safe-area insets

---

## Key files

| File | Role |
|------|------|
| [`src/data/portfolio.ts`](src/data/portfolio.ts) | **Single source of truth** for all content (name, bio, journey, skills, achievements, contacts) |
| [`src/components/Card3D.tsx`](src/components/Card3D.tsx) | CSS 3D tilt on hover for cards |
| [`src/components/DetailModal.tsx`](src/components/DetailModal.tsx) | Shared modal for journey/skill details |
| [`src/sections/*.tsx`](src/sections/) | One file per section |
| [`src/components/Navigation.tsx`](src/components/Navigation.tsx) | Desktop + mobile nav |
| [`src/index.css`](src/index.css) | Theme variables, card-3d, journey/skills grids |
| [`public/hero.png`](public/hero.png) | Profile photo (also `src/assets/hero.png`) |
| [`src/assets/ss/`](src/assets/ss/) | 34 reference screenshots from old site (WhatsApp JPEGs) |
| [`vite.config.ts`](vite.config.ts) | `base: '/Porfolio/'` |
| [`.github/workflows/static.yml`](.github/workflows/static.yml) | CI build + Pages deploy |

### Content editing

Edit **`src/data/portfolio.ts` only** for routine content changes, then:

```bash
npm run build
git add -A && git commit -m "..." && git push origin main
```

Git identity on this machine may be unset — use env vars if commit fails:

```powershell
$env:GIT_AUTHOR_NAME="ZabulanaKakil"
$env:GIT_AUTHOR_EMAIL="ZabulanaKakil@users.noreply.github.com"
$env:GIT_COMMITTER_NAME="ZabulanaKakil"
$env:GIT_COMMITTER_EMAIL="ZabulanaKakil@users.noreply.github.com"
```

---

## Session log

### 2026-06-24 — Initial build & deploy

- Scaffolded greenfield portfolio (Vite + React + TS + Tailwind + R3F + Framer Motion)
- Google color theme, dark mode, 4 sections with placeholder “Capt Nahian (retd)” content
- GitHub Pages workflow + push to `ZabulanaKakil/Porfolio`
- Commit: `2ecead7`

### 2026-06-24 — Content migration from old site

- Analyzed 34 screenshots in `dist/assets/ss/` (from old site `tanvirnahian.gt.tc`)
- Replaced all placeholder data with real profile: **Tanvir Nahian Swapnil**, full timeline, skills, achievements, contacts
- Added **Skills** section (5th nav tab), journey category colors, detail modals
- Moved screenshots to `src/assets/ss/`, hero to `public/hero.png`
- Commit: `d63d545`

### 2026-06-24 — CSS 3D refactor & UI polish

- Removed `Scene3D.tsx` / `FloatingShapes.tsx` (Three.js background)
- Added `Card3D.tsx` — CSS perspective tilt on hover (mobile-safe)
- Improved Contacts: dedicated copy buttons, brand SVG icons
- Section/card styling updates in `index.css`, `SectionWrapper`
- Fixed TS build errors (`Card3D` Framer types, Lucide brand icons)
- Commit: `277d4e1` — pushed to `main`

### 2026-06-24 — Agent handoff doc

- Created this file (`AGENT_HANDOFF.md`) for future agent sessions

---

## Known gaps / follow-ups

- [ ] **README.md** is outdated (still mentions Three.js/R3F and “Capt Nahian (retd)”) — align with current stack and name
- [ ] **Achievement photos** — cards use icon placeholders; add images to `public/achievement-images/` and set `image` on items in `portfolio.ts`
- [ ] **Remove unused deps** — `@react-three/fiber`, `@react-three/drei`, `three` if CSS 3D is final
- [ ] **package.json description** — still says “Capt Nahian (retd)”
- [ ] **Git config** — local machine may lack `user.name` / `user.email`; commits use env vars workaround

---

## Plans on record (may be partially done)

Original plan files in `.cursor/plans/` (if present):

1. **3D Portfolio Build** — initial scaffold (done)
2. **Migrate Portfolio Content** — screenshot → `portfolio.ts` (done)

---

## Quick commands

```bash
npm install
npm run dev          # http://localhost:5173
npm run build
npm run preview
git status
git log -5 --oneline
```

---

*Append new sessions above the “Known gaps” section or add a new dated block under Session log.*
