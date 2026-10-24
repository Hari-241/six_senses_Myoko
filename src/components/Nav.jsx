import { Pill } from './ui/Pill';
import './Nav.css';

/**
 * Solid cream bar, always — confirmed from the reference recording the
 * nav never goes transparent-over-hero, it's static chrome from the very
 * top of the page. Hamburger + language selector left, wordmark centred,
 * LOGIN (outline) + BOOK NOW (plum) right.
 */
export function Nav({ onBookNow }) {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <div className="nav__left">
          <button type="button" className="nav__hamburger" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
          <button type="button" className="nav__lang">
            EN
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
              <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <a href="#top" className="nav__wordmark">
          SIX SENSES
        </a>

        <div className="nav__right">
          <Pill variant="outline" size="sm">
            Login
          </Pill>
          <Pill variant="plum" size="sm" onClick={onBookNow}>
            Book Now
          </Pill>
        </div>
      </div>
    </header>
  );
}
