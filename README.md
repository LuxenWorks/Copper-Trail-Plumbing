# Copper Trail Plumbing — Website

**Business:** Copper Trail Plumbing  
**Address:** 506 E Juanita Ave, Mesa, AZ 85204  
**Phone:** (520) 348-0490  
**Domain:** CopperTrailPlumbing.com

A production-ready, fully static React + Vite website. No server-side rendering, no backend, no Manus hosting dependency. Deploy anywhere that serves static files.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI components | shadcn/ui (Radix primitives) |
| Routing | Wouter (client-side SPA) |
| Fonts | Google Fonts (Oswald, Source Serif 4, Inter) |
| Package manager | pnpm |
| Node requirement | **18 or higher** (20 LTS recommended) |

---

## Local Development

### Prerequisites

- Node.js 18+ (`node -v` to check)
- pnpm (`npm install -g pnpm` if not installed)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/copper-trail-plumbing.git
cd copper-trail-plumbing

# 2. Install dependencies
pnpm install

# 3. Start the dev server (hot-reload)
pnpm dev
```

The site will be available at **http://localhost:3000**.

No `.env` file is required for local development or production. All environment variables used in this project are either optional analytics placeholders or were removed during the Manus-to-portable migration.

---

## Production Build

```bash
pnpm build
```

**Output directory:** `dist/public`

The build command compiles the React app with Vite and outputs fully static HTML, CSS, JS, and image assets to `dist/public/`. This folder is self-contained and can be served by any static host.

To preview the production build locally:

```bash
pnpm preview
# Opens at http://localhost:4173
```

---

## Cloudflare Pages Deployment

### Option A — Connect GitHub (recommended)

1. Push this repository to GitHub.
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com/).
3. Click **Create a project → Connect to Git**.
4. Select your GitHub repo (`copper-trail-plumbing`).
5. Configure the build settings:

| Setting | Value |
|---|---|
| **Framework preset** | None (or Vite) |
| **Build command** | `pnpm install && pnpm build` |
| **Build output directory** | `dist/public` |
| **Root directory** | *(leave blank — project root)* |
| **Node.js version** | `20` (set in Environment Variables as `NODE_VERSION = 20`) |

6. Click **Save and Deploy**.

Every push to `main` will trigger an automatic redeploy.

### Option B — Direct Upload (no CI)

```bash
# Build locally
pnpm build

# Upload dist/public to Cloudflare Pages via Wrangler
npx wrangler pages deploy dist/public --project-name=copper-trail-plumbing
```

### SPA Routing

The file `client/public/_redirects` contains:

```
/*    /index.html   200
```

This is automatically copied into `dist/public/_redirects` during the build and tells Cloudflare Pages to serve `index.html` for all routes, enabling client-side routing (e.g., `/services/water-heater` works on direct load and refresh).

### Security & Cache Headers

`client/public/_headers` is copied to `dist/public/_headers` and sets:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Cache-Control: immutable` for all images and hashed assets
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## Custom Domain on Cloudflare Pages

1. In your Cloudflare Pages project, go to **Custom domains → Add a domain**.
2. Enter `coppertrailplumbing.com` (and `www.coppertrailplumbing.com`).
3. If the domain is already on Cloudflare DNS, the CNAME record is added automatically.
4. If the domain is at another registrar, add a CNAME record pointing to your Pages project URL (e.g., `copper-trail-plumbing.pages.dev`).

---

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://www.coppertrailplumbing.com`.
3. Verify ownership via the HTML file method: download the verification file, place it in `client/public/`, rebuild, and deploy.
4. Submit the sitemap: `https://www.coppertrailplumbing.com/sitemap.xml`.

---

## Analytics

The Manus analytics script has been removed. To add your own:

**Google Analytics 4:**
```html
<!-- Add inside <head> in client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Cloudflare Web Analytics (free, privacy-first):**
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

---

## Project Structure

```
copper-trail-plumbing/
├── client/
│   ├── index.html              ← Entry HTML (meta, fonts, schema.org)
│   ├── public/
│   │   ├── images/             ← All site images (self-hosted, no CDN dependency)
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── site.webmanifest
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   ├── _redirects          ← Cloudflare Pages SPA routing
│   │   └── _headers            ← Cloudflare Pages security headers
│   └── src/
│       ├── pages/              ← One file per route
│       │   ├── Home.tsx
│       │   ├── Services.tsx
│       │   ├── WaterHeater.tsx
│       │   ├── DrainCleaning.tsx
│       │   ├── SlabLeak.tsx
│       │   ├── Repiping.tsx
│       │   ├── WaterTreatment.tsx
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   └── NotFound.tsx
│       ├── components/
│       │   ├── Navigation.tsx
│       │   ├── Footer.tsx
│       │   ├── ServicePageTemplate.tsx
│       │   └── ui/             ← shadcn/ui components
│       ├── App.tsx             ← Routes
│       ├── index.css           ← Design tokens + Tailwind
│       └── main.tsx
├── dist/public/                ← Build output (git-ignored)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## Pages & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, services grid, trust signals, FAQ, service areas |
| `/services` | Services | All 6 services with photos and CTAs |
| `/services/water-heater` | Water Heater | Tank vs. tankless, Mesa hard water content |
| `/services/drain-cleaning` | Drain Cleaning | Hydro-jetting, sewer camera, root removal |
| `/services/slab-leak-detection` | Slab Leak | Electronic detection, Mesa clay soil content |
| `/services/repiping` | Repiping | Copper vs. PEX, galvanized pipe content |
| `/services/water-treatment` | Water Treatment | Mesa hard water data, softener options |
| `/about` | About | Company story, values, credentials |
| `/contact` | Contact | Callback form, hours, service area zip codes |

---

## Deployment Checklist

- [ ] Run `pnpm build` locally and confirm `dist/public/` is generated with no errors
- [ ] Verify all images load at `http://localhost:4173` after `pnpm preview`
- [ ] Push source code to GitHub (`main` branch)
- [ ] Connect repo to Cloudflare Pages with build command `pnpm install && pnpm build` and output `dist/public`
- [ ] Set `NODE_VERSION = 20` in Cloudflare Pages environment variables
- [ ] Add custom domain `coppertrailplumbing.com` and `www.coppertrailplumbing.com` in Cloudflare Pages
- [ ] Confirm `_redirects` is present in `dist/public/` (enables SPA routing)
- [ ] Confirm `_headers` is present in `dist/public/` (security headers)
- [ ] Update `sitemap.xml` `<loc>` URLs if domain differs from `coppertrailplumbing.com`
- [ ] Update `robots.txt` Sitemap URL if domain differs
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics or Cloudflare Web Analytics tag to `client/index.html`
- [ ] Replace the `rel="canonical"` URL in `client/index.html` if using a different domain
- [ ] Update the `schema.org` JSON-LD in `client/index.html` with final business details
- [ ] Test all 9 routes on the live Cloudflare Pages URL before pointing the domain

---

## Content Updates

All site content is in plain React/TSX files in `client/src/pages/`. Each page is self-contained. To update phone numbers, addresses, or copy, search for the relevant string and edit the file directly. The phone number `(520) 348-0490` and address `506 E Juanita Ave, Mesa, AZ 85204` appear in:

- `client/src/components/Navigation.tsx`
- `client/src/components/Footer.tsx`
- `client/index.html` (schema.org JSON-LD)
- Individual page files (each has a `PHONE` and `PHONE_HREF` constant at the top)

---

## License

All rights reserved. This website and its content are the property of Copper Trail Plumbing.
