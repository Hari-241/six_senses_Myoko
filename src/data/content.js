import { images } from './images';

export const introBlock = {
  eyebrow: 'Myoko, Nagano',
  heading: 'A wellness escape, written in Green Season',
  body:
    "Six Senses Myoko sits where Nagano's alpine valleys meet its deepest tradition of fermentation. This companion site lets you shape a Green Season stay around three pillars of wellness — Movement, Rest, and Food Therapy — and the craftspeople of Fermentation Valley NAGANO who give the region its quiet, remarkable depth.",
  contact: {
    heading: 'Contact',
    lines: ['Six Senses Myoko', 'Sekikawa, Myoko Kogen', 'Niigata–Nagano border', 'Japan', 'reservations-myoko@sixsenses.com', '+81 25 555 0199'],
  },
  meta: ['Local Time 9:14 PM', 'How To Get There', '42 Experiences'],
};

export const whyMyoko = {
  eyebrow: 'Beyond Winter',
  heading: 'Why Myoko Beyond Winter',
  body:
    "When the snow melts, Myoko transforms into a serene multi-season sanctuary. Trade frozen slopes for lush mountain hikes, fresh volcanic spring water, and direct access to Nagano's rich agricultural valleys. Experience vibrant local produce at its peak, exclusive farm-to-table dining, and immersive fermentation workshops before the winter crowds return.",
  backgroundImage: images.heroAlpineValley,
  seasons: [
    {
      id: 'summer',
      label: 'Summer',
      image: images.seasonSummer,
      body: 'Cool alpine breezes, mountain grapes and fruit harvesting, and scenic rail journeys along the Rokumon line.',
    },
    {
      id: 'autumn',
      label: 'Autumn',
      image: images.seasonAutumn,
      body: 'World-class fall foliage, peak harvest menus featuring 3-year aged miso and local sake pairings, and crisp outdoor wellness escapes.',
    },
    {
      id: 'spring',
      label: 'Spring',
      image: images.seasonSpring,
      body: 'Cherry blossom blooms, alpine snowmelt mountain waters, and fresh wild mountain vegetables (sansai) paired with young koji fermentations.',
    },
  ],
};

export const wellnessPillars = {
  eyebrow: 'Six Pillars, Shaped Into Three',
  heading: 'Wellness in Six Senses Myoko',
  body: 'Every stay at Six Senses Myoko moves between three pillars — a rhythm of exertion, stillness and nourishment shaped by the valley itself.',
  pillars: [
    {
      id: 'movement',
      label: 'Movement',
      tag: 'Move · Mindfulness',
      image: images.pillarMovement,
      body: 'Reconnect with nature along Myoko\'s pristine mountain trails, suitable for all levels.',
    },
    {
      id: 'rest',
      label: 'Rest',
      tag: 'Sleep · Spa',
      image: images.pillarRest,
      body: 'Immerse yourself in mineral-rich thermal waters paired with warm, fermented herbal compresses.',
    },
    {
      id: 'foodTherapy',
      label: 'Food Therapy',
      tag: 'Eat · Grow',
      image: images.pillarFoodTherapy,
      body: "Discover Nagano's fermentation heritage through tastings, workshops and meals built around regional producers.",
    },
  ],
};

export const offeringsTabs = [
  { id: 'foodTherapy', label: 'Food Therapy' },
  { id: 'rest', label: 'Rest' },
  { id: 'movement', label: 'Movement' },
];
