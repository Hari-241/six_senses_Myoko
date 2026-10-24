import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { RevealImage } from './RevealImage';
import './ParallaxCollage.css';

/**
 * THE signature motion of the reference site: two or three hard-edged
 * photos overlapping each other at different scroll speeds, one usually
 * bleeding past the container's edge, so the composition continuously
 * reshuffles as the page scrolls. Confirmed from the screen recording
 * (not the static screenshots) — see the build plan's "Reference
 * recording" notes.
 *
 * Pass 2–3 `layers`, each: { image, aspect, speed, layerClassName }.
 * `layerClassName` picks the position/size from ParallaxCollage.css
 * (--primary / --secondary / --tertiary) — override with your own class
 * for a bespoke arrangement. `speed` is how far the layer drifts as a
 * fraction of its own height (0.08–0.22 reads well; higher = more drift).
 *
 * Deliberately photography-only, no text overlay: layers are absolutely
 * positioned (so they can overlap and bleed off the edge), which means
 * they don't contribute to the container's natural height — a caption
 * flowing inside one layer can silently overlap a neighbouring layer.
 * Put any accompanying copy in a normal-flow block beside or below the
 * collage instead (see Section 2 for the pattern).
 */
export function ParallaxCollage({ layers, className, height }) {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div
      ref={containerRef}
      className={`parallax-collage ${className ?? ''}`}
      style={height ? { minHeight: height } : undefined}
    >
      {layers.map((layer, index) => (
        <CollageLayer
          key={layer.key ?? layer.image?.src ?? index}
          layer={layer}
          index={index}
          scrollYProgress={scrollYProgress}
          reduced={reduced}
        />
      ))}
    </div>
  );
}

const DEFAULT_SLOTS = ['parallax-collage__layer--primary', 'parallax-collage__layer--secondary', 'parallax-collage__layer--tertiary'];

function CollageLayer({ layer, index, scrollYProgress, reduced }) {
  const speed = layer.speed ?? 0.14;
  const range = reduced ? [0, 0] : [`${-speed * 100}%`, `${speed * 100}%`];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const slotClass = layer.layerClassName ?? DEFAULT_SLOTS[index] ?? DEFAULT_SLOTS[DEFAULT_SLOTS.length - 1];

  return (
    <motion.div className={`parallax-collage__layer ${slotClass}`} style={{ y }}>
      <RevealImage image={layer.image} aspect={layer.aspect} delay={index * 0.12} />
    </motion.div>
  );
}
