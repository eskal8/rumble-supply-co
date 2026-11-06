# Rumble Supply Co. — static site

Hand-built wooden flags. Plain HTML/CSS/JS, no build step, no dependencies.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site |
| `styles.css` | All styling |
| `script.js` | Footer year + optional Formspree hook |
| `assets/` | Images — see `assets/README.txt` |

## Add a product photo

1. Save it as `assets/flag-N.jpg` (JPEG, 4:3 landscape works best).
2. Add a `<article class="card">` block in `index.html` inside `.product-grid`.
3. Update the `src`, `alt`, product name, price, size, and description.

## Add a new product

Copy an existing `<article class="card">…</article>` block and change:
- `data-product`
- `<img src>` and `alt`
- `<h3>` name
- `.price`
- `.card-desc`
- `.specs` rows
- The order button `mailto:` subject

## Change contact details

Search `index.html` for `TODO before launch` — the contact list is right there.

## Orders without an email app

Sign up at [formspree.io](https://formspree.io), create a form, and paste the
form ID into `script.js` where it says `YOUR_FORM_ID`. Orders then land in your
inbox directly.

## Run it locally

Open `index.html` in a browser. Nothing to install.

## Deploy

Push to `main` — GitHub Pages serves it automatically.

```bash
git add -A && git commit -m "update" && git push
```
