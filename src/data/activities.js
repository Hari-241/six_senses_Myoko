import { images } from './images';

/**
 * THE MASTER ACTIVITY LIST. One array, at least 35 entries, feeding both
 * Section "Our Offerings" (the full scheduled programme, grouped by
 * pillar + sub-category tab) and the itinerary builder's Mix & Match /
 * Build Your Own pickers — so an activity's name, tag and schedule are
 * identical everywhere it appears.
 *
 * `pillar`       — 'foodTherapy' | 'rest' | 'movement'
 * `tab`          — the sub-category tab within that pillar on Offerings
 * `schedule`     — full weekly schedule text, shown only on Offerings cards
 * `scheduleHint` — short hint for fixed-day activities only (e.g. "Tue & Thu only"),
 *                  shown on itinerary-builder chips instead of the full schedule;
 *                  null for daily/nightly activities
 * `fv`           — true if tied to a Fermentation Valley NAGANO producer
 */
export const offeringsActivities = [
  // ========== MOVEMENT / Hike ==========
  {
    id: 'naena-falls-hike',
    pillar: 'movement',
    tab: 'hike',
    name: 'Naena Falls Guided Hike',
    schedule: 'Tue, Thu & Sat, 8:00 AM',
    scheduleHint: 'Tue, Thu & Sat only',
    description: "A guided trail to one of Myoko's most striking waterfalls, suitable for most fitness levels.",
    image: images.activityWaterfall,
    fv: false,
  },
  {
    id: 'sasagamine-highland-trail',
    pillar: 'movement',
    tab: 'hike',
    name: 'Sasagamine Highland Trail',
    schedule: 'Mon & Fri, 7:00 AM',
    scheduleHint: 'Mon & Fri only',
    description: 'Open highland walking with wide views back across the Myoko valley.',
    image: images.activitySasagamine,
    fv: false,
  },
  {
    id: 'myoko-summit-ascent',
    pillar: 'movement',
    tab: 'hike',
    name: 'Myoko Summit Ascent',
    schedule: 'Saturdays, 5:00 AM',
    scheduleHint: 'Saturdays only',
    description: 'A full-day ascent for experienced hikers, timed to reach the summit for sunrise.',
    image: images.seasonSummer,
    fv: false,
  },
  {
    id: 'evening-village-walk',
    pillar: 'movement',
    tab: 'hike',
    name: 'Evening Village Walk',
    schedule: 'Daily, 5:00 PM',
    scheduleHint: null,
    description: "An easy, unguided loop through Sekikawa's village lanes as the light turns gold.",
    image: images.seasonAutumn,
    fv: false,
  },

  // ========== MOVEMENT / Bike and Rail ==========
  {
    id: 'alpine-valley-cycling',
    pillar: 'movement',
    tab: 'bikeRail',
    name: 'Alpine Valley Cycling with Tasting Stops',
    schedule: 'Wed & Sun, 9:00 AM',
    scheduleHint: 'Wed & Sun only',
    description: "Cycle through Myoko's scenic alpine valleys, passing rice fields and villages, with curated tasting stops along the route.",
    image: images.activityCycling,
    fv: true,
  },
  {
    id: 'rice-terrace-ebike',
    pillar: 'movement',
    tab: 'bikeRail',
    name: 'Rice-Terrace E-Bike Loop',
    schedule: 'Daily, 10:00 AM',
    scheduleHint: null,
    description: 'An easy e-assisted loop through terraced rice fields, suited to any fitness level.',
    image: images.activityRiceTerraceEbike,
    fv: false,
  },
  {
    id: 'rokumon-rail-ride',
    pillar: 'movement',
    tab: 'bikeRail',
    name: 'Rokumon Rail & Ride',
    schedule: 'Fridays, 8:00 AM',
    scheduleHint: 'Fridays only',
    description: "Combine Shinano Railway's heritage Rokumon sightseeing train with a cycling leg through the valley it opens up.",
    image: images.activityTrain,
    fv: false,
  },

  // ========== MOVEMENT / Yoga and Pilates ==========
  {
    id: 'sunrise-hatha-yoga',
    pillar: 'movement',
    tab: 'yogaPilates',
    name: 'Sunrise Hatha Yoga',
    schedule: 'Tue & Thu, 6:30 AM',
    scheduleHint: 'Tue & Thu only',
    description: "Find your inner calm against the backdrop of Myoko's breathtaking alpine horizons.",
    image: images.activitySunriseHathaYoga,
    fv: false,
  },
  {
    id: 'sunset-yin-yoga',
    pillar: 'movement',
    tab: 'yogaPilates',
    name: 'Sunset Yin Yoga',
    schedule: 'Daily, 6:00 PM',
    scheduleHint: null,
    description: 'A slow, supported practice held through mindful breathwork and a soothing wellness tonic.',
    image: images.activityYoga,
    fv: false,
  },
  {
    id: 'mat-pilates',
    pillar: 'movement',
    tab: 'yogaPilates',
    name: 'Mat Pilates',
    schedule: 'Mon, Wed & Fri, 8:00 AM',
    scheduleHint: 'Mon, Wed & Fri only',
    description: 'Core-focused, low-impact movement to open the morning, indoors or on the terrace.',
    image: images.pillarMovement,
    fv: false,
  },
  {
    id: 'breathwork-altitude',
    pillar: 'movement',
    tab: 'yogaPilates',
    name: 'Breathwork at Altitude',
    schedule: 'Saturdays, 7:00 AM',
    scheduleHint: 'Saturdays only',
    description: "Guided breathwork sessions paired at Myoko's elevation, before the day's heat arrives.",
    image: images.activityNaenaFalls,
    fv: false,
  },

  // ========== REST / Spa ==========
  {
    id: 'mineral-onsen',
    pillar: 'rest',
    tab: 'spa',
    name: 'Mineral Onsen',
    schedule: 'Daily, 6:00 AM – 11:00 PM',
    scheduleHint: null,
    description: 'Natural hot-spring waters, warm and mineral-rich, open from first light until late.',
    image: images.activityMineralOnsen,
    fv: false,
  },
  {
    id: 'spa-massage',
    pillar: 'rest',
    tab: 'spa',
    name: 'Spa Massage',
    schedule: 'Daily, 10:00 AM – 7:00 PM',
    scheduleHint: null,
    description: 'Therapeutic massage drawing on regional botanicals and fermentation-derived treatments unique to the valley.',
    image: images.pillarRest,
    fv: false,
  },
  {
    id: 'amazake-body-ritual',
    pillar: 'rest',
    tab: 'spa',
    name: 'Amazake Body Ritual',
    schedule: 'Daily, 2:00 PM',
    scheduleHint: null,
    description: "A whole-body treatment built on amazake, Nagano's gently sweet fermented rice tonic.",
    image: images.activityAmazakeRitual,
    fv: true,
  },
  {
    id: 'koji-facial',
    pillar: 'rest',
    tab: 'spa',
    name: 'Koji-Infused Facial',
    schedule: 'Daily, 1:00 PM',
    scheduleHint: null,
    description: 'Fermentation-derived enzymes used in a restorative facial treatment, drawing on local brewing know-how.',
    image: images.activityKojiFacial,
    fv: true,
  },

  // ========== REST / Sleep ==========
  {
    id: 'sleep-ritual',
    pillar: 'rest',
    tab: 'sleep',
    name: 'Sleep Ritual with Fermented Herbal Elixir',
    schedule: 'Nightly, 9:00 PM',
    scheduleHint: null,
    description: 'An evening wind-down pairing breathwork with a warm fermented elixir, closing the day gently.',
    image: images.activitySleepRitual,
    fv: true,
  },

  // ========== REST / Mindfulness ==========
  {
    id: 'forest-therapy',
    pillar: 'rest',
    tab: 'mindfulness',
    name: 'Forest Therapy',
    schedule: 'Daily, 3:00 PM',
    scheduleHint: null,
    description: 'A slow, guided walk through cedar forest, structured around breath and attention rather than distance.',
    image: images.templeZen,
    fv: false,
  },
  {
    id: 'meditation-under-stars',
    pillar: 'rest',
    tab: 'mindfulness',
    name: 'Meditation Under the Stars',
    schedule: 'Mon & Wed, 11:00 PM',
    scheduleHint: 'Mon & Wed only',
    description: "Seated stillness under Myoko's night sky, far enough from any city to see it properly.",
    image: images.activityStars,
    fv: false,
  },
  {
    id: 'sasagamine-sunrise-walk',
    pillar: 'rest',
    tab: 'mindfulness',
    name: 'Sasagamine Sunrise Silence Walk',
    schedule: 'Sundays, 5:30 AM',
    scheduleHint: 'Sundays only',
    description: 'A silent walk across the Sasagamine highlands as the valley catches its first light.',
    image: images.heroForest,
    fv: false,
  },
  {
    id: 'riverside-sound-bath',
    pillar: 'rest',
    tab: 'mindfulness',
    name: 'Riverside Sound Bath',
    schedule: 'Tuesdays, 4:00 PM',
    scheduleHint: 'Tuesdays only',
    description: 'Resonant bowls and running water, beside a stream fed directly by mountain snowmelt.',
    image: images.activityRiversideSoundBath,
    fv: false,
  },

  // ========== FOOD THERAPY / Tastings ==========
  {
    id: 'sake-tasting-miyasaka',
    pillar: 'foodTherapy',
    tab: 'tastings',
    name: 'Sake Tasting with Miyasaka',
    schedule: 'Wed & Sat, 4:00 PM',
    scheduleHint: 'Wed & Sat only',
    description: "A guided flight through Masumi's sake, brewed in Suwa since 1662, with the story of Yeast No. 7.",
    image: images.producerMiyasakaSake,
    fv: true,
  },
  {
    id: 'takayashiro-wine-tasting',
    pillar: 'foodTherapy',
    tab: 'tastings',
    name: 'Takayashiro Wine Tasting',
    schedule: 'Thursdays, 2:00 PM',
    scheduleHint: 'Thursdays only',
    description: 'Mountain-grown wines from a six-hectare Nakano vineyard, paired with seasonal fruit preserves.',
    image: images.producerTakayashiroVineyard,
    fv: true,
  },
  {
    id: 'miso-flight',
    pillar: 'foodTherapy',
    tab: 'tastings',
    name: 'Miso Flight: One, Two & Three Years',
    schedule: 'Daily, 11:00 AM',
    scheduleHint: null,
    description: 'Taste miso at three stages of cedar-barrel ageing, side by side, and feel the difference the years make.',
    image: images.producerIshiiMisoBarrels,
    fv: true,
  },
  {
    id: 'atelier-cheese-board',
    pillar: 'foodTherapy',
    tab: 'tastings',
    name: 'Atelier de Fromage Cheese Board',
    schedule: 'Fridays, 5:00 PM',
    scheduleHint: 'Fridays only',
    description: 'Award-winning natural cheeses from Tōmi, made without deference to European tradition — only to quality.',
    image: images.producerAtelierDeFromageBoard,
    fv: true,
  },

  // ========== FOOD THERAPY / Workshops ==========
  {
    id: 'miso-brewery-tour',
    pillar: 'foodTherapy',
    tab: 'workshops',
    name: 'Miso Brewery Tour & Tenchi-Gaeshi',
    schedule: 'Tue & Fri, 9:00 AM',
    scheduleHint: 'Tue & Fri only',
    description: 'Walk the first-, second- and third-year storehouses, then help turn the mash by hand in the traditional method.',
    image: images.pillarFoodTherapy,
    fv: true,
  },
  {
    id: 'koji-workshop',
    pillar: 'foodTherapy',
    tab: 'workshops',
    name: 'Koji Workshop',
    schedule: 'Mondays, 10:00 AM',
    scheduleHint: 'Mondays only',
    description: 'Meet the mould culture behind miso, soy sauce, sake and amazake, and make a jar of shio-koji to take home.',
    image: images.activitySpringWaterTasting,
    fv: true,
  },
  {
    id: 'natto-making',
    pillar: 'foodTherapy',
    tab: 'workshops',
    name: 'Natto Making',
    schedule: 'Saturdays, 10:00 AM',
    scheduleHint: 'Saturdays only',
    description: 'Work with Nagano Nakasennari soybeans the traditional way — and learn the 400-stir trick that tames the aroma.',
    image: images.activityNattoMaking,
    fv: true,
  },
  {
    id: 'soy-sauce-barrel-visit',
    pillar: 'foodTherapy',
    tab: 'workshops',
    name: 'Cedar-Barrel Soy Sauce Visit',
    schedule: 'Wednesdays, 10:00 AM',
    scheduleHint: 'Wednesdays only',
    description: 'See soy sauce aged in cedar barrels dating to 1869, carried today by the third generation of brewers.',
    image: images.roomVilla,
    fv: true,
  },
  {
    id: 'cooking-classes',
    pillar: 'foodTherapy',
    tab: 'workshops',
    name: 'Cooking Classes',
    schedule: 'Tue & Sat, 4:00 PM',
    scheduleHint: 'Tue & Sat only',
    description: "Hands-on sessions built around the week's Fermentation Valley ingredients — miso, koji, soy sauce and cheese.",
    image: images.activityCooking,
    fv: true,
  },

  // ========== FOOD THERAPY / Meals ==========
  {
    id: 'farm-to-table-breakfast',
    pillar: 'foodTherapy',
    tab: 'meals',
    name: 'Farm-to-Table Breakfast',
    schedule: 'Daily',
    scheduleHint: null,
    description: "A morning spread built from Nagano's valley farms, served looking out over the mountains.",
    image: images.seasonSpring,
    fv: false,
  },
  {
    id: 'sansai-lunch',
    pillar: 'foodTherapy',
    tab: 'meals',
    name: 'Sansai Mountain-Vegetable Lunch',
    schedule: 'Daily',
    scheduleHint: null,
    description: 'Wild foraged greens, light and quick to prepare, in the Nagano tradition of eating with the season.',
    image: images.activitySansaiForaging,
    fv: false,
  },
  {
    id: 'ishii-miso-lunch',
    pillar: 'foodTherapy',
    tab: 'meals',
    name: "Lunch Featuring Ishii Miso's Three-Year-Aged Miso",
    schedule: 'Thu & Sun, 12:30 PM',
    scheduleHint: 'Thu & Sun only',
    description: 'A resort lunch built around three-year cedar-barrel miso from Ishii Miso, aged by a method less than one percent of Japan still follows.',
    image: images.roomFamily,
    fv: true,
  },
  {
    id: 'koji-chefs-table',
    pillar: 'foodTherapy',
    tab: 'meals',
    name: "Chef's Table at the Koji Counter",
    schedule: 'Thu & Sat, 7:00 PM',
    scheduleHint: 'Thu & Sat only',
    description: "Watch each course built around a different producer's craft, with the maker's story told dish by dish.",
    image: images.roomSuite,
    fv: true,
  },
  {
    id: 'fv-tasting-menu',
    pillar: 'foodTherapy',
    tab: 'meals',
    name: 'Fermentation Valley Tasting Menu',
    schedule: 'Nightly, 6:30 PM',
    scheduleHint: null,
    description: 'A multi-course dinner tracing a single thread of fermentation through miso, soy sauce, sake and cheese.',
    image: images.heroOnsen,
    fv: true,
  },

  // ========== FOOD THERAPY / Full Day Trips ==========
  {
    id: 'lake-suwa-day-trip',
    pillar: 'foodTherapy',
    tab: 'fullDayTrips',
    name: 'Lake Suwa Day Trip & Five-Brewery Circuit',
    schedule: 'Wed & Sat, 8:00 AM – 6:00 PM',
    scheduleHint: 'Wed & Sat only',
    description: 'A full day at Lake Suwa, where five historic sake breweries, including Miyasaka, sit within walking distance of the water.',
    image: images.heroAlpineValley,
    fv: true,
  },
  {
    id: 'obuse-day-trip',
    pillar: 'foodTherapy',
    tab: 'fullDayTrips',
    name: 'Obuse Day Trip',
    schedule: 'Sundays, 9:00 AM – 5:00 PM',
    scheduleHint: 'Sundays only',
    description: "A half-day journey to Obuse's chestnut-sweet streets and historic sake houses, a short drive from the resort.",
    image: images.activityLake,
    fv: false,
  },
];

const SLOT_OVERRIDES = {
  'farm-to-table-breakfast': ['morning'],
  'sansai-lunch': ['afternoon'],
};

function toHours(h, m, meridiem) {
  const base = Number(h) % 12;
  return (meridiem === 'PM' ? base + 12 : base) + Number(m) / 60;
}

// Which itinerary-builder slots ('morning' | 'afternoon' | 'evening') an
// activity's schedule fits; a time range covers every slot it spans.
export function activitySlots(activity) {
  if (SLOT_OVERRIDES[activity.id]) return SLOT_OVERRIDES[activity.id];
  if (activity.tab === 'fullDayTrips') return ['morning'];
  const times = [...activity.schedule.matchAll(/(\d{1,2}):(\d{2})\s*(AM|PM)/g)].map((m) => toHours(m[1], m[2], m[3]));
  if (times.length === 0) return ['morning', 'afternoon', 'evening'];
  const start = times[0];
  const end = times[times.length - 1];
  const slots = [];
  if (start < 12) slots.push('morning');
  if (start < 17 && end >= 12) slots.push('afternoon');
  if (end >= 17) slots.push('evening');
  return slots;
}

export const offeringsTabGroups = {
  foodTherapy: [
    { id: 'tastings', label: 'Tastings' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'meals', label: 'Meals' },
    { id: 'fullDayTrips', label: 'Full Day Trips' },
  ],
  rest: [
    { id: 'spa', label: 'Spa' },
    { id: 'sleep', label: 'Sleep' },
    { id: 'mindfulness', label: 'Mindfulness' },
  ],
  movement: [
    { id: 'hike', label: 'Hike' },
    { id: 'bikeRail', label: 'Bike and Rail' },
    { id: 'yogaPilates', label: 'Yoga and Pilates' },
  ],
};
