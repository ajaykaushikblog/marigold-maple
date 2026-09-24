# Marigold & Maple — Project Handoff

This file is the memory for continuing the project on a new Figma Make account.
The chat history does not transfer with a code export, so **read this file first**
(and tell the AI: *"Read HANDOFF.md and AGENTS.md before doing anything"*).

---

## 1. What this project is

**Marigold & Maple** — a large-scale, Pinterest-first lifestyle & inspiration
editorial website. It covers occasions (Christmas, Halloween…), life events
(weddings, showers…), and topics (recipes, nails, DIY, beauty, home decor).

**Core principles (do not violate):**
- **Design-system-first & reusable** — build universal templates, not one-off pages.
- **Token-driven** — the core brand identity is fixed; only a *seasonal accent*
  swaps per occasion via the `data-season` attribute
  (`fall` / `christmas` / `valentines` / `halloween` / `wedding`).
- Aesthetic: clean, modern, editorial, premium, warm; **light background**,
  restrained accents.
- Typography: **Fraunces** (serif display, `font-serif`) + **Inter** (sans, default).
- **Mobile-first responsive.** Pinterest-friendly but **NOT** a Pinterest clone.
- Must scale to **thousands** of articles/recipes/DIY projects.
- Taxonomy is many-to-many, described in **human editorial language**
  (Occasions, Topics, Collections) — never database terms on the public site.
- Front-end reference now; a Bubble/CMS backend comes later.

## 2. Tech stack

React 19 + Vite 8 + TypeScript 5.7 + Tailwind CSS v4 (via `@tailwindcss/vite`,
no config file). Package manager: **pnpm**. See `AGENTS.md` for full structure.

- Entry: `src/main.tsx` → `src/App.tsx` (custom history router in `src/lib/router.tsx`)
- Design tokens: `src/styles/theme.css` (`@theme inline` → Tailwind utilities)
- Global CSS + fonts: `src/index.css` (Google Fonts `@import` first)
- Shared UI: `src/components/ui/` (primitives, ArticleCard, Ad, Newsletter, icons)

## 3. What is already built (Phases 1–7 — DONE)

| # | Page | Route | Component | Data |
|---|------|-------|-----------|------|
| 1 | Homepage | `/` | `home/Homepage.tsx` | `lib/content.ts` |
| 2 | Universal Category Page | `/christmas`, `/recipes`, … | `category/CategoryPage.tsx` | `lib/categories.ts` |
| 3 | Universal Article Page | `/article/:slug` | `article/ArticlePage.tsx` | `lib/articles.ts` |
| 4 | Universal Recipe Page | `/recipe/:slug` | `recipe/RecipePage.tsx` | `lib/recipes.ts` |
| 5 | Universal DIY / Tutorial Page | `/diy/:slug` | `diy/DIYPage.tsx` | `lib/diy.ts` |
| 6 | Universal Author Profile Page | `/author/:slug` | `author/AuthorPage.tsx` | `lib/authorProfiles.ts` |
| 7 | Universal Search Results Page | `/search?q=…` | `search/SearchPage.tsx` | `lib/search.ts` |

**Live URLs to verify after import:**
- `/`
- `/christmas`
- `/article/` (see slugs in `lib/articles.ts`)
- `/recipe/christmas-sugar-cookies`
- `/diy/macrame-snowflakes`
- `/author/maya-reyes` (also amanda-thompson, alicia-butner, jordan-blake)
- `/search?q=christmas`

Each page: field-driven universal template (every field optional, auto-hides),
SEO via `useEffect` (title/meta/canonical/JSON-LD), reserved-space ad placeholders,
schema.org structured data (Article / Recipe / HowTo / ProfilePage / BreadcrumbList),
and consistent reuse of the shared card + newsletter + ad components.

## 4. The original phase specs

All original briefs are saved in `src/imports/pasted_text/`:
- `universal-article-page.md`
- `universal-recipe-page.md`
- `universal-diy-page.md`
- `universal-author-profile.md`
- `universal-search-results.md`

The project is fed **one phase at a time**. Each spec says: do NOT redesign
existing pages, and do NOT build the CMS yet. Keep that discipline.

## 5. What comes NEXT (not yet built — do only when requested)

Per the overall 20-step plan, remaining phases (feed one at a time):
- **Pinterest pin templates** (1000×1500 vertical share images)
- **Admin CMS / dashboard** — article & recipe editors, SEO control center
  *(explicitly deferred in every prior phase — build only when asked)*
- **Final SEO / accessibility / performance audit**

Do NOT start any of these without an explicit request.

## 6. How to continue on the new account

1. Import all files (replace `src/`, plus `index.html`, `vite.config.ts`,
   `tsconfig.json`, `AGENTS.md`, `package.json`). Do not copy `node_modules`/`dist`.
2. Let it install (pnpm) and start the Vite dev server automatically.
3. Verify the routes in section 3.
4. Tell the AI: **"Read HANDOFF.md and AGENTS.md. We are continuing the
   Marigold & Maple project. Here is the next phase: …"** then paste the next
   spec (or ask for the next phase from section 5).

## 7. House rules for every new phase

- Reuse existing design-system components before building custom UI.
- Extend templates in place; never fork a second app root or redesign shipped pages.
- Keep the seasonal-accent token pattern; don't hard-code occasion colors.
- Every taxonomy value comes from the data system, not hard-coded lists.
- Verify with `pnpm tsc --noEmit` (or `npx tsc --noEmit`) + a build before finishing.
- Never invent fake ratings, review counts, or author stats.
