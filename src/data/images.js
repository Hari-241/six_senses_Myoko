/**
 * THE IMAGE MANIFEST.
 *
 * Every photograph on the site is listed here once, under a readable key.
 * To personalise the site with your own photography, replace the matching
 * file in `public/images/` — keep the exact filename, any aspect ratio
 * close to the original is fine. No code edit, no rebuild knowledge
 * required. See `public/images/README.md` for a shot list.
 *
 * Most slots now render the team's own October field-trip photography.
 * A few slots without a matching shot (hero/room/season generics, night
 * sky, cycling, train, temple) still fall back to a curated, licensed
 * stock photo (Unsplash — free to use), each marked with `credit` below.
 */

function img(filename) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

export const images = {
  // ---------- Hero carousel ----------
  heroAlpineValley: {
    src: img('hero-alpine-valley.jpg'),
    alt: "A river winding through Myoko's green alpine valley in summer",
    credit: 'Unsplash',
  },
  heroOnsen: {
    src: img('hero-onsen.jpg'),
    alt: 'A waterfall dropping through a misty, forested gorge',
  },
  heroForest: {
    src: img('hero-forest.jpg'),
    alt: 'A cedar forest path near the resort',
  },

  // ---------- Why Myoko Beyond Winter — seasons ----------
  seasonSummer: {
    src: img('season-summer.jpg'),
    alt: 'Green alpine mountains under a soft summer sky',
    credit: 'Unsplash',
  },
  seasonAutumn: {
    src: img('season-autumn.jpg'),
    alt: 'Autumn trees in gold and crimson on a Nagano hillside',
    credit: 'Unsplash',
  },
  seasonSpring: {
    src: img('season-spring.jpg'),
    alt: 'A clear stream fed by mountain snowmelt through a green forest',
    credit: 'Unsplash',
  },

  // ---------- Wellness pillars ----------
  pillarMovement: {
    src: img('pillar-movement.jpg'),
    alt: 'A trail winding through a dense alpine forest',
    credit: 'Unsplash',
  },
  pillarRest: {
    src: img('pillar-rest.jpg'),
    alt: 'A guest resting in an outdoor onsen bath surrounded by nature',
    credit: 'Unsplash',
  },
  pillarFoodTherapy: {
    src: img('pillar-food-therapy.jpg'),
    alt: 'A traditional fermentation hall lined with cedar-rimmed mash vats',
  },

  // ---------- Accommodation ----------
  roomSuite: {
    src: img('room-suite.jpg'),
    alt: 'A minimalist Japanese-style suite with sliding doors and soft daylight',
    credit: 'Unsplash',
  },
  roomVilla: {
    src: img('room-villa.jpg'),
    alt: 'An aerial view of a private pool beside a forested mountain river',
    credit: 'Unsplash',
  },
  roomFamily: {
    src: img('room-family.jpg'),
    alt: 'A calm, spacious living space with natural materials',
    credit: 'Unsplash',
  },

  // ---------- Fermentation Valley producers (own photography, Oct field trip) ----------
  producerMiyasakaBrewery: {
    src: img('producer-miyasaka-brewery.jpg'),
    alt: 'A Miyasaka Brewery representative in the doorway of the brewery',
  },
  producerTakayashiroWinery: {
    src: img('producer-takayashiro-winery.jpg'),
    alt: 'Two Takayashiro Farm & Winery representatives behind a row of their wines',
  },
  producerIshiiMiso: {
    src: img('producer-ishii-miso.jpg'),
    alt: "An Ishii Miso brewer beside the cedar barrels and ageing notes",
  },
  producerMarukome: {
    src: img('producer-marukome.jpg'),
    alt: 'A Marukome representative in branded workwear',
  },
  producerAtelierDeFromage: {
    src: img('producer-atelier-de-fromage.jpg'),
    alt: "An Atelier de Fromage cheesemaker outside the workshop, holding a wheel of cheese",
  },
  producerMurataShoten: {
    src: img('producer-murata-shoten.jpg'),
    alt: 'A representative of Murata Shoten with a box of their natto',
  },
  producerMaruiSoySauce: {
    src: img('producer-marui-soy-sauce.jpg'),
    alt: 'A Marui Soy Sauce brewer tending the cedar mash vats',
  },

  // ---------- Same producers, product/location shots without a face —
  // for schedule cards and activity cards outside the Section 8 producer
  // story cards, where a repeated close-up portrait reads oddly ----------
  producerMiyasakaSake: {
    src: img('producer-miyasaka-sake.jpg'),
    alt: 'Stacked Masumi sake barrels marked with traditional calligraphy',
  },
  producerIshiiMisoBarrels: {
    src: img('producer-ishii-miso-barrels.jpg'),
    alt: "Ishii Miso's cedar fermentation barrels with ageing notes",
  },
  producerAtelierDeFromageBoard: {
    src: img('producer-atelier-de-fromage-board.jpg'),
    alt: 'A board of handcrafted Atelier de Fromage natural cheeses',
  },
  producerTakayashiroVineyard: {
    src: img('producer-takayashiro-vineyard.jpg'),
    alt: "Takayashiro Farm & Winery's mountain property in Nakano",
  },

  // ---------- Activities ----------
  activityWaterfall: {
    src: img('activity-waterfall.jpg'),
    alt: 'A waterfall falling through misty forest, near Naena Falls',
  },
  activityNaenaFalls: {
    src: img('activity-naena-falls.jpg'),
    alt: 'Naena Falls dropping through a narrow volcanic-rock canyon',
  },
  activityYoga: {
    src: img('activity-yoga.jpg'),
    alt: 'A figure in stillness in a seated yoga pose outdoors',
  },
  activityStars: {
    src: img('activity-stars.jpg'),
    alt: 'A clear night sky dense with stars',
    credit: 'Unsplash',
  },
  activityCycling: {
    src: img('activity-cycling.jpg'),
    alt: 'A cyclist riding a road beside lush green hillside',
    credit: 'Unsplash',
  },
  activityLake: {
    src: img('activity-lake.jpg'),
    alt: 'A calm lake with a kayaker, framed by forested hills',
  },
  activityTrain: {
    src: img('activity-train.jpg'),
    alt: 'Railway tracks curving through green countryside',
    credit: 'Unsplash',
  },
  activityCooking: {
    src: img('activity-cooking.jpg'),
    alt: 'Hands preparing fresh ingredients on a wooden board',
    credit: 'Unsplash',
  },
  templeZen: {
    src: img('temple-zen.jpg'),
    alt: 'An old Japanese temple veiled in haze among the trees',
    credit: 'Unsplash',
  },
  activitySasagamine: {
    src: img('activity-sasagamine.jpg'),
    alt: 'Open highland pasture at Sasagamine with cloud-wrapped peaks beyond',
  },
  activityAmazakeRitual: {
    src: img('activity-amazake-ritual.jpg'),
    alt: 'Two bowls of amazake-based dessert set with cherry blossoms',
  },
  activityKojiFacial: {
    src: img('activity-koji-facial.jpg'),
    alt: 'A guest receiving a koji-infused facial treatment',
  },
  activityRiversideSoundBath: {
    src: img('activity-riverside-sound-bath.jpg'),
    alt: 'A singing bowl and mallet set beside a still pool',
  },
  activitySleepRitual: {
    src: img('activity-sleep-ritual.jpg'),
    alt: 'A rock-framed mineral pool fed by a small cascade',
  },
  activitySpringWaterTasting: {
    src: img('activity-spring-water-tasting.jpg'),
    alt: "Myoko's volcanic spring water set for tasting",
  },
  activitySansaiForaging: {
    src: img('activity-sansai-foraging.jpg'),
    alt: 'A basket of freshly foraged wild mountain vegetables',
  },
  activityNattoMaking: {
    src: img('activity-natto-making.jpg'),
    alt: 'Soybeans moving through a natto production line',
  },
  activitySunriseHathaYoga: {
    src: img('activity-sunrise-hatha-yoga.jpg'),
    alt: 'A guest in seated hatha yoga pose overlooking hills at sunrise',
  },
  activityRiceTerraceEbike: {
    src: img('activity-rice-terrace-ebike.jpg'),
    alt: 'Cyclists riding an e-bike loop past golden rice terraces',
  },
  activityMineralOnsen: {
    src: img('activity-mineral-onsen.jpg'),
    alt: 'Steam rising from an outdoor hot spring in a traditional Japanese mountain setting',
    credit: 'Unsplash',
  },
};

export default images;
