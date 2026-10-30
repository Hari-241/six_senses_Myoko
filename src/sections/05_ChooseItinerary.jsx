import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealGroup, RevealItem, Reveal } from '../components/motion/Reveal';
import { FermentationTag } from '../components/ui/FermentationTag';
import { ItineraryTimeline } from '../components/ItineraryTimeline';
import { usePlanner } from '../context/PlannerContext';
import { itineraries } from '../data/itineraries';
import { offeringsActivities, offeringsTabGroups } from '../data/activities';
import { offeringsTabs } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './05_ChooseItinerary.css';

const MODES = [
  {
    id: 'suggested',
    title: 'Our Suggested Itinerary',
    description: 'Pick one of three curated days, built around the three wellness pillars.',
  },
  {
    id: 'mixMatch',
    title: 'Mix & Match',
    description: 'Start from a plan shaped for you, grouped by day — swap what you like.',
  },
  {
    id: 'buildOwn',
    title: 'Build Your Own From Scratch',
    description: 'An empty plan — add only what speaks to you, at your own pace.',
  },
];

const SLOT_ORDER = ['morning', 'afternoon', 'evening'];
const SLOT_LABELS = { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' };
const PILLAR_LABELS = { foodTherapy: 'Food Therapy', rest: 'Rest', movement: 'Movement' };

const DEFAULT_DAY_COUNT = 3;

function getDayCount(survey) {
  const raw = survey.nights === 'other' ? survey.nightsCustom : survey.nights;
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) return DEFAULT_DAY_COUNT;
  return Math.min(Math.max(n, 1), 6);
}

function findActivity(id) {
  return offeringsActivities.find((a) => a.id === id) ?? null;
}

// One Rest, one Movement and one Food Therapy pick, shaped lightly by the
// survey answers — Food Therapy always lands on the latest day.
const MOVEMENT_BY_PACE = {
  slow: { id: 'evening-village-walk', slot: 'evening' },
  balanced: { id: 'naena-falls-hike', slot: 'morning' },
  active: { id: 'myoko-summit-ascent', slot: 'morning' },
};
const REST_BY_FOCUS = {
  rest: { id: 'sleep-ritual', slot: 'evening' },
  gutHealth: { id: 'koji-facial', slot: 'afternoon' },
  nature: { id: 'forest-therapy', slot: 'afternoon' },
  culinary: { id: 'mineral-onsen', slot: 'evening' },
};

function pickFoodTherapy(survey) {
  const deepInterest = survey.diningStyle === 'fermentationMenu' || survey.foodInterest === 'interested';
  return deepInterest ? { id: 'fv-tasting-menu', slot: 'evening' } : { id: 'sansai-lunch', slot: 'afternoon' };
}

function place(items, day, preferredSlot, activityId) {
  const taken = new Set(items.filter((it) => it.day === day).map((it) => it.slot));
  const slot = taken.has(preferredSlot) ? SLOT_ORDER.find((s) => !taken.has(s)) ?? preferredSlot : preferredSlot;
  return [...items, { day, slot, activityId }];
}

function generateMixMatchItems(survey) {
  const dayCount = getDayCount(survey);
  const restDay = 0;
  const movementDay = dayCount >= 2 ? 1 : 0;
  const foodDay = dayCount - 1;

  const movement = MOVEMENT_BY_PACE[survey.pace] ?? MOVEMENT_BY_PACE.balanced;
  const rest = REST_BY_FOCUS[survey.focus] ?? REST_BY_FOCUS.culinary;
  const food = pickFoodTherapy(survey);

  let items = [];
  items = place(items, restDay, rest.slot, rest.id);
  items = place(items, movementDay, movement.slot, movement.id);
  items = place(items, foodDay, food.slot, food.id);
  return items;
}

function swapAlternatives(pillar, excludeId) {
  return offeringsActivities.filter((a) => a.pillar === pillar && a.id !== excludeId).slice(0, 3);
}

export function ChooseItinerary() {
  const { state, setItineraryMode, setItineraryId } = usePlanner();
  const reduced = useReducedMotion();

  const selectedItinerary =
    state.itineraryMode === 'suggested' ? itineraries.find((it) => it.id === state.itineraryId) : null;

  return (
    <section className="choose-itinerary section" id="choose-itinerary">
      <div className="container">
        <SectionHeading eyebrow="Your Plan" heading="Choose an itinerary" body="Three ways to arrive at a plan — pick the one that suits how you like to travel." />

        <RevealGroup as="div" className="choose-itinerary__modes" stagger={0.08}>
          {MODES.map((mode) => {
            const selected = state.itineraryMode === mode.id;
            return (
              <RevealItem
                as="button"
                key={mode.id}
                className={`mode-card ${selected ? 'mode-card--selected' : ''}`}
                onClick={() => setItineraryMode(mode.id)}
                aria-pressed={selected}
              >
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <PanelSwitch activeKey={state.itineraryMode} reduced={reduced}>
          {state.itineraryMode === 'suggested' ? (
            <div className="itinerary-pick">
              {itineraries.map((it) => {
                const selected = state.itineraryId === it.id;
                return (
                  <button
                    type="button"
                    key={it.id}
                    className={`itinerary-pick__chip ${selected ? 'itinerary-pick__chip--selected' : ''}`}
                    onClick={() => setItineraryId(it.id)}
                    aria-pressed={selected}
                  >
                    <span className="itinerary-pick__name">{it.name}</span>
                    <span className="itinerary-pick__subtitle">{it.subtitle}</span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {state.itineraryMode === 'mixMatch' ? <MixMatchPanel /> : null}
          {state.itineraryMode === 'buildOwn' ? <BuildOwnPanel /> : null}
        </PanelSwitch>

        {selectedItinerary ? (
          <Reveal as="div" className="itinerary-preview" key={`suggested-${selectedItinerary.id}`}>
            <p className="itinerary-preview__eyebrow">Your Itinerary</p>
            <h3 className="itinerary-preview__name">{selectedItinerary.name}</h3>
            <div className="itinerary-preview__timeline">
              <ItineraryTimeline stops={selectedItinerary.stops} />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function PanelSwitch({ activeKey, reduced, children }) {
  if (!activeKey) return null;
  if (reduced) return <div className="choose-itinerary__panel">{children}</div>;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        className="choose-itinerary__panel"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function MixMatchPanel() {
  const { state, setMixMatchItems } = usePlanner();
  const [openSwap, setOpenSwap] = useState(null);

  useEffect(() => {
    if (state.mixMatchItems.length === 0) {
      setMixMatchItems(generateMixMatchItems(state.survey));
    }
    // Generate once per entry into this mode — re-running on every survey
    // edit would yank activities out from under an in-progress swap.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = state.mixMatchItems;
  const dayCount = getDayCount(state.survey);
  const totalSlots = dayCount * SLOT_ORDER.length;

  const balance = { rest: 0, movement: 0, foodTherapy: 0 };
  items.forEach((it) => {
    const activity = findActivity(it.activityId);
    if (activity) balance[activity.pillar] += 1;
  });

  function handleSwap(day, slot, newId) {
    setMixMatchItems(items.map((it) => (it.day === day && it.slot === slot ? { ...it, activityId: newId } : it)));
    setOpenSwap(null);
  }

  return (
    <div className="plan-builder">
      <p className="plan-builder__intro">Start from a plan shaped for you. Swap what you like.</p>
      <div className="plan-builder__meta">
        <p className="plan-builder__balance">
          Rest {balance.rest} · Movement {balance.movement} · Food Therapy {balance.foodTherapy}
        </p>
        <p className="plan-builder__counter">
          {items.length} of {totalSlots} slots filled
        </p>
      </div>

      <div className="plan-builder__days">
        {Array.from({ length: dayCount }).map((_, dayIndex) => (
          <div className="plan-day" key={dayIndex}>
            <p className="plan-day__label">Day {dayIndex + 1}</p>
            {SLOT_ORDER.map((slot) => {
              const entry = items.find((it) => it.day === dayIndex && it.slot === slot);
              const activity = entry ? findActivity(entry.activityId) : null;
              const swapKey = `${dayIndex}-${slot}`;
              const alternatives = activity ? swapAlternatives(activity.pillar, activity.id) : [];

              return (
                <div className="plan-slot" key={slot}>
                  <p className="plan-slot__label">{SLOT_LABELS[slot]}</p>
                  {activity ? (
                    <div className="plan-slot__activity">
                      <div className="plan-slot__activity-top">
                        <span className="plan-slot__name">{activity.name}</span>
                        {activity.fv ? <FermentationTag /> : null}
                      </div>
                      <p className="plan-slot__time">{activity.schedule}</p>
                      <button
                        type="button"
                        className="plan-slot__swap-btn"
                        onClick={() => setOpenSwap(openSwap === swapKey ? null : swapKey)}
                      >
                        Swap
                      </button>
                      {openSwap === swapKey ? (
                        <div className="plan-slot__swap-list">
                          {alternatives.map((alt) => (
                            <button
                              type="button"
                              key={alt.id}
                              className="plan-slot__swap-option"
                              onClick={() => handleSwap(dayIndex, slot, alt.id)}
                            >
                              {alt.name}
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <p className="plan-slot__empty">Open</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildOwnPanel() {
  const { state, addBuildOwnItem, removeBuildOwnItem } = usePlanner();
  const dayCount = getDayCount(state.survey);
  const items = state.buildOwnItems;

  const [activeFilters, setActiveFilters] = useState(() =>
    Object.fromEntries(offeringsTabs.map((p) => [p.id, offeringsTabGroups[p.id][0].id])),
  );

  return (
    <div className="plan-builder plan-builder--scratch">
      <p className="plan-builder__intro">Start with a blank week. Add only what speaks to you.</p>
      <p className="plan-builder__counter">
        {items.length} {items.length === 1 ? 'activity' : 'activities'} selected
      </p>

      <div className="plan-builder__days plan-builder__days--scratch">
        {Array.from({ length: dayCount }).map((_, dayIndex) => {
          const dayItems = items.filter((it) => it.day === dayIndex);
          return (
            <div className="plan-day plan-day--scratch" key={dayIndex}>
              <p className="plan-day__label">Day {dayIndex + 1}</p>
              {dayItems.length === 0 ? (
                <p className="plan-day__empty">Nothing added yet</p>
              ) : (
                <ul className="plan-day__list">
                  {dayItems.map((it) => {
                    const activity = findActivity(it.activityId);
                    if (!activity) return null;
                    return (
                      <li className="plan-day__item" key={`${it.day}-${it.activityId}`}>
                        <div className="plan-day__item-info">
                          <span className="plan-day__item-name">{activity.name}</span>
                          <span className="plan-day__item-time">{activity.schedule}</span>
                        </div>
                        <button
                          type="button"
                          className="plan-day__remove"
                          aria-label={`Remove ${activity.name} from Day ${dayIndex + 1}`}
                          onClick={() => removeBuildOwnItem(dayIndex, activity.id)}
                        >
                          ×
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="activity-library">
        {offeringsTabs.map((pillarTab) => (
          <div className="activity-library__group" key={pillarTab.id}>
            <p className="activity-library__group-label">{PILLAR_LABELS[pillarTab.id]}</p>
            <div className="activity-library__filters">
              {offeringsTabGroups[pillarTab.id].map((sub) => (
                <button
                  type="button"
                  key={sub.id}
                  className={`activity-library__filter ${
                    activeFilters[pillarTab.id] === sub.id ? 'activity-library__filter--active' : ''
                  }`}
                  onClick={() => setActiveFilters((f) => ({ ...f, [pillarTab.id]: sub.id }))}
                >
                  {sub.label}
                </button>
              ))}
            </div>
            <div className="activity-library__list">
              {offeringsActivities
                .filter((a) => a.pillar === pillarTab.id && a.tab === activeFilters[pillarTab.id])
                .map((activity) => (
                  <div className="activity-library__item" key={activity.id}>
                    <div className="activity-library__item-info">
                      <span className="activity-library__item-name">{activity.name}</span>
                      {activity.fv ? <FermentationTag /> : null}
                      {activity.scheduleHint ? (
                        <span className="activity-library__hint">{activity.scheduleHint}</span>
                      ) : null}
                    </div>
                    <div className="activity-library__add-days">
                      <span className="activity-library__add-label">Add to day</span>
                      {Array.from({ length: dayCount }).map((_, dayIndex) => (
                        <button
                          type="button"
                          key={dayIndex}
                          className="activity-library__add-btn"
                          onClick={() => addBuildOwnItem(dayIndex, activity.id)}
                          aria-label={`Add ${activity.name} to Day ${dayIndex + 1}`}
                        >
                          {dayIndex + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
