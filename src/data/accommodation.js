import { images } from './images';

/**
 * `groupSizes` values match PlannerContext's GROUP_SIZE_MAP output:
 * 'solo-couple' | 'family' | 'friends'. Accommodation.jsx filters this
 * list by the guest's survey answer to "Who's travelling?".
 */
export const rooms = [
  {
    id: 'alpine-onsen-suite',
    name: 'Alpine Onsen Suite',
    groupSizes: ['solo-couple'],
    image: images.roomSuite,
    size: '68 m²',
    occupancy: '2 Adults',
    features: ['Private indoor onsen', 'Forest-facing terrace', 'Fermented botanicals turndown', 'King bed'],
    rateFrom: '¥198,000',
  },
  {
    id: 'cedar-forest-pool-villa',
    name: 'Cedar Forest Pool Villa',
    groupSizes: ['solo-couple'],
    image: images.roomVilla,
    size: '94 m²',
    occupancy: '2 Adults',
    features: ['Private plunge pool', 'Outdoor cedar bath', 'Dedicated wellness host', 'King bed'],
    rateFrom: '¥265,000',
  },
  {
    id: 'two-bedroom-valley-residence',
    name: 'Two-Bedroom Valley Residence',
    groupSizes: ['family'],
    image: images.roomFamily,
    size: '142 m²',
    occupancy: '2 Adults, 2 Children',
    features: ['Two ensuite bedrooms', 'Shared living & dining pavilion', 'Private garden onsen', 'In-villa breakfast'],
    rateFrom: '¥385,000',
  },
  {
    id: 'family-ryokan-villa',
    name: 'Family Ryokan Villa',
    groupSizes: ['family'],
    image: images.roomSuite,
    size: '118 m²',
    occupancy: '2 Adults, 3 Children',
    features: ['Tatami family room', 'Futon & Western bedding options', 'Private tea pavilion', 'Kids wellness welcome kit'],
    rateFrom: '¥340,000',
  },
  {
    id: 'three-bedroom-mountain-retreat',
    name: 'Three-Bedroom Mountain Retreat',
    groupSizes: ['friends'],
    image: images.roomVilla,
    size: '210 m²',
    occupancy: '6 Adults',
    features: ['Three ensuite bedrooms', 'Private onsen deck', 'Communal fermentation pantry', 'In-house chef option'],
    rateFrom: '¥520,000',
  },
];

export function roomsForGroupSize(groupSize) {
  if (!groupSize) return rooms;
  return rooms.filter((room) => room.groupSizes.includes(groupSize));
}
