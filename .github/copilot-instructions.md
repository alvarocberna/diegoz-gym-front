# Copilot / AI assistant instructions for this repo

This repository is a small Next.js (App Router) TypeScript project with Tailwind/PostCSS.
Use the guidance below to make focused, repository-aware changes.

1. Big picture
- Framework: Next.js app-router structure under `app/` (edit `app/page.tsx` to change the home route).
- Entry points: `app/layout.tsx` defines the global layout; `app/globals.css` holds global styles.
- Static assets: placed under `public/`.

2. Build & dev flows (run these exactly)
- Development: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start production server: `npm run start` (runs `next start`).
- Linting: `npm run lint` (runs `eslint`).

3. Project conventions & patterns
- TypeScript-first: keep `.tsx`/`.ts` files typed and export components from route files.
- App Router: add routes as folders/files under `app/`. Example: `app/dashboard/page.tsx` → `/dashboard`.
- Styling: global Tailwind config is present (Tailwind + PostCSS). Prefer utility classes in components and keep global rules in `app/globals.css`.
- Fonts: the project uses `next/font` for optimization — prefer declared font usage in `app/layout.tsx`.
- The project follows the features-pattern, dividing the project into the app, feature, and shared folders.

4. Key files to inspect before making changes
- `app/layout.tsx` — global layout and metadata.
- `app/page.tsx` — home route (quickest place to change UI).
- `app/globals.css` — global styles and Tailwind imports.
- `next.config.ts` — Next.js configuration and feature flags.
- `package.json` — scripts and dependency versions (Next 16, React 19, Tailwind 4).

5. Integration points & external deps
- Tailwind/PostCSS: keep PostCSS/Tailwind semantics; run the dev server to validate styles.
- Eslint: `eslint-config-next` is used; use `npm run lint` to catch lint issues.
- Deployment: project expects Vercel-style Next.js deployment; changes to `next.config.ts` can affect production behavior.

6. Safe change guidance
- Small, incremental edits only — preserve the `app/` router layout and `globals.css` imports.
- Run `npm run dev` locally to validate UI/styling and `npm run lint` to catch lint failures.
- Don't assume SSR/CSR details: if a component needs client-side interactivity, explicitly add `"use client"` at the top of the file.

7. Examples from this repo
- To add a new page `/hello`, create `app/hello/page.tsx` exporting a default React component.
- To change global styles, edit `app/globals.css` — Tailwind utilities are already configured.
- To tweak build behavior, inspect and modify `next.config.ts` and then run `npm run build`.

8. What not to do
- Do not restructure the entire project (moving `app/` out of `src/` or renaming core files) without explicit approval.
- Avoid adding heavy backend infra; this repo is a frontend Next.js app scaffold.

9. When to ask the human
- If you need to add new build pipelines, CI, or server components.
- If changes require new top-level dependencies (major upgrades) — confirm with the maintainer.

If any section is unclear or you want more examples (component templates, lint rules, or a sample route), tell me which area to expand.
