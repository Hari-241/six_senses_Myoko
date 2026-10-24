import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealImage } from '../components/motion/RevealImage';
import { Reveal } from '../components/motion/Reveal';
import { ItineraryTimeline } from '../components/ItineraryTimeline';
import { itineraries } from '../data/itineraries';
import './06_SuggestedItineraries.css';

export function SuggestedItineraries() {
  return (
    <section className="suggested-itineraries section section--greige" id="suggested-itineraries">
      <div className="container">
        <SectionHeading
          eyebrow="Three Days, Three Rhythms"
          heading="Suggested itineraries"
          body="Relaxing yet enriching — each day balances the valley's wellness pillars with the craft of its Fermentation Valley producers. Browse all three here, or shape your own above."
        />

        <div className="suggested-itineraries__list">
          {itineraries.map((itinerary) => (
            <article className="itinerary-block" key={itinerary.id}>
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

              <ItineraryTimeline stops={itinerary.stops} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
