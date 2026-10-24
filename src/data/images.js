/**
 * THE IMAGE MANIFEST.
 *
 * Every photograph on the site is listed here once, under a readable key.
 * To personalise the site with your own photography, replace the matching
 * file in `public/images/` — keep the exact filename, any aspect ratio
 * close to the original is fine. No code edit, no rebuild knowledge
 * required. See `public/images/README.md` for a shot list.
 *
 * Until you do that, every slot already renders a real, curated, licensed
 * stock photo (Unsplash — free to use) shipped in `public/images/`, so the
 * site is fully pitch-ready on first load.
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
    alt: 'Steam rising from an outdoor hot spring in a traditional Japanese mountain setting',
    credit: 'Unsplash',
  },
  heroForest: {
    src: img('hero-forest.jpg'),
    alt: 'Mist drifting through a cedar forest at dawn',
    credit: 'Unsplash',
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
    alt: 'Rows of cedar fermentation barrels in soft natural light',
    credit: 'Unsplash',
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

  // ---------- Fermentation Valley producers (representative craft photography) ----------
  producerCheese: {
    src: img('producer-cheese.jpg'),
    alt: 'A display of handcrafted natural cheese wheels',
    credit: 'Unsplash',
  },
  producerWine: {
    src: img('producer-wine.jpg'),
    alt: 'Mountain vineyard rows under a clear sky',
    credit: 'Unsplash',
  },
  producerMiso: {
    src: img('producer-miso.jpg'),
    alt: 'Cedar barrels used for slow, traditional miso fermentation',
    credit: 'Unsplash',
  },
  producerSake: {
    src: img('producer-sake.jpg'),
    alt: 'Stacked sake barrels marked with traditional calligraphy',
    credit: 'Unsplash',
  },
  producerSoySauce: {
    src: img('producer-soy-sauce.jpg'),
    alt: 'Cedar brewing barrels decorated with traditional calligraphy',
    credit: 'Unsplash',
  },
  producerNatto: {
    src: img('producer-natto.jpg'),
    alt: 'A close study of whole soybeans, the raw material of natto',
    credit: 'Unsplash',
  },

  // ---------- Activities ----------
  activityWaterfall: {
    src: img('activity-waterfall.jpg'),
    alt: 'A waterfall falling through dense forest',
    credit: 'Unsplash',
  },
  activityYoga: {
    src: img('activity-yoga.jpg'),
    alt: 'A figure in stillness on a mountain cliff at altitude',
    credit: 'Unsplash',
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
    alt: 'A calm lake framed by misty mountains',
    credit: 'Unsplash',
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
};

export default images;
