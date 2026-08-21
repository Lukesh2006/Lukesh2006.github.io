# Lukesh M — Portfolio

An animated single-page portfolio. No build step, no dependencies — plain HTML, CSS and JavaScript.

```
portfolio/
├── index.html    structure
├── styles.css    all styling, animations, light/dark theme
└── main.js       content config + all interactive behaviour
```

## Run it locally

Double-click `index.html`, or serve it (better — the GitHub API feed likes a real origin):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Edit the content

Everything readable lives in the `CONFIG` object at the top of `main.js`:

| Key | What it controls |
| --- | --- |
| `githubUser` | Username used for all repo links and the live feed |
| `roles` | Phrases cycled by the typing animation in the hero |
| `skills` | Skill cards — icon, title, level bar (0–100), blurb, chips |
| `experience` | Work history cards — role, org, dates, bullets, stack chips |
| `certifications` | Credential list under Skills (`link` and `id` optional) |
| `projects` | Project cards — `cat` also generates the filter buttons |
| `timeline` | The Journey section entries |

Hero headline, intro paragraphs and the About section are in `index.html`.
Colours are CSS variables at the top of `styles.css` (`--acc`, `--acc-2`, `--acc-3`).

## Before you publish — three things to fill in

1. **Email** — `index.html` contains `REPLACE_WITH_YOUR_EMAIL@example.com`. Replace it.
2. **Still missing** — degree name and branch, graduation year, location, and any
   achievements or positions of responsibility. The internship bullet points in
   `CONFIG.experience` were written from your listed skill set, so reword them to match
   what you actually did at RETECH. Everything else — the four certifications, dates,
   credential IDs, the internship role and dates — is taken verbatim from what you
   supplied and is accurate.
3. **Photo** — the avatar currently pulls from your GitHub profile picture.
   To use your own file, drop it in `assets/` and change the `<img src>` in the
   About card.

## Deploy to GitHub Pages

You already own `Lukesh2006.github.io`, which is the best home for this:

```bash
git init
git add .
git commit -m "Add animated portfolio"
git branch -M main
git remote add origin https://github.com/Lukesh2006/Lukesh2006.github.io.git
git push -u origin main
```

Live at `https://lukesh2006.github.io` within a minute or two. For any other repo,
push it, then in **Settings → Pages** set the source to `main` / root.

## What is animated

Particle constellation background (canvas, pointer-reactive) · drifting colour glows ·
preloader · staggered hero reveal · typing effect · animated counters · scroll-reveal on
every section · scroll progress bar · scroll-spy navigation · infinite skill marquee ·
animated skill bars · cursor spotlight on cards · magnetic buttons · 3D tilt profile card ·
custom trailing cursor · filterable project grid with re-entry animation · live GitHub feed.

All of it respects `prefers-reduced-motion`, and the site works on mobile with a
slide-down menu. Light and dark themes both ship; the choice is remembered in
`localStorage`.
