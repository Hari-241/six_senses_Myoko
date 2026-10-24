import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SplitHeading } from './motion/SplitHeading';
import { BookingBar } from './BookingBar';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { images } from '../data/images';
import './Hero.css';

const SLIDES = [images.heroAlpineValley, images.heroOnsen, images.heroForest];
const AUTO_ADVANCE_MS = 6500;

export function Hero({ onSearch }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const timerRef = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [reduced]);

  function go(delta) {
    clearInterval(timerRef.current);
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
  }

  return (
    <section id="top" className="hero">
      <div className="hero__frame">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="hero__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              initial={{ scale: 1 }}
              animate={reduced ? { scale: 1 } : { scale: 1.08 }}
              transition={{ duration: 20, ease: 'linear' }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero__scrim" />

        <div className="hero__content container">
          <SplitHeading as="h1" text="Six Senses Myoko" className="hero__title" viewport={false} />
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Myoko, Japan
          </motion.p>
        </div>

        <button type="button" className="hero__chevron hero__chevron--prev" onClick={() => go(-1)} aria-label="Previous slide">
          ‹
        </button>
        <button type="button" className="hero__chevron hero__chevron--next" onClick={() => go(1)} aria-label="Next slide">
          ›
        </button>

        <div className="hero__dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={`hero__dot ${i === index ? 'hero__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <BookingBar onSearch={onSearch} />
    </section>
  );
}
