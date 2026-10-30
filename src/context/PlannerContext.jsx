import { createContext, useContext, useMemo, useReducer } from 'react';

const PlannerContext = createContext(null);

const initialState = {
  // Section 3 — Or design your stay
  survey: {
    nights: null, // '2' | '3' | '4' | '5' | 'other'
    nightsCustom: '', // free-text/number, shown & used only when nights === 'other'
    focus: null, // 'culinary' | 'rest' | 'nature' | 'gutHealth'
    pace: null, // 'slow' | 'balanced' | 'active'
    travellingAs: null, // 'solo' | 'couple' | 'family' | 'friends'
    foodInterest: null, // 'none' | 'little' | 'interested'
    dietary: '',
    diningStyle: 'fermentationMenu', // 'fermentationMenu' | 'alaCarte' — preselected
  },
  // Section 4 — Accommodation
  roomId: null,
  // Section 5/6 — Itinerary
  itineraryMode: null, // 'suggested' | 'mixMatch' | 'buildOwn'
  itineraryId: null, // when mode === 'suggested'
  mixMatchItems: [], // [{ day, slot, activityId }] when mode === 'mixMatch'
  buildOwnItems: [], // [{ day, activityId }] when mode === 'buildOwn'
  // Section 9 — Review & request booking
  contact: {
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    requests: '',
  },
  submitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SURVEY_FIELD':
      return { ...state, survey: { ...state.survey, [action.field]: action.value } };
    case 'SET_ROOM':
      return { ...state, roomId: action.roomId };
    case 'SET_ITINERARY_MODE':
      return {
        ...state,
        itineraryMode: action.mode,
        itineraryId: action.mode === 'suggested' ? state.itineraryId : null,
        mixMatchItems: action.mode === 'mixMatch' ? state.mixMatchItems : [],
        buildOwnItems: action.mode === 'buildOwn' ? state.buildOwnItems : [],
      };
    case 'SET_ITINERARY_ID':
      return { ...state, itineraryId: action.itineraryId, itineraryMode: 'suggested' };
    case 'SET_MIX_MATCH_ITEMS':
      return { ...state, mixMatchItems: action.items };
    case 'ADD_BUILD_OWN_ITEM': {
      const exists = state.buildOwnItems.some(
        (it) => it.day === action.day && it.activityId === action.activityId,
      );
      if (exists) return state;
      return {
        ...state,
        buildOwnItems: [...state.buildOwnItems, { day: action.day, activityId: action.activityId }],
      };
    }
    case 'REMOVE_BUILD_OWN_ITEM':
      return {
        ...state,
        buildOwnItems: state.buildOwnItems.filter(
          (it) => !(it.day === action.day && it.activityId === action.activityId),
        ),
      };
    case 'SET_CONTACT_FIELD':
      return { ...state, contact: { ...state.contact, [action.field]: action.value } };
    case 'SUBMIT':
      return { ...state, submitted: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function PlannerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo(
    () => ({
      setSurveyField: (field, value) => dispatch({ type: 'SET_SURVEY_FIELD', field, value }),
      setRoom: (roomId) => dispatch({ type: 'SET_ROOM', roomId }),
      setItineraryMode: (mode) => dispatch({ type: 'SET_ITINERARY_MODE', mode }),
      setItineraryId: (itineraryId) => dispatch({ type: 'SET_ITINERARY_ID', itineraryId }),
      setMixMatchItems: (items) => dispatch({ type: 'SET_MIX_MATCH_ITEMS', items }),
      addBuildOwnItem: (day, activityId) => dispatch({ type: 'ADD_BUILD_OWN_ITEM', day, activityId }),
      removeBuildOwnItem: (day, activityId) => dispatch({ type: 'REMOVE_BUILD_OWN_ITEM', day, activityId }),
      setContactField: (field, value) => dispatch({ type: 'SET_CONTACT_FIELD', field, value }),
      submit: () => dispatch({ type: 'SUBMIT' }),
      reset: () => dispatch({ type: 'RESET' }),
    }),
    [],
  );

  const value = useMemo(() => ({ state, ...actions }), [state, actions]);

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error('usePlanner must be used within a PlannerProvider');
  return ctx;
}

// Maps survey.travellingAs -> the group-size filter used by Accommodation.
export const GROUP_SIZE_MAP = {
  solo: 'solo-couple',
  couple: 'solo-couple',
  family: 'family',
  friends: 'friends',
};
