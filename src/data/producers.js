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
    image: images.producerSake,
    story:
      "For over 360 years, this Suwa brewery has shaped the course of Japanese sake far beyond its own cellars. A strain of yeast identified here in 1946 — known simply as No. 7 — went on to become one of the most widely used cultures in the country, carried into breweries the brewers themselves never visited. A research trip to Bordeaux and Burgundy in the 1990s changed how the brewery thought about its own valley: quality alone wasn't enough without a reason for people to come. That conviction led five neighbouring breweries to open their doors together as the Suwa 5 Kura circuit — a destination no single cellar could have built alone.",
    insight: "One brewery's yeast, refined in 1946, now ferments much of the sake made across Japan.",
  },
  {
    id: 'takayashiro-winery',
    name: 'Takayashiro Farm & Winery',
    knownFor: 'Mountain Wine & Juice',
    location: 'Nakano, Nagano',
    founded: 'Founded 2003',
    image: images.producerWine,
    story:
      "A six-hectare mountain vineyard producing roughly 35,000 bottles a year across twenty varieties, built on a simple belief: wine belongs where its grapes are grown, alongside the food of that place, rather than shipped around the world to prove a point. Fruit too marked for the fresh market — split skins, uneven colour — isn't discarded. It becomes juice, cider and jam, a small way of keeping the harvest whole. The winery now also processes grapes and apples for smaller neighbouring farms that lack their own equipment, turning one business into a quiet hub for several.",
    insight: "Blemished fruit the market won't take becomes juice, cider and jam — nothing goes to waste.",
  },
  {
    id: 'ishii-miso',
    name: 'Ishii Miso',
    knownFor: 'Three-Year Cedar Barrel Miso',
    location: 'Matsumoto, Nagano',
    founded: 'Founded 1868',
    image: images.producerMiso,
    story:
      "Six generations deep, this Matsumoto brewery has held to a method that less than one percent of Japan's miso production still follows: natural fermentation in cedar barrels, aged a full three years with no shortcuts. Visitors who walk through the first-, second- and third-year storehouses notice the difference in aroma before anyone explains it to them — the years announce themselves. The brewery's own research traces that patience directly to flavour, and increasingly to the kind of attention health-conscious diners are starting to look for again.",
    insight: "Three-year cedar-barrel ageing is now under 1% of Japan's miso production.",
  },
  {
    id: 'marukome',
    name: 'Marukome',
    knownFor: "Japan's Leading Miso Producer",
    location: 'Nagano City, Nagano',
    founded: 'Founded 1854',
    image: images.producerMiso,
    story:
      "Japan's largest miso producer, founded in 1854, carries a scale most of its neighbours in the valley could never match — yet its leadership chose to spend that scale convening rather than competing. In the aftermath of the pandemic, when the region's smaller fermentation businesses had lost the connections tourism depended on, Marukome's chairman brought eight separate trade associations together under one banner: Fermentation Valley NAGANO. The principle was mutual aid over profit — shared markets, shared events, shared knowledge — and the network has since grown from a few hundred members to several hundred businesses working in concert.",
    insight: "Convened eight trade associations into Fermentation Valley NAGANO, on a principle of mutual aid.",
  },
  {
    id: 'atelier-de-fromage',
    name: 'Atelier de Fromage',
    knownFor: 'Natural Cheese',
    location: 'Tōmi, Nagano',
    founded: '40 years of cheesemaking',
    image: images.producerCheese,
    story:
      "Forty years into domestic natural cheesemaking, this Tōmi workshop has never felt bound by the inherited rules of European cheese tradition — there's no local equivalent of an appellation to answer to, so the only question that matters is how to make the best possible cheese. That freedom has paid off internationally: a Super Gold at the World Cheese Awards and recognition as Japan's top cheese on the world stage. The workshop's flagship complex, opened in 2025, now pairs the cheese cellar with a restaurant and a terrace where visitors can watch the goats that help make it all possible.",
    insight: 'Unbound by European appellation rules, pursuing the best cheese rather than the most traditional one.',
  },
  {
    id: 'murata-shoten',
    name: 'Murata Shoten',
    knownFor: 'Traditional Natto',
    location: 'Nagano City, Nagano',
    founded: 'Traditional natto craft',
    image: images.producerNatto,
    story:
      "A long-standing natto maker working almost entirely with Nakasennari soybeans grown in Nagano, rather than the imported beans most of the industry relies on — a deliberate choice to keep both flavour and energy use close to home. Natto's short shelf life has always set it apart from the valley's other ferments, but freeze-drying has quietly solved that: the dried form keeps for a year, travels well, and the maker is now working to raise awareness that it even exists. For newcomers put off by the texture, the advice is simple — stir longer. Four hundred strokes, as an old food writer once recommended, breaks down the compounds that carry the smell and leaves the umami behind.",
    insight: 'Stirring breaks the aroma compounds in natto and leaves the umami behind — about 400 strokes, by tradition.',
  },
  {
    id: 'marui-soy-sauce',
    name: 'Marui Soy Sauce',
    knownFor: 'Cedar Barrel Soy Sauce',
    location: 'Nakano, Nagano',
    founded: 'Founded 1947',
    image: images.producerSoySauce,
    story:
      "Founded in 1947 by a family that turned to soy sauce after relocating from Tokyo during the war, this Nakano brewery still ages its signature soy sauce in cedar barrels dating back to 1869. Two sons have now taken up the family trade, travelling personally to overseas markets — Taiwan, Singapore, France, the United States — to build direct relationships rather than working solely through trading intermediaries. A newer gluten-free, vegan shio-koji sauce has opened doors a traditional soy sauce couldn't: a way into the broader wellness market, not just the Japanese-food aisle.",
    insight: 'A gluten-free, vegan shio-koji sauce opens doors a traditional soy sauce cannot.',
  },
];
