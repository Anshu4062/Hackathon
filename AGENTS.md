# AGENTS.md

## Cursor Cloud specific instructions

This repo is a static front-end "hackathon" project plus one Create React App sub-project. There is no backend, database, or auth.

### Layout / services
- Root static site (`index.html`, `main.js`, `style.css`, `Section2/`) — the main app (deployed to Vercel). Uses GSAP + ScrollTrigger via CDN, so it needs network access and must be served over HTTP (it uses `<script type="module">`, which does not work from `file://`).
- `3d-card-slider/` — a Create React App (`react-scripts` 5.0.1). This is the only sub-project with npm dependencies/build tooling.
- `3D-Card/` and `Feature Component/` — extra standalone static HTML/CSS/JS demos, served by the same static server.

### Running (non-obvious caveats)
- Serve all static parts from the repo root: `python3 -m http.server 8000`. Then open `http://localhost:8000/index.html`, `http://localhost:8000/3D-Card/index.html`, and `http://localhost:8000/Feature%20Component/index.html` (note the URL-encoded space in `Feature Component`).
- React app dev server: run from `3d-card-slider/` with `BROWSER=none npm start` (defaults to port 3000). `BROWSER=none` avoids the CRA attempt to launch a browser in the headless VM.
- The root static site's ScrollTrigger animation is configured with a very long scroll distance (`end: "bottom -700%"` in `main.js`), so you must scroll a lot before the image-scale / row-slide animation visibly progresses.

### Lint / test / build (`3d-card-slider`)
- Build (also runs ESLint via `react-app` config): `CI=true npm run build`.
- Tests: `CI=true npm test` — there are no test files, so this reports "No tests found". Use `CI=true npm test -- --passWithNoTests` if you need a clean exit code.
- Node 22 works with `react-scripts` 5; the deprecation/`babel-preset-react-app` warnings during build are benign.
