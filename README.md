# TEHERAN — Persian Restaurant Website

Static HTML/CSS/JS site for TEHERAN, a Persian restaurant in Koblenz, Germany.

## Structure

- `index.html`, `about.html`, `contact.html` — the three pages
- `css/styles.css` — shared styles (colors, typography, layout)
- `js/main.js` — mobile nav toggle + contact form handling
- `images/` — logo and photography

## Before going live, replace these placeholders

- `images/dish-1.svg`, `images/dish-2.svg`, `images/dish-3.svg`, `images/about-photo.svg`
  — swap these for real, high-quality photos (update the `src` in the HTML to a `.jpg`/`.webp`).
  The homepage hero (`images/hero-restaurant.jpg`) and logo (`images/logo.jpg`) are already real photos.
- Address, phone, email, and opening hours — currently placeholder values in the footer of
  every page and on the Contact page. Search for `Musterstraße 12` and `+49 000 000000`.
- Google Maps embed on `contact.html` — currently a generic "Koblenz, Germany" query;
  replace with an embed centered on the exact address.
- Google review links (`REPLACE_WITH_YOUR_PLACE_ID`) on `index.html` and `contact.html` —
  replace with the restaurant's actual Google Maps Place ID review link.
- Instagram link in the footer — currently points to `instagram.com` with no handle.
- The contact form currently only confirms submission client-side (see `js/main.js`).
  Wire it to a real backend (Formspree, Netlify Forms, your own endpoint, etc.) to receive messages.

## Viewing locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
