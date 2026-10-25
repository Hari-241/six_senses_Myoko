import { images } from './images';

/**
 * Producer story cards. Every detail here is paraphrased from the
 * October field-trip interview transcripts — no direct quotations, no
 * named individuals — carried in Six Senses' own editorial voice, per
 * the team's decision on how to represent producers who haven't
 * necessarily cleared quote usage.
 */
export const producers = [
  {
    id: 'miyasaka-brewery',
    name: 'Miyasaka Brewery',
    knownFor: 'Masumi Sake',
    location: 'Suwa, Nagano',
    founded: 'Brewing since 1662',
    image: images.producerMiyasakaBrewery,
    story:
      "The birthplace of Yeast No. 7, used by sake brewers nationwide and the driving force behind Lake Suwa's regional sake tourism and non-alcoholic amazake production.",
    insight: "One brewery's yeast, refined in 1946, now ferments much of the sake made across Japan.",
  },
  {
    id: 'takayashiro-winery',
    name: 'Takayashiro Farm & Winery',
    knownFor: 'Mountain Wine & Juice',
    location: 'Nakano, Nagano',
    founded: 'Founded 2003',
    image: images.producerTakayashiroWinery,
    story:
      'A family-owned regional hub producing high-quality wines, ciders and juices, only for Nagano, with a strong sustainability commitment.',
    insight: "Blemished fruit the market won't take becomes juice, cider and jam — nothing goes to waste.",
  },
  {
    id: 'ishii-miso',
    name: 'Ishii Miso',
    knownFor: 'Three-Year Cedar Barrel Miso',
    location: 'Matsumoto, Nagano',
    founded: 'Founded 1868',
    image: images.producerIshiiMiso,
    story:
      'A six-generation family brewery preserving rare traditional miso-making through three-year natural fermentation in cedar barrels, prioritising flavour and quality.',
    insight: "Three-year cedar-barrel ageing is now under 1% of Japan's miso production.",
  },
  {
    id: 'marukome',
    name: 'Marukome',
    knownFor: "Japan's Leading Miso Producer",
    location: 'Nagano City, Nagano',
    founded: 'Founded 1854',
    image: images.producerMarukome,
    story:
      "Japan's largest miso producer, bringing together hundreds of regional businesses through Fermentation Valley NAGANO to strengthen collaboration, shared markets and mutual support.",
    insight: 'Convened eight trade associations into Fermentation Valley NAGANO, on a principle of mutual aid.',
  },
  {
    id: 'atelier-de-fromage',
    name: 'Atelier de Fromage',
    knownFor: 'Natural Cheese',
    location: 'Tōmi, Nagano',
    founded: '40 years of cheesemaking',
    image: images.producerAtelierDeFromage,
    story:
      "A pioneering Japanese cheesemaker with a 40-year heritage of crafting artisanal cheeses adapted to the cold alpine climate of Nagano's Asama foothills, embracing an artisan-driven approach to cheesemaking.",
    insight: 'Unbound by European appellation rules, pursuing the best cheese rather than the most traditional one.',
  },
  {
    id: 'murata-shoten',
    name: 'Murata Shoten',
    knownFor: 'Traditional Natto',
    location: 'Nagano City, Nagano',
    founded: 'Traditional natto craft',
    image: images.producerMurataShoten,
    story:
      'A traditional natto maker championing locally grown Nagano soybeans and developing freeze-dried natto to improve accessibility, shelf life and consumer awareness.',
    insight: 'Stirring breaks the aroma compounds in natto and leaves the umami behind — about 400 strokes, by tradition.',
  },
  {
    id: 'marui-soy-sauce',
    name: 'Marui Soy Sauce',
    knownFor: 'Cedar Barrel Soy Sauce',
    location: 'Nakano, Nagano',
    founded: 'Founded 1947',
    image: images.producerMaruiSoySauce,
    story:
      'A family-run soy sauce brewery preserving historic cedar-barrel ageing while expanding overseas relationships and developing gluten-free, vegan products for wellness-conscious consumers.',
    insight: 'A gluten-free, vegan shio-koji sauce opens doors a traditional soy sauce cannot.',
  },
];
