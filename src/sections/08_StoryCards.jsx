import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { producers } from '../data/producers';
import { activityStoryCards } from '../data/activities';
import './08_StoryCards.css';

export function StoryCards() {
  return (
    <section className="story-cards section" id="story-cards">
      <div className="container">
        <SectionHeading
          eyebrow="The Valley's Craftspeople"
          heading="Producer & activity stories"
          body="Fermentation Valley NAGANO is a network of small, generations-deep businesses — and the wellness experiences built around the valley itself."
        />

        <p className="story-cards__subheading">Producers</p>
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

        <p className="story-cards__subheading story-cards__subheading--second">Activities & Experiences</p>
        <div className="story-cards__grid story-cards__grid--activities">
          {activityStoryCards.map((activity, i) => (
            <Card
              key={activity.id}
              image={activity.image}
              aspect="4 / 3"
              title={activity.name}
              delay={i * 0.03}
              footer={<p className="story-cards__insight">{activity.insight}</p>}
            >
              <p className="story-cards__story story-cards__story--short">{activity.story}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
