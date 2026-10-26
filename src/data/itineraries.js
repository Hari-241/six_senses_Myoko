import { images } from './images';

/**
 * The three suggested itineraries from the brief, each written as a
 * scroll-driven vertical timeline. Every stop carries a short editorial
 * description in the style the brief itself modelled ("Cycle through
 * Myoko's scenic alpine valleys...").
 */
export const itineraries = [
  {
    id: 'restore-relax',
    name: 'Restore & Relax',
    subtitle: 'A gentle day built around stillness and the table',
    image: images.producerTakayashiroVineyard,
    stops: [
      {
        time: 'Morning',
        title: 'Farm-to-Table Breakfast',
        description: "Begin slowly with a morning spread drawn from Nagano's valley farms, served looking out over the mountains.",
        fv: false,
      },
      {
        time: 'Midday',
        title: 'Signature Spa Massage',
        description: 'A therapeutic massage drawing on regional botanicals and fermentation-derived treatments unique to the valley.',
        fv: false,
      },
      {
        time: 'Afternoon',
        title: 'Takayashiro Winery Tasting',
        description: "Visit Takayashiro Farm & Winery for wine and grape tasting among mountain vineyard rows, paired with the farm's own seasonal preserves.",
        fv: true,
      },
    ],
  },
  {
    id: 'move-renew',
    name: 'Move & Renew',
    subtitle: 'An active day balanced by rest and regional flavour',
    image: images.activityNaenaFalls,
    stops: [
      {
        time: 'Early Morning',
        title: 'Guided Hike to Naena Falls',
        description: "A guided trail to one of Myoko's most rewarding waterfalls, suitable for most fitness levels and roughly two hours round trip.",
        fv: false,
      },
      {
        time: 'Midday',
        title: "Lunch Featuring Ishii Miso's 3-Year Miso",
        description: 'A resort lunch built around three-year cedar-barrel miso from Ishii Miso, aged by a method less than one percent of Japan still follows.',
        fv: true,
      },
      {
        time: 'Evening',
        title: 'Resort Onsen',
        description: 'Close the day in the mineral-rich waters of the resort onsen, open from early morning until late.',
        fv: false,
      },
    ],
  },
  {
    id: 'taste-of-nagano',
    name: 'Taste of Nagano',
    subtitle: "A full day's journey into the Suwa fermentation district",
    image: images.producerMiyasakaSake,
    stops: [
      {
        time: 'Morning',
        title: 'Day Trip to Lake Suwa',
        description: 'Depart for Lake Suwa, where five sake breweries sit within walking distance of the water.',
        fv: false,
      },
      {
        time: 'Midday',
        title: 'Miyasaka Brewery & the Suwa 5 Kura Circuit',
        description: 'Sake tasting at Miyasaka Brewery, home of the historic No. 7 yeast, followed by the five-brewery circuit that has turned the district into a destination in its own right.',
        fv: true,
      },
      {
        time: 'Afternoon',
        title: 'Lakeside Walk',
        description: "A quiet walk along Lake Suwa's shoreline before the drive back to the resort.",
        fv: false,
      },
      {
        time: 'Evening',
        title: 'Farm-to-Table Tasting Menu with Marui Soy Sauce',
        description: 'Dinner at the Farm-to-Table restaurant, a tasting menu featuring Marui Soy Sauce and other Fermentation Valley producers from across the day.',
        fv: true,
      },
    ],
  },
];
