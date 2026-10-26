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

| Filename | Used for | Recommended ratio | Source |
|---|---|---|---|
| `hero-alpine-valley.jpg` | Hero carousel, slide 1 | 16:9, wide | Stock |
| `hero-onsen.jpg` | Hero carousel, slide 2 | 16:9, wide | Stock |
| `hero-forest.jpg` | Hero carousel, slide 3 | 16:9, wide | Own photography |
| `season-summer.jpg` | "Why Myoko Beyond Winter" — Summer column | 4:5 or 1:1 | Stock |
| `season-autumn.jpg` | "Why Myoko Beyond Winter" — Autumn column | 4:5 or 1:1 | Stock |
| `season-spring.jpg` | "Why Myoko Beyond Winter" — Spring column | 4:5 or 1:1 | Stock |
| `pillar-movement.jpg` | Wellness pillar — Movement | 4:5 | Stock |
| `pillar-rest.jpg` | Wellness pillar — Rest | 4:5 | Stock |
| `pillar-food-therapy.jpg` | Wellness pillar — Food Therapy; cedar-barrel soy sauce visit | 4:5 | Own photography |
| `room-suite.jpg` | Accommodation — Alpine Onsen Suite | 3:2 | Stock |
| `room-villa.jpg` | Accommodation — Cedar Forest Pool Villa | 3:2 | Stock |
| `room-family.jpg` | Accommodation — family/group rooms | 3:2 | Stock |
| `producer-miyasaka-brewery.jpg` | Miyasaka Brewery story card; sake tasting; sake-kasu bathing | 4:5 portrait | Own photography |
| `producer-takayashiro-winery.jpg` | Takayashiro Farm & Winery story card; wine tasting | 4:5 portrait | Own photography |
| `producer-ishii-miso.jpg` | Ishii Miso story card; miso flight; miso brewery tour | 4:5 portrait | Own photography |
| `producer-marukome.jpg` | Marukome story card | 4:5 portrait | Own photography |
| `producer-atelier-de-fromage.jpg` | Atelier de Fromage story card; cheese board tasting | 4:5 portrait | Own photography |
| `producer-murata-shoten.jpg` | Murata Shoten story card | 4:5 portrait | Own photography |
| `producer-marui-soy-sauce.jpg` | Marui Soy Sauce story card | 4:5 portrait | Own photography |
| `activity-waterfall.jpg` | Naena Falls hike (Offerings schedule card) | 4:3 | Own photography |
| `activity-naena-falls.jpg` | Hikes to Naena Falls (Section 8 story card); Move & Renew itinerary | 4:3 | Own photography |
| `activity-yoga.jpg` | Yoga activity cards | 4:3 | Own photography |
| `activity-stars.jpg` | Meditation under the stars | 4:3 | Stock |
| `activity-cycling.jpg` | Guided cycling activity card | 4:3 | Stock |
| `activity-lake.jpg` | Lake Nojiri kayaking activity card | 4:3 | Own photography |
| `activity-train.jpg` | Rokumon scenic rail journey | 4:3 | Stock |
| `activity-cooking.jpg` | Cooking class / meal activity cards | 4:3 | Stock |
| `temple-zen.jpg` | Temple zazen / forest therapy activity card | 4:3 | Stock |
| `activity-sasagamine.jpg` | Sasagamine sunrise walk, highland trail & story card | 4:3 | Own photography |
| `activity-amazake-ritual.jpg` | Amazake Body Ritual | 4:3 | Own photography |
| `activity-koji-facial.jpg` | Koji-Infused Facial | 4:3 | Own photography |
| `activity-riverside-sound-bath.jpg` | Riverside Sound Bath | 4:3 | Own photography |
| `activity-sleep-ritual.jpg` | Sleep Ritual with Fermented Herbal Elixir | 4:3 | Own photography |
| `activity-spring-water-tasting.jpg` | Snowmelt Spring-Water Tasting story card | 4:3 | Own photography |
| `activity-sansai-foraging.jpg` | Wild Sansai Foraging story card; sansai lunch | 4:3 | Own photography |
| `activity-natto-making.jpg` | Natto Making workshop | 4:3 | Own photography |
| `activity-sunrise-hatha-yoga.jpg` | Sunrise Hatha Yoga | 4:3 | Own photography |
| `activity-rice-terrace-ebike.jpg` | Rice-Terrace E-Bike Loop | 4:3 | Own photography |

A few of the own-photography files were saved from small source images
(`activity-spring-water-tasting.jpg`, `activity-riverside-sound-bath.jpg`
among them) — they'll read a touch soft at large sizes. Replace with a
higher-resolution shot of the same subject any time without touching code.
