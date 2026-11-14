# Rumble Supply Co. — Site Handoff

Last updated: 2026-11-13

## Where everything lives

- **Repo:** `C:\Users\krimi\Downloads\Data work\rumble-supply-co-site`
- **Live site:** https://rumblesupplyco.online  (Netlify)
- **Netlify site ID:** `2a324878-14c4-410c-a0ca-586af454e06a`
- **Netlify subdomain:** https://rumble-supply-co.netlify.app
- **GitHub:** https://github.com/eskal8/rumble-supply-co (branch `master`)
- **Archive of the old Shopify store:** `_migration/shopify-backup/` (products.json, manifest.json, 1,821 images, pages)

## How to deploy

Deploys are **manual** — Netlify is NOT connected to GitHub, so pushing does not deploy.

```bash
cd "C:/Users/krimi/Downloads/Data work/rumble-supply-co-site"
export NETLIFY_AUTH_TOKEN='<ask in chat; stored in past session history>'
python _migration/deploy_netlify.py
```

The script zips the repo (excluding `_migration/` and `.git`), uploads it to the
Netlify deploys API, and polls until the deploy is `ready`.

Push to GitHub separately for version control:

```bash
git push origin master
```

**Gotchas**
- Network is slow (~20–40 KB/s). A 15 MB deploy takes ~5 minutes. The deploy script
  uses a 1200 s timeout — do not lower it.
- Domain DNS is at the registrar (WorldNic / Network Solutions). The apex A record
  must point to **75.2.60.5** (Netlify). The `www` CNAME points at
  `rumble-supply-co.netlify.app`. Netlify serves both `/customizer` and
  `/customizer.html`.
- `product/*.html` pages are generated — edit the generator, not the pages.

## What's live right now

**Flags — 6 products** (`#flags`)
| Product | Sizes | Prices |
|---|---|---|
| 3D Classic | 19″×10″ / 27″×14″ / 38″×20″ | $129 / $189 / $249 |
| Black & Grey Subdued | same 3 sizes | $129 / $189 / $249 |
| 2nd Amendment | same 3 sizes | $129 / $189 / $249 |
| Draped | Small / Large | $139 / $179 |
| Hanging | 19″×10″ | $129 |
| Custom & Unit Builds | Any | from $249 |

Removed: 3D Large, Thin Blue Line, Live Edge, RSC-SHOAL-RIVER-21.

**Apparel — 30 DTF products** (`#apparel`)
Exact titles, prices, color options, sizes and descriptions taken verbatim from the
old Shopify store. Each has a detail page at `product/<slug>.html` with a gallery
showing FRONT + BACK + SLEEVE views.

**Custom flag builder** — `customizer.html`, live at https://rumblesupplyco.online/customizer
- Linked from the nav "Custom" (header + footer), the Custom section CTA
  ("Design your own flag"), and all 30 product pages.
- Upload artwork → drag to place → resize / rotate / opacity → download PNG or
  request a quote.
- Quote is **email-only** right now (mailto with placement details). No form
  backend, so artwork can't be attached yet.

## Pending work

1. **Four flag photos are placeholders.** `assets/flag-black-grey.jpg`,
   `flag-2nd-amendment.jpg`, `flag-draped.jpg`, `flag-hanging.jpg` currently show a
   clean "Photo coming soon". Swap in real shots (same filenames) and redeploy.
2. **Quote flow needs a backend.** Formspree or similar to accept the uploaded
   artwork + mockup image. Not configured.
3. Real flag photos for 3D Classic and Custom already exist and are in use.

## Build scripts (`_migration/`)

| Script | Purpose |
|---|---|
| `deploy_netlify.py` | Zip + deploy to Netlify |
| `build_catalog.py` | Optimize DTF product images into `assets/dtf/<slug>/` |
| `build_product_pages.py` | Generate `product/<slug>.html` |
| `inject_dtf.py` | Insert the apparel cards into `index.html` |
| `flags_update.py` | Rewrite the `#flags` section |
| `shopify-backup/archive_dtf.py` | Re-pull the old Shopify catalog |

## Old Shopify store

`rumblesupplyco.myshopify.com` — 58 products total; the 31-product DTF line was
migrated. The store may be shutting down; the archive above is the backup.
