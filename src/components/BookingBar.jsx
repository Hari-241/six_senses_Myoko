import { motion } from 'motion/react';
import { Pill } from './ui/Pill';
import './BookingBar.css';

/**
 * The white rounded search card overlapping the hero's lower edge —
 * confirmed in the reference recording. It's the visual handshake with
 * the real Six Senses booking page this site accompanies; SEARCH scrolls
 * down into the itinerary builder ("Or design your stay") rather than
 * performing a real search, since that's this site's actual job.
 */
export function BookingBar({ onSearch }) {
  return (
    <motion.div
      className="booking-bar"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <button type="button" className="booking-bar__field booking-bar__field--dates">
        <CalendarIcon />
        <span className="booking-bar__field-text">
          Check-in <ArrowIcon /> Check-out
        </span>
      </button>

      <span className="booking-bar__divider" aria-hidden="true" />

      <button type="button" className="booking-bar__field">
        <GuestsIcon />
        <span className="booking-bar__field-text">2 Adults, 0 Children</span>
      </button>

      <span className="booking-bar__divider" aria-hidden="true" />

      <button type="button" className="booking-bar__field booking-bar__field--codes">
        <span className="booking-bar__field-text booking-bar__field-text--muted">Special codes</span>
      </button>

      <Pill variant="plum" size="md" className="booking-bar__search" onClick={onSearch} icon={<SearchIcon />}>
        Search
      </Pill>
    </motion.div>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="11.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6.5H14.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 1.5V4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.5 1.5V4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.8 14c0-2.6 1.9-4.4 4.2-4.4s4.2 1.8 4.2 4.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="11.5" cy="5.5" r="1.8" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10.8 9.9c1.8 0.1 3.2 1.7 3.2 4" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <circle cx="5.7" cy="5.7" r="4.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 9L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" style={{ margin: '0 6px' }}>
      <path d="M1 5H11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7.5 1.5L11 5L7.5 8.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
