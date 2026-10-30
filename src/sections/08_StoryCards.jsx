import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { producers } from '../data/producers';
import './08_StoryCards.css';

export function StoryCards() {
  return (
    <section className="story-cards section" id="story-cards">
      <div className="container">
        <SectionHeading
          eyebrow="The Valley's Craftspeople"
          heading="Producer stories"
          body="Fermentation Valley NAGANO is a network of small, generations-deep businesses behind the craft woven through every Green Season stay."
        />

        <div className="story-cards__grid story-cards__grid--producers">
          {producers.map((producer, i) => (
            <Card
              key={producer.id}
              image={producer.image}
              aspect="4 / 5"
              fv
              eyebrow={producer.knownFor}
              title={producer.name}
              delay={i * 0.04}
              footer={
                <div className="story-cards__footer">
                  <p className="story-cards__insight">{producer.insight}</p>
                  <p className="story-cards__meta">
                    {producer.location} &middot; {producer.founded}
                  </p>
                </div>
              }
            >
              <p className="story-cards__story">{producer.story}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
