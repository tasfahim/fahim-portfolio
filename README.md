# Fahim Portfolio — React + TypeScript

This is the first migration phase of the portfolio from the separated HTML/CSS/JS version to React + TypeScript using Vite.

## Structure

- `src/components/` — one component per portfolio section
- `src/App.tsx` — page composition
- `src/portfolioEffects.ts` — scroll reveal and cursor effects
- `src/styles.css` — current portfolio styling preserved from the previous version
- `public/images/` — portfolio image assets
- `public/` — CV PDF

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The current migration intentionally keeps the existing visual design. Tailwind CSS and Next.js are planned for the following phase after this React version is verified.
