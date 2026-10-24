import { AnimatePresence, motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/motion/Reveal';
import { Pill } from '../components/ui/Pill';
import { usePlanner } from '../context/PlannerContext';
import { surveyQuestions, diningStyleQuestion } from '../data/survey';
import { rooms } from '../data/accommodation';
import { itineraries } from '../data/itineraries';
import { offeringsActivities } from '../data/activities';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './09_ReviewBooking.css';

function labelFor(options, id) {
  return options.find((o) => o.id === id)?.label ?? null;
}

export function ReviewBooking() {
  const { state, setContactField, submit } = usePlanner();
  const reduced = useReducedMotion();

  const room = rooms.find((r) => r.id === state.roomId);
  const suggestedItinerary = itineraries.find((it) => it.id === state.itineraryId);
  const customActivityNames = state.customActivities
    .map((id) => offeringsActivities.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const summaryRows = [
    { label: 'Length of stay', value: state.survey.nights ? `${state.survey.nights} Nights` : null },
    { label: 'Focus', value: labelFor(surveyQuestions[1].options, state.survey.focus) },
    { label: 'Pace', value: labelFor(surveyQuestions[2].options, state.survey.pace) },
    { label: "Who's travelling", value: labelFor(surveyQuestions[3].options, state.survey.travellingAs) },
    { label: 'Dietary notes', value: state.survey.dietary || null },
    { label: 'Dining style', value: labelFor(diningStyleQuestion.options, state.survey.diningStyle) },
    { label: 'Accommodation', value: room ? `${room.name} — ${room.rateFrom}/night` : null },
    {
      label: 'Itinerary',
      value:
        state.itineraryMode === 'suggested' && suggestedItinerary
          ? suggestedItinerary.name
          : customActivityNames.length
            ? `${customActivityNames.length} activities: ${customActivityNames.slice(0, 4).join(', ')}${customActivityNames.length > 4 ? '…' : ''}`
            : null,
    },
  ].filter((row) => row.value);

  function handleSubmit(e) {
    e.preventDefault();
    submit();
  }

  return (
    <section className="review-booking section section--greige" id="review-booking">
      <div className="container">
        <SectionHeading
          eyebrow="Almost There"
          heading="Review & request booking"
          body="A last look at the stay you've shaped — then a few details so we can hold it for you."
        />

        <div className="review-booking__layout">
          <Reveal as="div" className="review-booking__summary">
            <p className="review-booking__summary-heading">Your plan</p>
            {summaryRows.length === 0 ? (
              <p className="review-booking__empty">Answer the questions above and your plan will appear here.</p>
            ) : (
              <dl className="review-booking__list">
                {summaryRows.map((row) => (
                  <div className="review-booking__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>

          <div className="review-booking__form-wrap">
            <AnimatePresence mode="wait">
              {state.submitted ? (
                <ConfirmationPanel key="confirmation" reduced={reduced} />
              ) : (
                <motion.form
                  key="form"
                  className="review-booking__form"
                  onSubmit={handleSubmit}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="review-booking__summary-heading">Your details</p>

                  <label className="review-booking__field">
                    <span>Full name</span>
                    <input
                      required
                      type="text"
                      value={state.contact.name}
                      onChange={(e) => setContactField('name', e.target.value)}
                    />
                  </label>

                  <div className="review-booking__field-row">
                    <label className="review-booking__field">
                      <span>Email</span>
                      <input
                        required
                        type="email"
                        value={state.contact.email}
                        onChange={(e) => setContactField('email', e.target.value)}
                      />
                    </label>
                    <label className="review-booking__field">
                      <span>Phone</span>
                      <input
                        type="tel"
                        value={state.contact.phone}
                        onChange={(e) => setContactField('phone', e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="review-booking__field">
                    <span>Preferred arrival date</span>
                    <input
                      type="date"
                      value={state.contact.arrivalDate}
                      onChange={(e) => setContactField('arrivalDate', e.target.value)}
                    />
                  </label>

                  <label className="review-booking__field">
                    <span>Anything else we should know?</span>
                    <textarea
                      rows={3}
                      value={state.contact.requests}
                      onChange={(e) => setContactField('requests', e.target.value)}
                    />
                  </label>

                  <Pill as="button" type="submit" variant="plum" size="lg" className="review-booking__submit">
                    Request Booking
                  </Pill>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfirmationPanel({ reduced }) {
  return (
    <motion.div
      className="confirmation"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="confirmation__mark" aria-hidden="true">
        ✓
      </span>
      <h3>Your request has been received</h3>
      <p>
        Thank you for shaping your Green Season stay with us. A member of our reservations team will
        be in touch shortly to confirm the details and complete your booking.
      </p>
    </motion.div>
  );
}
