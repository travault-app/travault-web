# Travault Website

Marketing website for **Travault** — a travel app that helps you discover places, save travel spots, and plan trips in one place.

## Description

Travault is your travel companion for:

- **Discovering places** — Find spots near you and in any city with maps and curated lists
- **Saving travel spots** — Keep every place you love in one personal vault
- **Organizing trips** — Group saved places by trip, date, or mood
- **Exploring hidden gems** — Get inspired by community discoveries and travel feeds

The website is built with **HTML**, **CSS**, and **lightweight JavaScript**, optimized for performance, SEO, and responsiveness.

## Design System (Light theme)

The site uses a light-first design that matches the Travault mobile app:

| Token | Value | Usage |
|-------|--------|--------|
| `--gold` | `#C8935A` | Primary accent, buttons, links |
| `--background` | `#F6F3EE` | Page background |
| `--surface` | `#FFFFFF` | Cards, header |
| `--surface-elevated` | `#EEE8DF` | Sections, footer |
| `--text-primary` | `#1C1B1A` | Headings, body |
| `--text-secondary` | `#6E655C` | Muted text |
| `--border` | `#E3DBD1` | Borders |
| `--divider` | `#D8CEC3` | Dividers |

**Typography:** Poppins for headings, Inter for body. Clear hierarchy (H1 52–60px, H2 36–40px, H3 24–28px, body 16–18px).

## Folder structure

```
travault-web/
├── index.html              # Homepage
├── privacy-policy.html      # Privacy policy (same header/footer, light theme)
├── delete-account.html      # Account deletion request (same header/footer, light theme)
├── style.css                # Global CSS (variables, layout, components)
├── js/
│   └── main.js              # Mobile menu, smooth scroll, scroll reveal, screenshot carousel, footer year
├── assets/
│   ├── images/
│   │   └── app_logo.png     # Travault logo (header/footer)
│   └── screenshots/
│       ├── explore_ss.png   # Hero phone mockup only
│       ├── destination_ss.png
│       ├── saved_ss.png
│       ├── trip_ss.png
│       ├── event_ss.png
│       ├── community_ss.png
│       └── profile_ss.png   # Screenshot gallery (all except explore_ss)
├── .well-known/
│   └── assetlinks.json     # Android App Links (if used)
└── README.md
```

## Screenshot section

The **Screenshots** section shows app screens in a horizontal carousel:

- **Hero:** Uses `assets/screenshots/explore_ss.png` inside a phone mockup.
- **Gallery:** Uses all other screenshots from `assets/screenshots/` (destination, saved, trip, event, community, profile) with lazy loading, smooth scroll, and optional prev/next buttons on desktop.

You can add or replace images in `assets/screenshots/` and update the `<figure>` items in `index.html` to match.

## Running locally

1. **Simple HTTP server (Python 3):**
   ```bash
   cd travault-web
   python3 -m http.server 8000
   ```
   Open [http://localhost:8000](http://localhost:8000).

2. **Node (npx):**
   ```bash
   npx serve .
   ```

3. **Open the file directly:**  
   You can open `index.html` in a browser, but some features (e.g. loading assets) may depend on being served from a server. Prefer option 1 or 2.

## Deployment

- **Static hosting:** Upload the project (e.g. via Git) to Vercel, Netlify, GitHub Pages, or any static host. No build step required.
- **Recommendations:**
  - Enable compression (gzip/Brotli) for HTML, CSS, JS.
  - Use responsive images and keep screenshots optimized (e.g. WebP, reasonable dimensions) for Lighthouse 90+.
  - Set cache headers for `style.css`, `js/main.js`, and images.

## SEO

- Meta title: **Travault – Discover Places, Save Travel Spots & Plan Trips**
- Meta description and keywords focus on travel discovery, saving locations, hidden gems, and trip planning.
- Open Graph and Twitter Card tags are set for sharing.
- Semantic HTML, heading hierarchy, and JSON-LD (WebSite + MobileApplication) are included.

## Contact

**Email:** [travaultapp@gmail.com](mailto:travaultapp@gmail.com)

---

© Travault. All rights reserved.
