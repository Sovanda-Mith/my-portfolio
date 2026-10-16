# Portfolio Summary

Personal portfolio site for **Mith Sovanda** — a Computer Science student and front-end web developer from Phnom Penh, Cambodia. The site showcases a bio, projects, tech stack, blog articles, life goals, and an online CV.

- **Live site:** https://mith-sovanda.vercel.app/
- **Source:** https://github.com/Sovanda-Mith/my-portfolio.git

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| UI Library | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Components | Radix UI (`react-checkbox`, `react-slot`), shadcn-style setup (`components.json`) |
| Icons | `lucide-react`, `react-icons` |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Deployment | Vercel |
| Package manager | npm (with a `pnpm-lock.yaml` / `pnpm-workspace.yaml` also present) |

Scripts: `dev`, `build`, `start`, `lint`.

---

## Project Structure

```
app/
  page.tsx                 Home (hero, bio, portfolio, tech stack)
  layout.tsx               Root layout + metadata (Inter font)
  not-found.tsx            404 page
  globals.css
  blog/                    Blog page (Medium articles)
  goals/                   Life goals page
  cv/                      Online CV / resume
components/
  Nav.tsx                  Top navigation
  Social.tsx               Social links (LinkedIn, GitHub, Upwork, email)
  Description.tsx          Home bio text
  ProjectsPage.tsx         Projects grid
  ProjectCard.tsx          Project card
  TechStack.tsx            Tech stack with proficiency bars
  VideoBackground.tsx      Looping video background
  MediumArticles.tsx       Fetches Medium RSS articles
  MediumCard.tsx           Article card
  ui/                      Reusable UI primitives (button, card, checkbox)
data/
  projects.ts              Project entries
  skills.ts                Skills, tools, languages, OS
  educations.ts            Education history
  type.ts                  Shared TypeScript interfaces
lib/utils.ts               cn() helper
```

---

## Pages / Routes

- **`/` Home** — Video background hero with profile picture and tagline *"Student, Developer & Game Enthusiast"*, social links, bio, a **Portfolio** projects grid, and a **Tech Stack** section with animated proficiency bars.
- **`/blog`** — Pulls articles live from Medium (`@sovanda_m`) via the rss2json API and renders them as cards.
- **`/goals`** — "Life Goals" and "Current Goals" lists displayed as (disabled) checkboxes.
- **`/cv`** — Resume layout with hero, contact, skills, education, and a (currently empty) work experience section.

---

## Projects

| Project | Description | Live | Source |
| --- | --- | --- | --- |
| **Portfolio** | This site. Built with Next.js + Tailwind; pulls articles from Medium via API. Continuously updated. | [live](https://mith-sovanda.vercel.app/) | [repo](https://github.com/Sovanda-Mith/my-portfolio.git) |
| **Digital Text Board** | Vanilla JS + HTML + CSS final project (year 3). | [live](https://sovanda-mith.github.io/text-board/) | [repo](https://github.com/Sovanda-Mith/text-board.git) |
| **Simple Color Picker** | Vite + React + Tailwind color picker with light/dark mode and localStorage persistence. | [live](https://colorpicker-app.vercel.app/) | [repo](https://github.com/Sovanda-Mith/colorpicker-app) |

---

## Skills

**Programming (CV view — proficiency %):**
Next.js 60%, React JS 60%, HTML/CSS 70%, Tailwind CSS 70%, TypeScript 60%, JavaScript 70%.

**Tech Stack section (home page — proficiency %):**
Laravel 80%, Vue.js 80%, Tailwind 90%, TypeScript 75%, PHP 75%, Nest.js 70%, React 70%, Next.js 70%, MySQL 70%, PostgreSQL 70%, Git 80%.

**Tools:** Git (60%).

**Operating Systems:** Windows 80%, Linux 60%, macOS 50%.

**Languages:** Khmer (Native), English (C1 — IELTS Band 7.5).

> Note: The CV skills data (`data/skills.ts`) and the home Tech Stack (`components/TechStack.tsx`) are two separate, slightly inconsistent lists. Consider consolidating them into one source of truth.

---

## Education

- **Institute of Technology of Cambodia** — Engineering Degree, Computer Science, 2021–2026 (expected).
- **HunSen Bunrany Phsar Daem Thkov High School** — Diploma, graduated with Grade A, 2015–2021.

---

## Life Goals

**Goals that drive me everyday:** earn enough to support family; travel the world with loved ones; not worry about living costs.

**Current goals:** get fit; get an internship or work; move out from home; have more discipline; improve content creation, web development, and editing skills; get better at Cybersecurity and DevOps.

---

## Contact & Social

- **Email:** vanda.can.read@gmail.com
- **Location:** Mean Chey, Phnom Penh, Cambodia
- **GitHub:** https://github.com/Sovanda-Mith
- **LinkedIn:** https://www.linkedin.com/in/sovanda-mith-46751518b/
- **Upwork:** https://www.upwork.com/freelancers/~01fd26723422f929c7
- **Medium:** https://medium.com/@sovanda_m
- **Website:** https://mith-sovanda.vercel.app/

---

## Environment / Config Notes

- `NEXT_PUBLIC_RSS_API_KEY` — API key for **rss2json**, used by the blog page to fetch Medium articles.
- Site metadata (title, favicon) is configured in `app/layout.tsx`.
- Tailwind theme customization lives in `tailwind.config.ts`; shadcn config in `components.json`.

---

## Possible Improvements / TODO

- Merge `data/skills.ts` and `components/TechStack.tsx` skill lists into one source of truth.
- Add content to the Work Experience section on the CV page (currently just a heading).
- Add error/loading handling to the Medium articles fetch.
- Resolve the duplicate lockfiles (`package-lock.json` and `pnpm-lock.yaml`) by choosing one package manager.

_Last summarized: 2026-10-16._
