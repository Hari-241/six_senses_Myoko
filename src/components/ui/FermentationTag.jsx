import './FermentationTag.css';

/**
 * Small moss-toned pill marking anything tied to a Fermentation Valley
 * NAGANO producer — used consistently across itineraries, offerings and
 * story cards per the brief's requirement to tag regional FV content.
 */
export function FermentationTag({ className }) {
  return (
    <span className={`fv-tag ${className ?? ''}`}>
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
        <circle cx="4.5" cy="4.5" r="4.5" fill="currentColor" />
      </svg>
      Fermentation Valley
    </span>
  );
}
