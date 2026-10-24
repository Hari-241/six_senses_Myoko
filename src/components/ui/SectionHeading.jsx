import { SplitHeading } from '../motion/SplitHeading';
import { Reveal } from '../motion/Reveal';
import './SectionHeading.css';

/**
 * The eyebrow / heading / body stack repeated throughout the reference
 * site — e.g. "SUSTAINABILITY" then "Preserving and protecting..." then
 * a paragraph. `align` controls text alignment for centred intro blocks
 * vs the usual left-aligned section openers.
 */
export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = 'left',
  as = 'h2',
  className,
  measure = true,
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className ?? ''}`}>
      {eyebrow ? (
        <Reveal as="p" className="eyebrow" duration={0.6}>
          {eyebrow}
        </Reveal>
      ) : null}
      <SplitHeading as={as} text={heading} className="section-heading__title" />
      {body ? (
        <Reveal
          as="p"
          delay={0.15}
          className={`section-heading__body ${measure ? 'section-heading__body--measure' : ''}`}
        >
          {body}
        </Reveal>
      ) : null}
    </div>
  );
}
