# TEHERAN — Persian Restaurant Website

Static HTML/CSS/JS site for TEHERAN, a Persian restaurant in Koblenz, Germany.

## Structure

- `index.html`, `about.html`, `contact.html` — the three pages
- `css/styles.css` — shared styles (colors, typography, layout)
- `js/main.js` — mobile nav toggle + contact form handling
- `images/` — logo and photography

## Before going live, replace these placeholders

All photography is real (hero, logo, dish carousel, and the About page founders' photo).
Address, phone, opening hours, the Google Maps embed, the Instagram link, and the "Leave
Us a Google Review" links are also real. What's still placeholder:

- Email — `info@teheran-koblenz.de` is a placeholder address; replace it in the footer and
  Contact page with the real inbox.
- The contact form currently only confirms submission client-side (see `js/main.js`).
  Wire it to a real backend (Formspree, Netlify Forms, your own endpoint, etc.) to receive messages.

## Viewing locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
