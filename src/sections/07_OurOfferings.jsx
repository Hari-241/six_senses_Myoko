import { useEffect, useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TabGroup, TabPanel } from '../components/ui/TabGroup';
import { Card } from '../components/ui/Card';
import { offeringsTabs } from '../data/content';
import { offeringsActivities, offeringsTabGroups } from '../data/activities';
import './07_OurOfferings.css';

export function OurOfferings() {
  const [pillar, setPillar] = useState(offeringsTabs[0].id);
  const [tab, setTab] = useState(offeringsTabGroups[offeringsTabs[0].id][0].id);

  useEffect(() => {
    setTab(offeringsTabGroups[pillar][0].id);
  }, [pillar]);

  const items = offeringsActivities.filter((a) => a.pillar === pillar && a.tab === tab);

  return (
    <section className="our-offerings section" id="our-offerings">
      <div className="container">
        <SectionHeading
          eyebrow="The Full Programme"
          heading="Our offerings"
          body="Specific, bookable moments across the three pillars — most run on a weekly rhythm, so a stay of any length can catch them."
        />

        <div className="our-offerings__pillar-tabs">
          <TabGroup tabs={offeringsTabs} activeId={pillar} onChange={setPillar} layoutId="offerings-pillar" />
        </div>

        <div className="our-offerings__subtabs">
          <TabGroup
            tabs={offeringsTabGroups[pillar]}
            activeId={tab}
            onChange={setTab}
            layoutId="offerings-subtab"
            size="sm"
          />
        </div>

        <TabPanel activeKey={`${pillar}-${tab}`} className="our-offerings__grid">
          {items.map((activity, i) => (
            <Card
              key={activity.id}
              image={activity.image}
              aspect="4 / 3"
              fv={activity.fv}
              eyebrow={activity.schedule}
              title={activity.name}
              delay={i * 0.05}
            >
              <p className="our-offerings__card-body">{activity.description}</p>
            </Card>
          ))}
        </TabPanel>
      </div>
    </section>
  );
}
