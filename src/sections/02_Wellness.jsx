import { SectionHeading } from '../components/ui/SectionHeading';
import { ParallaxCollage } from '../components/motion/ParallaxCollage';
import { RevealGroup, RevealItem } from '../components/motion/Reveal';
import { wellnessPillars } from '../data/content';
import './02_Wellness.css';

export function Wellness() {
  const [movement, rest, foodTherapy] = wellnessPillars.pillars;

  return (
    <section className="wellness section" id="wellness">
      <div className="container">
        <SectionHeading
          eyebrow={wellnessPillars.eyebrow}
          heading={wellnessPillars.heading}
          body={wellnessPillars.body}
        />
      </div>

      <div className="container wellness__collage-wrap">
        <ParallaxCollage
          className="wellness__collage"
          height="620px"
          layers={[
            { image: movement.image, aspect: '4 / 5', speed: 0.1 },
            { image: rest.image, aspect: '1 / 1', speed: 0.18 },
            { image: foodTherapy.image, aspect: '4 / 3', speed: 0.14 },
          ]}
        />
      </div>

      <div className="container">
        <RevealGroup as="div" className="wellness__pillars-row" stagger={0.1}>
          {wellnessPillars.pillars.map((pillar) => (
            <RevealItem as="div" className="wellness__pillar" key={pillar.id}>
              <p className="wellness__pillar-label">{pillar.label}</p>
              <p className="wellness__pillar-body">{pillar.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
