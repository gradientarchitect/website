# gradientarchitect.com

The Gradient Architect website: homepage, blog and lab. A static [Astro](https://astro.build) site built from the Blueprint design system and deployed on Cloudflare Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # static site in dist/, drafts left out
```

## Write a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL (`/blog/<file-name>`).

```markdown
---
title: Pricing gradients
description: One sentence shown on cards and in search results.
topic: Quote-to-Cash
date: 2026-12-01
draft: true        # remove to publish
---
```

Diagrams can be written as HTML inside a post with the `diagram`, `box`, `box focus` (the one amber element), `line` and `row` classes. See the GCP post for an example.

## Where things live

- `src/styles/global.css`: the design tokens (light and dark) and shared styles. Names match the design system's `tokens.json`. Don't add colours outside it, and never the old red brand tokens.
- `src/site.config.ts`: name, email and social links. A link set to `null` is hidden.
- `src/components/Mark.astro`: the GA mark.
- `public/`: favicon, social share image (`og.png`), `_headers` and `robots.txt`.

## Deploy (Cloudflare Pages)

Workers & Pages → Create → Pages → Connect to Git → this repo.

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version comes from `.node-version`.

Then Custom domains → add `gradientarchitect.com` (and `www`). Cloudflare adds the CNAME records for the site only. Leave the email records (MX, SPF, DMARC, DKIM) as they are.

Views are my own.
