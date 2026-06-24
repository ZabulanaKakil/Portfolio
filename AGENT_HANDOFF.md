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

**Last commit:** `42a10ef` — Mobile UX, themes, journey timeline, and profile photo
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
5. **Contacts** — Two-column contact cards, copy buttons, CV download

### Design

- Google-inspired accent colors (blue, red, yellow, green) — **4 color themes** (Google, Army, Tech, YouTube) × light/dark
- Light / dark mode (`localStorage` + `prefers-color-scheme`, no flash — script in `index.html`)
- Theme picker in nav (`ThemeToggle`) — palette + day/night mode
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
| [`public/profile.png`](public/profile.png) | Profile photo for OG/static (bundled via `src/assets/profile.png`) |
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

### 2026-06-24 — Multi-theme system, Journey fixes & full-width layout

- Fixed Journey timeline: year headers, category badges on separate lines, theme-aware colors, full-width grid
- Fixed `Card3D` flex layout (className now on inner element so card content stacks correctly)
- Full-width section layouts: removed `border-l-4` narrow column feel from `SectionWrapper`
- Contacts redesigned: 2-column card grid (1 col mobile), 44px+ tap targets
- Added 4 color themes (Google, Army, Tech, YouTube) × light/dark; `portfolio-color-theme` in localStorage
- Expanded `ThemeToggle` to palette + mode picker; no-flash script applies system default on first visit
- Commit: `daa6b1c` — pushed to `main`

---

### 2026-06-24 — Mobile UX fixes (included in commit `42a10ef`)

- **Bottom nav scroll:** Fixed-height mobile tab bar (`--mobile-nav-bar-height: 3.25rem`), safe-area on nav only, matching `mobile-main` padding — removes extra Y-axis scroll below nav
- **Contact cards overflow:** Restructured cards (label on top, link + copy row below), `min-w-0` / `overflow-hidden` / `minmax(0,1fr)` grid, tighter mobile padding
- **Sticky headers clipped:** Removed negative margins on sticky headers; mobile sticky `top` clears theme toggle; z-index 40; `overflow-x: clip` on html/root/main instead of breaking sticky via body overflow
- **Journey year labels:** Prominent pill-style year headers with accent background/border
- **Journey color coding:** Category swatch + label in legend pills and card badges; left border accent per category on cards; `.journey-card` uses explicit `display:flex; flex-direction:column` in CSS (not Tailwind-only)
- Build verified: `npm run build` passes

---

### 2026-06-24 — Mobile scroll UX & unified top chrome (included in commit `42a10ef`)

- **Approach B — unified mobile top bar:** Replaced floating top-right `ThemeToggle` with sticky `mobile-top-bar` (site name + compact palette button) in `Navigation.tsx`; theme picker no longer overlaps journey cards mid-scroll
- **Sticky section headers:** Fixed clipping — full-bleed solid `var(--nav-bg)` background on `.section-header-sticky`, sticky `top` aligned to `--mobile-top-bar-height`, z-index stack: bottom nav (40) < sticky header (44) < top bar (45) < theme dropdown (55) < modals (200)
- **Layout insets:** `--mobile-top-bar-height` replaces old floating-toggle inset; `mobile-main` gets matching `padding-top` on mobile; section `scroll-margin-top` uses same variable
- **Bottom nav label:** Info tab label shortened from `Tanvir Nahian` to `Info` (fixes truncation to “ir Nahian”)
- **ThemeToggle:** Added optional `compact` prop for mobile top bar sizing
- Build verified: `npm run build` passes

---

### 2026-06-24 — Mobile Y-axis scroll optimization (included in commit `42a10ef`)

- **Root causes:** `min-height: 100dvh` on `body`/`#root` stacked with main chrome padding (dvh > visible svh on mobile → phantom scroll); bottom nav total height omitted 1px border vs main padding; top/bottom safe-area counted inconsistently; extra `+0.5rem` on section `scroll-margin-bottom`; generous section/card vertical padding on ≤390px viewports
- **CSS variable model:** Unified chrome vars — `--safe-area-top/bottom`, `--mobile-top-bar-inner-height`, `--mobile-nav-bar-height`, `--mobile-chrome-border`, `--mobile-top-bar-height`, `--mobile-bottom-nav-height`, `--mobile-content-height` (svh minus both bars)
- **Layout fixes:** Mobile `body`/`#root` `min-height: 0`; `overscroll-behavior-y: none` on `html`/`body`; explicit `height` + `box-sizing` on fixed top/bottom bars; `mobile-main` padding-top/bottom driven entirely from CSS vars (removed duplicate Tailwind `max-md:pt`)
- **Spacing:** Tighter mobile section py (`py-8` → `sm:py-10`), sticky header `mb-6`, hero/footer/card padding reduced; `@media (max-width: 390px)` block for xs tightening
- **Sticky headers:** Desktop/mobile split — full-bleed sticky background only on mobile (avoids desktop double-backdrop)
- Build verified: `npm run build` passes

---

### 2026-06-24 — Hero profile photo with themed frame (included in commit `42a10ef`)

- Replaced missing `hero.png` with professional cutout portrait (`dist/pic.png` → `src/assets/profile.png`, `public/profile.png`)
- Added `.profile-frame` in `InfoSection`: theme-aware gradient/surface background using `--gradient-*`, `--surface-elevated`, `--accent-primary` glow — adapts to all 4 color themes × light/dark
- Portrait uses `object-contain` with padded frame so black cutout edges blend cleanly
- Alt text: Tanvir Nahian Swapnil

---

### 2026-06-24 — Journey year label visibility fix (included in commit `42a10ef`)

- **Root cause:** Year labels used `color: var(--text)` on `background: var(--accent-primary)`. On Army dark (and similar themes), cream text on olive accent is ~2.3:1 contrast — selectable in DOM but visually faint/invisible. Earlier `color-mix` fallback had made text and background identical (`accent-on-accent`).
- **Fix:** Option C — centered surface pill: `color: var(--text)` on `background: var(--surface-elevated)` with `border: 2px solid var(--accent-primary)`; `.journey-year-header` flex column centered; full-width divider below.
- **Files:** `src/index.css` (layout + contrast); `JourneySection.tsx` unchanged (markup already correct)
- Build verified: `npm run build` passes

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
