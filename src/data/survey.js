/**
 * Section 3 — "Or design your stay". Each question maps to a field in
 * PlannerContext's `survey` state via `field`. `options` are the chip
 * choices; `type: 'textarea'` renders a free-text box instead.
 */
export const surveyQuestions = [
  {
    id: 'nights',
    field: 'nights',
    label: 'Length of stay',
    type: 'chips',
    options: [
      { id: '2', label: '2 Nights' },
      { id: '3', label: '3 Nights' },
      { id: '4', label: '4 Nights' },
      { id: '5', label: '5 Nights' },
      { id: 'other', label: 'Other', allowCustom: true },
    ],
  },
  {
    id: 'focus',
    field: 'focus',
    label: 'What is the main focus of your stay?',
    type: 'chips',
    options: [
      { id: 'culinary', label: 'Culinary Discovery' },
      { id: 'rest', label: 'Rest & Relaxation' },
      { id: 'nature', label: 'Nature' },
      { id: 'gutHealth', label: 'Gut Health & Vitality' },
    ],
  },
  {
    id: 'pace',
    field: 'pace',
    label: 'Preferred holiday pace',
    type: 'chips',
    options: [
      { id: 'slow', label: 'Slow' },
      { id: 'balanced', label: 'Balanced' },
      { id: 'active', label: 'Active' },
    ],
  },
  {
    id: 'travellingAs',
    field: 'travellingAs',
    label: "Who's travelling?",
    type: 'chips',
    options: [
      { id: 'solo', label: 'Solo' },
      { id: 'couple', label: 'Couple' },
      { id: 'family', label: 'Family' },
      { id: 'friends', label: 'Friends' },
    ],
  },
  {
    id: 'foodInterest',
    field: 'foodInterest',
    label: "Interest in Myoko's food",
    type: 'chips',
    options: [
      { id: 'none', label: 'None' },
      { id: 'little', label: 'A Little' },
      { id: 'interested', label: 'Interested' },
    ],
  },
  {
    id: 'dietary',
    field: 'dietary',
    label: 'Dietary restrictions',
    type: 'textarea',
    placeholder: 'e.g. vegetarian, halal',
  },
];

/**
 * The required fermentation question — asked separately because it drives
 * a distinct, higher-stakes choice (what gets served all week) rather
 * than being one more chip among the others.
 */
export const diningStyleQuestion = {
  id: 'diningStyle',
  field: 'diningStyle',
  label: 'For your week with us, how would you like to dine?',
  options: [
    {
      id: 'fermentationMenu',
      label: 'Fermentation Valley Wellness Menu',
      description:
        "A full week of dishes built around Nagano's regional fermentation producers — miso, soy sauce, sake, cheese and wine, woven through breakfast, lunch and dinner.",
      suggested: true,
    },
    {
      id: 'alaCarte',
      label: 'À La Carte',
      description: 'Our full seasonal menu, with fermented dishes available but not the week\'s central thread.',
    },
  ],
};
