# TEHERAN — Persian Restaurant Website

Static HTML/CSS/JS site for TEHERAN, a Persian restaurant in Koblenz, Germany.

## Structure

- `index.html`, `about.html`, `contact.html` — the three pages
- `css/styles.css` — shared styles (colors, typography, layout)
- `js/main.js` — mobile nav toggle + dish carousel arrows
- `images/` — logo and photography

## Status

The Contact page shows the address and phone number directly rather than a form — there's
no backend collecting messages. Photography, address, phone, opening hours, email, the
Google Maps embed, the Instagram link, and the "Leave Us a Google Review" links are all
real; nothing left to replace.

## Viewing locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
