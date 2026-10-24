import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RevealGroup, RevealItem } from './motion/Reveal';
import { FermentationTag } from './ui/FermentationTag';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './ItineraryTimeline.css';

/**
 * A scroll-driven vertical timeline: a rail that fills as you scroll past
 * it, with staggered stops (time label, title, optional Fermentation
 * Valley tag, description). Shared by Section 6's three curated
 * itineraries and Section 5's live "your itinerary" preview, so a guest
 * sees the exact same visual language whether they're browsing the
 * curated days or the one they've just built themselves.
 *
 * `stops`: [{ time, title, description, fv }]
 */
export function ItineraryTimeline({ stops, className }) {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1]);

  return (
    <div className={`itinerary-timeline ${className ?? ''}`} ref={containerRef}>
      <div className="itinerary-timeline__rail">
        <motion.div className="itinerary-timeline__fill" style={{ scaleY: lineScale }} />
      </div>

      <RevealGroup as="ol" className="itinerary-timeline__stops" stagger={0.1}>
        {stops.map((stop, i) => (
          <RevealItem as="li" className="itinerary-stop" key={`${stop.title}-${i}`}>
            <span className="itinerary-stop__dot" aria-hidden="true" />
            <p className="itinerary-stop__time">{stop.time}</p>
            <div className="itinerary-stop__body">
              <div className="itinerary-stop__title-row">
                <h4>{stop.title}</h4>
                {stop.fv ? <FermentationTag /> : null}
              </div>
              {stop.description ? <p>{stop.description}</p> : null}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
