# Replacing images

Every photo on the site is already filled in with real, licensed stock
photography (Unsplash, free to use) so the site is pitch-ready as-is. To
swap in your own photography from the Myoko site visit or resort archive:

1. Find the row below for the photo you want to replace.
2. Save your replacement photo **with the exact same filename**, overwriting
   the file in this folder.
3. Match the recommended aspect ratio reasonably closely — the layout crops
   to fill, so a very different ratio may crop awkwardly, but it won't break.
4. That's it — no code changes, no rebuild steps. Refresh the site.

Edit the alt text / captions that go with each photo in
`src/data/images.js` — same keys, same order as this list.

| Filename | Used for | Recommended ratio |
|---|---|---|
| `hero-alpine-valley.jpg` | Hero carousel, slide 1 | 16:9, wide |
| `hero-onsen.jpg` | Hero carousel, slide 2 | 16:9, wide |
| `hero-forest.jpg` | Hero carousel, slide 3 | 16:9, wide |
| `season-summer.jpg` | "Why Myoko Beyond Winter" — Summer column | 4:5 or 1:1 |
| `season-autumn.jpg` | "Why Myoko Beyond Winter" — Autumn column | 4:5 or 1:1 |
| `season-spring.jpg` | "Why Myoko Beyond Winter" — Spring column | 4:5 or 1:1 |
| `pillar-movement.jpg` | Wellness pillar — Movement | 4:5 |
| `pillar-rest.jpg` | Wellness pillar — Rest | 4:5 |
| `pillar-food-therapy.jpg` | Wellness pillar — Food Therapy | 4:5 |
| `room-suite.jpg` | Accommodation — Alpine Onsen Suite | 3:2 |
| `room-villa.jpg` | Accommodation — Cedar Forest Pool Villa | 3:2 |
| `room-family.jpg` | Accommodation — family/group rooms | 3:2 |
| `producer-cheese.jpg` | Atelier de Fromage story card | 4:5 portrait |
| `producer-wine.jpg` | Takayashiro Farm & Winery story card | 4:5 portrait |
| `producer-miso.jpg` | Ishii Miso story card | 4:5 portrait |
| `producer-sake.jpg` | Miyasaka Brewery story card | 4:5 portrait |
| `producer-soy-sauce.jpg` | Marui Soy Sauce story card | 4:5 portrait |
| `producer-natto.jpg` | Murata Shoten story card | 4:5 portrait |
| `activity-waterfall.jpg` | Naena Falls hike activity card | 4:3 |
| `activity-yoga.jpg` | Yoga / meditation activity cards | 4:3 |
| `activity-stars.jpg` | Meditation under the stars | 4:3 |
| `activity-cycling.jpg` | Guided cycling activity card | 4:3 |
| `activity-lake.jpg` | Lake Suwa / kayaking activity card | 4:3 |
| `activity-train.jpg` | Rokumon scenic rail journey | 4:3 |
| `activity-cooking.jpg` | Cooking class activity card | 4:3 |
| `temple-zen.jpg` | Temple zazen / stillness activity card | 4:3 |

Note: Marukome doesn't get its own photo slot — it's told as a story card
using `producer-miso.jpg` (same cedar-barrel aesthetic; Marukome's own
story in the card copy is about convening Fermentation Valley NAGANO, not
about miso-making specifically), to keep the manifest to one photo per
visual theme rather than one per company. Give it its own file any time by
adding a new key in `src/data/images.js`.
