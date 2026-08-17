# Oramabo Emmanuel — Portfolio

Dynamic web portfolio for Oramabo Emmanuel. Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** and rendered in a resume/document layout that mirrors the CV (source of truth: `cv_docx_generator.py`).

## Features

- **CV as source of truth** — all profile content (summary, skills, experience, featured projects, education) lives in `data/profile.ts`.
- **Live GitHub projects** — fetches public repos from the GitHub API with 24h ISR revalidation. Forks, assessment repos, and boilerplate starters are filtered out.
- **Contact pipeline** — contact form posts to `app/api/contact/route.ts`, which sends the message via Nodemailer + SMTP to the inbox in `.env.local`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

Copy `.env.example` to `.env.local` and fill in the SMTP values:

| Variable      | Purpose                                        |
| ------------- | ---------------------------------------------- |
| `SMTP_HOST`   | SMTP server (e.g. `smtp.gmail.com`)            |
| `SMTP_PORT`   | SMTP port (e.g. `587`, or `465` for SSL)       |
| `SMTP_USER`   | SMTP account / sender                          |
| `SMTP_PASS`   | SMTP password or app password                  |
| `SMTP_FROM`   | From address used in sent emails               |
| `CONTACT_TO`  | Inbox that receives contact messages           |

> For Gmail, generate an [App Password](https://myaccount.google.com/apppasswords) (requires 2FA) and use it as `SMTP_PASS`.

## GitHub data

The portfolio fetches repos from the public GitHub API (`github.com/HenryHaber`). Filtering and the exclusion list are in `lib/github.ts`; the cache revalidates every 24 hours.

## Deploy to Vercel

```bash
npx vercel
```

Add the `SMTP_*` / `CONTACT_TO` environment variables in the Vercel project settings.