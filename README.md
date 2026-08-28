# Intellux Payroll & Accounting — Website

A static HTML + CSS website. No frameworks, no build tools — what you see is what gets hosted.

## Folder structure

```
intellux-website/
├── index.html          ← Home page (what visitors see first — MUST be named index.html)
├── css/
│   └── styles.css      ← All shared styles live here
├── js/
│   └── main.js         ← Shared JavaScript (scroll animations, menus, etc.)
├── assets/
│   ├── images/         ← Logos, photos, icons (.png, .jpg, .svg, .webp)
│   └── fonts/          ← Font files, only if you self-host instead of Google Fonts
├── design-demos/       ← The 5 concept demos (delete once a design is chosen)
├── .gitignore          ← Files Git should ignore
└── README.md           ← This file
```

As the site grows, additional pages sit next to index.html:
`about.html`, `services.html`, `pricing.html`, `contact.html` — all sharing `css/styles.css` and `js/main.js`.

## Working on it in VS Code

1. Put this folder somewhere permanent (e.g. `Documents/intellux-website`).
2. In VS Code: **File → Open Folder…** and pick `intellux-website`.
3. Install the **Live Server** extension (by Ritwick Dey): Extensions panel → search "Live Server" → Install.
4. Right-click `index.html` → **Open with Live Server**. Your browser opens at `http://127.0.0.1:5500` and auto-refreshes every time you save a file.

## Hosting (making it live)

Any of these work for a static site — no server code needed:

- **Netlify (easiest):** netlify.com → sign up free → drag this whole folder onto the dashboard. Live in seconds. Connect your custom domain (e.g. intelluxaccounting.com) in Site settings → Domain management.
- **GitHub Pages (free):** push this folder to a GitHub repository → repo Settings → Pages → deploy from the main branch. Site appears at `https://<username>.github.io/<repo>/`.
- **Traditional hosting (GoDaddy, Bluehost, cPanel, etc.):** open the host's File Manager or connect with FTP (FileZilla) and upload the *contents* of this folder into `public_html/`. `index.html` must sit directly inside `public_html/`.

Whichever host you choose, the golden rule is the same: **upload the folder contents exactly as structured here** — the links between HTML, CSS, JS, and images are relative paths and depend on this layout.

## When the client picks a design

1. Copy the chosen demo (e.g. `design-demos/design-1-clean-light.html`) over `index.html`.
2. Cut its `<style>…</style>` contents into `css/styles.css`, and replace the style block with `<link rel="stylesheet" href="css/styles.css">`.
3. Cut its `<script>…</script>` contents into `js/main.js`, and replace with `<script src="js/main.js"></script>`.
4. Replace placeholder pricing, testimonials, and stats with real Intellux content.
5. Add real pages (about, services, contact) reusing the same header/footer.
6. Delete `design-demos/` before going live.
