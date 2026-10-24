import { AnimatePresence, motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealGroup, RevealItem, Reveal } from '../components/motion/Reveal';
import { FermentationTag } from '../components/ui/FermentationTag';
import { ItineraryTimeline } from '../components/ItineraryTimeline';
import { usePlanner } from '../context/PlannerContext';
import { itineraries } from '../data/itineraries';
import { offeringsActivities } from '../data/activities';
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
    description: 'Start from the full programme and choose freely across Food Therapy, Rest and Movement.',
  },
  {
    id: 'buildOwn',
    title: 'Build Your Own From Scratch',
    description: 'An empty plan — add only what speaks to you, at your own pace.',
  },
];

export function ChooseItinerary() {
  const { state, setItineraryMode, setItineraryId, toggleCustomActivity } = usePlanner();
  const reduced = useReducedMotion();

  // Resolve a live preview of "your itinerary" so it's visible the moment
  // enough has been chosen — a suggested pick shows that curated day's
  // own timeline; Mix & Match / Build Your Own synthesise one from
  // whichever activities have been checked, in the same visual language.
  const selectedItinerary =
    state.itineraryMode === 'suggested' ? itineraries.find((it) => it.id === state.itineraryId) : null;

  const customStops =
    state.itineraryMode === 'mixMatch' || state.itineraryMode === 'buildOwn'
      ? offeringsActivities
          .filter((a) => state.customActivities.includes(a.id))
          .map((a) => ({ time: a.schedule, title: a.name, description: a.description, fv: a.fv }))
      : [];

  const previewStops = selectedItinerary ? selectedItinerary.stops : customStops;
  const previewLabel = selectedItinerary
    ? selectedItinerary.name
    : customStops.length
      ? `${customStops.length} ${customStops.length === 1 ? 'Activity' : 'Activities'}`
      : null;

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

          {state.itineraryMode === 'mixMatch' || state.itineraryMode === 'buildOwn' ? (
            <ActivityPicker
              selected={state.customActivities}
              onToggle={toggleCustomActivity}
            />
          ) : null}
        </PanelSwitch>

        {previewStops.length > 0 ? (
          <Reveal as="div" className="itinerary-preview">
            <p className="itinerary-preview__eyebrow">Your Itinerary</p>
            <h3 className="itinerary-preview__name">{previewLabel}</h3>
            <div className="itinerary-preview__timeline">
              <ItineraryTimeline stops={previewStops} />
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

function ActivityPicker({ selected, onToggle }) {
  return (
    <div className="activity-picker">
      <p className="activity-picker__count">
        {selected.length} {selected.length === 1 ? 'activity' : 'activities'} selected
      </p>
      {offeringsTabs.map((pillar) => (
        <div className="activity-picker__group" key={pillar.id}>
          <p className="activity-picker__group-label">{pillar.label}</p>
          <div className="activity-picker__list">
            {offeringsActivities
              .filter((a) => a.pillar === pillar.id)
              .map((activity) => {
                const isChecked = selected.includes(activity.id);
                return (
                  <button
                    type="button"
                    key={activity.id}
                    className={`activity-picker__item ${isChecked ? 'activity-picker__item--checked' : ''}`}
                    onClick={() => onToggle(activity.id)}
                    aria-pressed={isChecked}
                  >
                    <span className="activity-picker__checkbox" aria-hidden="true">
                      {isChecked ? '✓' : ''}
                    </span>
                    <span className="activity-picker__item-label">{activity.name}</span>
                    {activity.fv ? <FermentationTag /> : null}
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
