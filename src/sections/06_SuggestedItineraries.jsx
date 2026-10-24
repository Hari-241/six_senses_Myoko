import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealImage } from '../components/motion/RevealImage';
import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal';
import { FermentationTag } from '../components/ui/FermentationTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { itineraries } from '../data/itineraries';
import './06_SuggestedItineraries.css';

export function SuggestedItineraries() {
  return (
    <section className="suggested-itineraries section section--greige" id="suggested-itineraries">
      <div className="container">
        <SectionHeading
          eyebrow="Three Days, Three Rhythms"
          heading="Suggested itineraries"
          body="Relaxing yet enriching — each day balances the valley's wellness pillars with the craft of its Fermentation Valley producers."
        />

        <div className="suggested-itineraries__list">
          {itineraries.map((itinerary) => (
            <ItineraryBlock key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ItineraryBlock({ itinerary }) {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1]);

  return (
    <article className="itinerary-block" ref={containerRef}>
      <div className="itinerary-block__header">
        <RevealImage image={itinerary.image} aspect="16 / 10" className="itinerary-block__image" />
        <div className="itinerary-block__intro">
          <Reveal as="h3" className="itinerary-block__name">
            {itinerary.name}
          </Reveal>
          <Reveal as="p" delay={0.1} className="itinerary-block__subtitle">
            {itinerary.subtitle}
          </Reveal>
        </div>
      </div>

      <div className="itinerary-timeline">
        <div className="itinerary-timeline__rail">
          <motion.div className="itinerary-timeline__fill" style={{ scaleY: lineScale }} />
        </div>

        <RevealGroup as="ol" className="itinerary-timeline__stops" stagger={0.12}>
          {itinerary.stops.map((stop) => (
            <RevealItem as="li" className="itinerary-stop" key={stop.title}>
              <span className="itinerary-stop__dot" aria-hidden="true" />
              <p className="itinerary-stop__time">{stop.time}</p>
              <div className="itinerary-stop__body">
                <div className="itinerary-stop__title-row">
                  <h4>{stop.title}</h4>
                  {stop.fv ? <FermentationTag /> : null}
                </div>
                <p>{stop.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </article>
  );
}
