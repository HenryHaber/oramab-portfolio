# Oramabo Emmanuel — Portfolio

Dynamic web portfolio for Oramabo Emmanuel. Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** and rendered in a resume/document layout that mirrors the CV (source of truth: `cv_docx_generator.py`).

Hosted on **GitHub Pages** via a static export + GitHub Actions.

## Features

- **CV as source of truth** — all profile content (summary, skills, experience, featured projects, education) lives in `data/profile.ts`.
- **Live GitHub projects** — fetches public repos from the GitHub API during the static build, filtered to own non-assessment repos.
- **Contact pipeline** — the contact form posts to [FormSubmit](https://formsubmit.co), which forwards messages to the inbox in `data/profile.ts`. No server required.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app runs at the root locally; `NEXT_PUBLIC_BASE_PATH=/oramabo-portfolio` is injected only by the CI build so GitHub Pages serves it under the repo subpath.

## Build & preview the static export

```bash
npm run build
npx serve out
```

The site is exported to `out/` (see `next.config.ts` for `output: "export"`, `basePath`/`assetPrefix` for the GitHub Pages subpath `/oramabo-portfolio/`).

## Contact form setup

The form posts to `https://formsubmit.co/ajax/<email>`. Set the recipient in `.env.local`:

| Variable                     | Purpose                                   |
| ---------------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | Email that receives contact messages      |
| `NEXT_PUBLIC_FORM_ENDPOINT`  | (Optional) Override the FormSubmit endpoint |

> On the first message you submit, FormSubmit emails you a confirmation link — click it once to activate delivery.

## GitHub data

The portfolio fetches public repos from `github.com/HenryHaber` at build time. Filtering and the exclusion list are in `lib/github.ts`.

## Deploy to GitHub Pages

Push to `main` — the workflow at `.github/workflows/deploy.yml` builds the static export and deploys it with `actions/deploy-pages`. Enable Pages in **repo Settings → Pages → Source: GitHub Actions** (already configured for this repo).

Site URL: `https://henryhaber.github.io/oramabo-portfolio/`