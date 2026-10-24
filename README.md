# Six Senses Myoko — Green Season Itinerary Builder

A companion site to the Six Senses booking page: a Green Season wellness itinerary builder for
Six Senses Myoko, woven through with the story of Nagano's Fermentation Valley NAGANO producers.
Built for Ryka's SMU field-research team to pitch Patience Capital Group / Six Senses.

Live at **https://Hari-241.github.io/six_senses_Myoko/** once deployed (see below).

## What this is

A single continuous-scroll React page covering, in order: a hero carousel with a booking-style
search bar, the "Why Myoko Beyond Winter" seasonal story, the three wellness pillars (Movement,
Rest, Food Therapy), a guest survey that shapes a personal plan, accommodation filtered to the
guest's party size, three itinerary-building paths, the three suggested itineraries as scroll
timelines, the full weekly programme of offerings, producer and activity story cards, and a
review-and-request-booking step with a styled mock confirmation.

The design and motion language (solid cream nav, plum pill buttons, hard-edged images, the
overlapping parallax photo collage) were reverse-engineered from a screen recording of the real
sixsenses.com resort page, not guessed from screenshots — see the build notes if useful context
ever needs revisiting.

## Stack

- React 19 + Vite
- [`motion`](https://motion.dev) (the current package name for Framer Motion) for all animation
- [`lenis`](https://lenis.darkroom.engineering) for inertial smooth scroll
- Plain CSS with custom properties (`src/styles/tokens.css`) — no CSS framework
- `gh-pages` for deployment

No backend, no database, no network calls anywhere in the app — the booking confirmation is a
styled mock, not a real submission.

## Personalising the photography

Every photo on the site ships filled in with real, licensed stock photography (Unsplash, free to
use), so the site is pitch-ready as-is. To swap in your own photos from the Myoko site visit:

1. Open `public/images/README.md` — it lists every photo's filename and where it's used.
2. Save your replacement photo over the matching file in `public/images/`, same filename.
3. Refresh. No code changes, no rebuild knowledge needed.

To change wording — section copy, producer stories, itinerary descriptions, activity schedules —
edit the plain-language data files in `src/data/`. Everything on the page reads from there.

## Running locally

```bash
npm install
npm run dev       # starts a dev server, prints a localhost URL
```

```bash
npm run build      # production build to dist/
npm run preview    # serve that build locally to sanity-check it
```

## Deploying to GitHub Pages

This repo is wired to publish as a **project site** at
`https://Hari-241.github.io/six_senses_Myoko/`. The base path is already set correctly in
`vite.config.js` to match.

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch (via the `gh-pages` package). The
**first time only**, go to the repo's **Settings → Pages** on GitHub and set the Pages source to
the `gh-pages` branch — after that, every `npm run deploy` updates the live site automatically.

## Project structure

```
public/images/        Every photo + a README describing what each one is
src/
  data/                Plain-language content: copy, producers, activities, itineraries, survey
  context/             PlannerContext — holds the guest's survey answers, room and itinerary choice
  components/
    motion/            Reveal, RevealImage, ParallaxCollage, SplitHeading — the animation building blocks
    ui/                Pill, Card, TabGroup, SectionHeading, ArrowLinkList, FermentationTag
    Nav / Hero / BookingBar / Footer
  sections/            01–09, one file per section of the brief, in page order
  styles/              tokens.css (the design system) + global.css (resets & utilities)
```
