# Otniel Hudy — Portfolio

React portfolio built with React Router, Ant Design, and Tailwind CSS,
organized as a lightweight MVC.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```

## Structure (MVC)

```
src/
  models/        Static data — profile, skills, focus areas, projects.
                  Edit these files to change site content.
  controllers/    Hooks that hold logic/state (nav scroll tracking,
                  contact form handling) — kept out of the views.
  views/
    pages/        Route-level views: HomePage, ProjectDetailPage, NotFoundPage.
    components/   Presentational sections (Hero, About, Work, Contact...),
                  one folder per section.
  routes/         AppRouter.jsx — all react-router routes in one place.
  layouts/        MainLayout.jsx — shared Navbar/Footer shell via <Outlet />.
  assets/images/  Your portrait and any other images.
```

## To personalize

- `src/models/profile.model.js` — name, tagline, email, resume link, social links.
  The social `href`s and resume link are placeholders (`#`) — fill in the real URLs.
- `src/models/projects.model.js` — the Bulk Disbursement case study is filled in
  from what you've built; the other two entries are open slots (`status: "PENDING"`)
  for your next write-ups.
- `src/models/skills.model.js` / `focusAreas.model.js` — adjust as your stack changes.

## Stack

- **React 19** + **Vite**
- **react-router-dom v7** — `/` (home) and `/work/:slug` (case study) routes
- **Ant Design v6** — Form, Drawer, Grid breakpoints, Row/Col for layout
- **Tailwind CSS v4** — utility styling, theme tokens in `src/index.css`

## Design notes

The visual language borrows from the domain you actually work in — status
tags, ledger rows, monospace data labels — rather than a generic template
look. Palette and type tokens live in the `@theme` block at the top of
`src/index.css`.
