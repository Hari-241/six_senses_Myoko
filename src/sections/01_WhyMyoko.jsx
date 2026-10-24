import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal';
import { SplitHeading } from '../components/motion/SplitHeading';
import { RevealImage } from '../components/motion/RevealImage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { whyMyoko } from '../data/content';
import './01_WhyMyoko.css';

export function WhyMyoko() {
  const bgRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section className="why-myoko section" id="why-myoko">
      <div className="why-myoko__hero" ref={bgRef}>
        <motion.div className="why-myoko__hero-image" style={{ y: bgY }}>
          <img src={whyMyoko.backgroundImage.src} alt={whyMyoko.backgroundImage.alt} />
        </motion.div>
        <div className="why-myoko__scrim" />
        <div className="why-myoko__hero-content container">
          <SplitHeading as="h2" text={whyMyoko.heading} className="why-myoko__title" />
          <Reveal as="p" delay={0.2} className="why-myoko__body">
            {whyMyoko.body}
          </Reveal>
        </div>
      </div>

      <RevealGroup as="div" className="why-myoko__seasons container" stagger={0.12}>
        {whyMyoko.seasons.map((season) => (
          <RevealItem as="div" className="season-card" key={season.id}>
            <RevealImage image={season.image} aspect="4 / 5" className="season-card__image" />
            <p className="season-card__label">{season.label}</p>
            <p className="season-card__body">{season.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
