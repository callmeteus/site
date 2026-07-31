<div align="center">

# Gio Site

> Personal portfolio at [gio.pet](https://gio.pet)

**Astro 6 static site: links hub, micro blog, and portfolio for a developer, modder, and creative tinkerer.**

[![Astro](https://img.shields.io/badge/Site-Astro%206-purple.svg)](#)
[![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20v4-blue.svg)](#)
[![Node](https://img.shields.io/badge/Node-%3E%3D22.12-green.svg)](#)

[Get Started](#get-started) • [Features](#features) • [Architecture](#architecture) • [Development](#development) • [Deploy](#deploy)

</div>

---

## What Is Gio Site?

Gio Site is a single-page Astro portfolio for [gio.pet](https://gio.pet). It surfaces social links, a short bio, music and art side projects, and a lightweight tech blog.

Content and SEO metadata live in `src/config/site.ts`. The site is static HTML with Tailwind CSS v4 theme tokens in `src/styles/global.css`.

```text
  [ Browser @ gio.pet ]
           |
           v
  [ Astro 6 + Tailwind v4 ]
           |
           v
  [ Static dist/ via nginx Docker image ]
```

---

## Features

- **Personal landing page** with bio, location, and link cards.
- **Micro blog** powered by Astro content collections and MDX.
- **SEO helpers** via `@astrojs/sitemap` and Open Graph assets in `public/`.
- **Icon set** via `astro-icon` and Lucide Astro components.
- **Docker deploy** with nginx and external `cloudflared` network.

---

## Get Started

From `Sites/gio-site/`:

```bash
npm install
npm run dev
```

| Service        | URL                        |
| -------------- | -------------------------- |
| Dev server     | http://localhost:4321/     |
| Production     | https://gio.pet            |

Build and preview:

```bash
npm run build
npm run preview
```

---

## Architecture

| Path                  | Responsibility                          |
| --------------------- | --------------------------------------- |
| `src/config/site.ts`  | Name, domain, bio, SEO, PIX key         |
| `src/components/`     | Header, footer, blog cards, icons       |
| `src/pages/`          | File-based routes (`index.astro`, blog) |
| `src/content/`        | MDX blog posts                          |
| `public/`             | Favicon, OG image, robots.txt           |
| `Dockerfile`          | Multi-stage Astro build + nginx         |

---

## Development

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Astro dev server on port 4321       |
| `npm run build`   | Static output to `dist/`            |
| `npm run preview` | Serve production build locally      |

Edit copy and links in `src/config/site.ts` before publishing.

---

## Deploy

```bash
docker compose up --build
```

The service expects an external Docker network named `cloudflared` (same pattern as other sites in this workspace).

---

## Documentation

- [AGENTS.md](../../AGENTS.md) - workspace coding standards and Markdown style.

---

## License

License not specified yet.
