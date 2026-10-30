# Replacing images

Most photos on the site are the team's own October field-trip photography.
A handful of slots without a matching shot still use licensed stock
photography (Unsplash, free to use) so every slot renders something real.
To swap in a different photo:

1. Find the row below for the photo you want to replace.
2. Save your replacement photo **with the exact same filename**, overwriting
   the file in this folder.
3. Match the recommended aspect ratio reasonably closely — the layout crops
   to fill, so a very different ratio may crop awkwardly, but it won't break.
4. That's it — no code changes, no rebuild steps. Refresh the site.

Edit the alt text that goes with each photo in `src/data/images.js` — same
keys, same order as this list. To add a brand-new slot rather than replace
an existing one, add a new key there and reference it from the relevant
file in `src/data/`.

Some producers have two photos: a portrait with a person's face, used only
on their Section 8 story card, and a plain product/location shot reused on
the smaller schedule cards in Section 7 and elsewhere — a repeated close-up
face reads oddly at thumbnail size across many cards. Keep that split when
replacing either one.

Section 7's "Our Offerings" grid draws on the master activity list in
`src/data/activities.js`, which also feeds the itinerary builder — every
one of its 36 activities is given a different image, several of them
hero/room/season photos doing double duty as activity placeholders since
the team doesn't yet have a dedicated photo for every one. Replace any of
them with a closer-fitting shot at any time, same filename, no code change.

| Filename | Used for | Recommended ratio | Source |
|---|---|---|---|
| `hero-alpine-valley.jpg` | Hero carousel, slide 1; Lake Suwa Day Trip & Five-Brewery Circuit offering | 16:9, wide | Stock |
| `hero-onsen.jpg` | Hero carousel, slide 2 (a waterfall shot despite the filename); Fermentation Valley Tasting Menu offering | 16:9, wide | Own photography |
| `hero-forest.jpg` | Hero carousel, slide 3; Sasagamine Sunrise Silence Walk offering | 16:9, wide | Own photography |
| `season-summer.jpg` | "Why Myoko Beyond Winter" — Summer column; Myoko Summit Ascent offering | 4:5 or 1:1 | Stock |
| `season-autumn.jpg` | "Why Myoko Beyond Winter" — Autumn column; Evening Village Walk offering | 4:5 or 1:1 | Stock |
| `season-spring.jpg` | "Why Myoko Beyond Winter" — Spring column; Farm-to-Table Breakfast offering | 4:5 or 1:1 | Stock |
| `pillar-movement.jpg` | Wellness pillar — Movement; Mat Pilates offering | 4:5 | Stock |
| `pillar-rest.jpg` | Wellness pillar — Rest; Spa Massage offering | 4:5 | Stock |
| `pillar-food-therapy.jpg` | Wellness pillar — Food Therapy; Miso Brewery Tour & Tenchi-Gaeshi offering | 4:5 | Own photography |
| `room-suite.jpg` | Accommodation — Alpine Onsen Suite; Chef's Table at the Koji Counter offering | 3:2 | Stock |
| `room-villa.jpg` | Accommodation — Cedar Forest Pool Villa; Cedar-Barrel Soy Sauce Visit offering | 3:2 | Stock |
| `room-family.jpg` | Accommodation — family/group rooms; Lunch Featuring Ishii Miso's Three-Year-Aged Miso offering | 3:2 | Stock |
| `producer-miyasaka-brewery.jpg` | Miyasaka Brewery story card (Section 8 **only** — portrait with a face) | 4:5 portrait | Own photography |
| `producer-miyasaka-sake.jpg` | Sake Tasting with Miyasaka offering (no-face product shot) | 4:5 portrait | Own photography |
| `producer-takayashiro-winery.jpg` | Takayashiro Farm & Winery story card (Section 8 **only** — portrait with faces) | 4:5 portrait | Own photography |
| `producer-takayashiro-vineyard.jpg` | Takayashiro Wine Tasting offering; Restore & Relax itinerary (no-face location shot) | 4:5 portrait | Own photography |
| `producer-ishii-miso.jpg` | Ishii Miso story card (Section 8 **only** — portrait with a face) | 4:5 portrait | Own photography |
| `producer-ishii-miso-barrels.jpg` | Miso Flight offering (no-face barrels shot) | 4:5 portrait | Own photography |
| `producer-marukome.jpg` | Marukome story card | 4:5 portrait | Own photography |
| `producer-atelier-de-fromage.jpg` | Atelier de Fromage story card (Section 8 **only** — portrait with a face) | 4:5 portrait | Own photography |
| `producer-atelier-de-fromage-board.jpg` | Atelier de Fromage Cheese Board offering (no-face product shot) | 4:5 portrait | Own photography |
| `producer-murata-shoten.jpg` | Murata Shoten story card | 4:5 portrait | Own photography |
| `producer-marui-soy-sauce.jpg` | Marui Soy Sauce story card | 4:5 portrait | Own photography |
| `activity-waterfall.jpg` | Naena Falls Guided Hike offering | 4:3 | Own photography |
| `activity-naena-falls.jpg` | Breathwork at Altitude offering | 4:3 | Own photography |
| `activity-yoga.jpg` | Sunset Yin Yoga offering | 4:3 | Own photography |
| `activity-stars.jpg` | Meditation Under the Stars offering | 4:3 | Stock |
| `activity-cycling.jpg` | Alpine Valley Cycling with Tasting Stops offering | 4:3 | Stock |
| `activity-lake.jpg` | Obuse Day Trip offering | 4:3 | Own photography |
| `activity-train.jpg` | Rokumon Rail & Ride offering | 4:3 | Stock |
| `activity-cooking.jpg` | Cooking Classes offering | 4:3 | Stock |
| `temple-zen.jpg` | Forest Therapy offering | 4:3 | Stock |
| `activity-sasagamine.jpg` | Sasagamine Highland Trail offering | 4:3 | Own photography |
| `activity-amazake-ritual.jpg` | Amazake Body Ritual offering | 4:3 | Own photography |
| `activity-koji-facial.jpg` | Koji-Infused Facial offering | 4:3 | Own photography |
| `activity-riverside-sound-bath.jpg` | Riverside Sound Bath offering | 4:3 | Own photography |
| `activity-sleep-ritual.jpg` | Sleep Ritual with Fermented Herbal Elixir offering | 4:3 | Own photography |
| `activity-spring-water-tasting.jpg` | Koji Workshop offering | 4:3 | Own photography |
| `activity-sansai-foraging.jpg` | Sansai Mountain-Vegetable Lunch offering | 4:3 | Own photography |
| `activity-natto-making.jpg` | Natto Making offering | 4:3 | Own photography |
| `activity-sunrise-hatha-yoga.jpg` | Sunrise Hatha Yoga offering | 4:3 | Own photography |
| `activity-rice-terrace-ebike.jpg` | Rice-Terrace E-Bike Loop offering | 4:3 | Own photography |
| `activity-mineral-onsen.jpg` | Mineral Onsen offering | 4:3 | Stock |

A few of the own-photography files were saved from small source images
(`activity-spring-water-tasting.jpg`, `activity-riverside-sound-bath.jpg`
among them) — they'll read a touch soft at large sizes. Replace with a
higher-resolution shot of the same subject any time without touching code.
