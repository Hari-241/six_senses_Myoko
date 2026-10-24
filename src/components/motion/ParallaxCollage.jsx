import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { RevealImage } from './RevealImage';
import './ParallaxCollage.css';

/**
 * THE signature motion of the reference site: two or three hard-edged
 * photos overlapping each other at different scroll speeds, so the
 * composition reshuffles gently as the page scrolls. Confirmed from the
 * screen recording (not the static screenshots) — see the build plan's
 * "Reference recording" notes.
 *
 * Structurally self-contained on purpose, after an early version let
 * layers visually drift into neighbouring sections' text:
 *  - The FIRST layer in `layers` is the "anchor" — it spans the full
 *    width and renders in normal document flow (via its own
 *    aspect-ratio), so it alone defines the container's real height.
 *    No magic-number height guessing, and because it covers every pixel
 *    of the container, there's never a "dead zone" of bare background
 *    beside a smaller overlay — wherever an overlay doesn't reach, the
 *    anchor's own photo is still showing underneath.
 *  - Every other layer is a smaller overlay, absolutely positioned on
 *    top of one of the anchor's corners with a slight bleed past the
 *    frame for a genuine layered-photos look.
 *  - The container clips with `overflow: hidden`, so that bleed (and
 *    any parallax drift) is cleanly cropped at the collage's own edge
 *    and can never reach the section above or below.
 *
 * Pass 2–3 `layers`, each: { image, aspect, speed, layerClassName }.
 * `layerClassName` on an overlay layer picks its position/size from
 * ParallaxCollage.css (--secondary / --tertiary) — override with your
 * own class for a bespoke arrangement. `speed` is how far a layer drifts
 * as a fraction of its own height (0.06–0.12 reads well; this is
 * deliberately subtle now that drift is clipped rather than contained by
 * careful spacing).
 *
 * Photography-only, no text overlay — put accompanying copy in a
 * normal-flow block beside or below the collage instead (see Section 2).
 *
 * Entrance reveal: the outer collage element (untransformed, unclipped
 * by anything above it) is the single `whileInView` trigger; every
 * layer's RevealImage runs in `controlled` mode and inherits the
 * "show" state via variant propagation. This is deliberate, not
 * incidental — each layer's own wrapper receives a continuous scroll-
 * driven `y` transform, and an image that self-observes for its entrance
 * from inside that transformed (and, for overlays, `overflow:hidden`-
 * clipped) hierarchy has been an actual, reproduced bug: the
 * IntersectionObserver can report zero visible area at the moment it
 * first checks, and since the trigger is once-only, it then never
 * recovers — the image stays invisible forever. Triggering from the one
 * stable, untransformed ancestor avoids that entirely.
 */
export function ParallaxCollage({ layers, className }) {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [anchor, ...overlays] = layers;

  const triggerProps = reduced
    ? {}
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-10% 0px -10% 0px' }, variants: { hidden: {}, show: {} } };

  return (
    <motion.div ref={containerRef} className={`parallax-collage ${className ?? ''}`} {...triggerProps}>
      <CollageLayer layer={anchor} index={0} isAnchor scrollYProgress={scrollYProgress} reduced={reduced} />
      {overlays.map((layer, i) => (
        <CollageLayer
          key={layer.key ?? layer.image?.src ?? i}
          layer={layer}
          index={i + 1}
          scrollYProgress={scrollYProgress}
          reduced={reduced}
        />
      ))}
    </motion.div>
  );
}

const OVERLAY_SLOTS = ['parallax-collage__layer--secondary', 'parallax-collage__layer--tertiary'];

function CollageLayer({ layer, index, isAnchor, scrollYProgress, reduced }) {
  const speed = layer.speed ?? (isAnchor ? 0.05 : 0.08);
  const range = reduced ? [0, 0] : [`${-speed * 100}%`, `${speed * 100}%`];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const slotClass = isAnchor
    ? 'parallax-collage__layer--anchor'
    : (layer.layerClassName ?? OVERLAY_SLOTS[index - 1] ?? OVERLAY_SLOTS[OVERLAY_SLOTS.length - 1]);

  return (
    <motion.div className={`parallax-collage__layer ${slotClass}`} style={{ y }}>
      <RevealImage image={layer.image} aspect={layer.aspect} delay={index * 0.12} controlled />
    </motion.div>
  );
}
