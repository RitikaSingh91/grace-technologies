# Grace Technologies

Next.js (App Router) + TypeScript. No Tailwind. Every component has its own CSS module.

## Run

    npm install
    cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL to your real domain
    npm run dev                    # http://localhost:3000
    npm run typecheck
    npm run build && npm start

## Rules this project follows

- **Colours live only in `app/globals.css`** (`:root` tokens such as `--color-bg`, `--color-accent-1`, `--tint-14`).
  Components, TSX and module CSS never contain a hex or rgb value. To re-theme the site, edit that one block.
- **One CSS module per component**: `components/<Name>/<Name>.tsx` + `<Name>.module.css`.
- **No inline styles, no Tailwind.**
- **Images and icons are in `public/assets/images/`** (logo, favicon, apple icon, Open Graph image).
  The logo is drawn as a CSS mask from `logo.svg`, so its colour also comes from `--color-text`.

## Structure

    app/                 routes, layout, globals.css, sitemap.ts, robots.ts, not-found.tsx
    components/          every UI piece (Header, Hero, ServiceCard, Faq, Button, ...)
    data/site.ts         typed content + constants (site.json holds the service copy)
    data/socials.ts      Instagram, Facebook, YouTube, X, Pinterest links
    lib/                 types, SEO helpers (JSON-LD), cx(), icon names
    public/assets/images static images

## SEO

Per-page `<title>` and description, canonical URLs, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt`,
JSON-LD (Organization with social `sameAs`, WebSite, Service, FAQPage, BreadcrumbList), semantic landmarks and one `h1` per page.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL`.
- The enquiry form validates but does not send yet (no endpoint is connected); the dialog says so honestly.
- Privacy and Terms pages are drafts for review by a qualified professional.
