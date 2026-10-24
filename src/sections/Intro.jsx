import { Reveal } from '../components/motion/Reveal';
import { SplitHeading } from '../components/motion/SplitHeading';
import { introBlock } from '../data/content';
import './Intro.css';

/**
 * The connective block mirroring the reference's "Mindful journeys
 * through Bhutan's hidden valleys" — heading + body left, a CONTACT
 * column right, and a meta strip beneath. Not one of the brief's 9
 * numbered sections; it sets the frame before Section 1 begins.
 */
export function Intro() {
  return (
    <section className="intro section">
      <div className="container intro__grid">
        <div className="intro__main">
          <Reveal as="p" className="eyebrow">
            {introBlock.eyebrow}
          </Reveal>
          <SplitHeading as="h2" text={introBlock.heading} className="intro__heading" />
          <Reveal as="p" delay={0.15} className="intro__body">
            {introBlock.body}
          </Reveal>
        </div>

        <Reveal as="div" delay={0.25} className="intro__contact">
          <p className="intro__contact-heading">{introBlock.contact.heading}</p>
          <address className="intro__contact-lines">
            {introBlock.contact.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </Reveal>
      </div>

      <Reveal as="div" delay={0.3} className="intro__meta container">
        {introBlock.meta.map((item, i) => (
          <span className="intro__meta-item" key={item}>
            {i > 0 ? <span className="intro__meta-divider" aria-hidden="true" /> : null}
            {item}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
