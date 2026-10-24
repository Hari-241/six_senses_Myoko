import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './RevealImage.css';

/**
 * A hard-edged (no border-radius, no shadow) image that wipes into view
 * from the bottom as it scrolls in, with a slight inner scale-down to
 * settle — the "curtain lifting" effect used throughout the reference
 * site's image reveals.
 *
 * `image` accepts the shape produced by the image manifest: { src, alt }.
 *
 * By default this self-triggers via its own `whileInView`. Pass
 * `controlled` when nesting this inside another element that itself
 * receives a scroll-driven transform or sits inside an `overflow:hidden`
 * ancestor (e.g. ParallaxCollage's layers) — self-observation from deep
 * inside that kind of hierarchy has been an actual, reproduced bug here:
 * the transformed/clipped ancestor chain can make IntersectionObserver
 * report zero visible area at the moment it first checks, and the
 * `once:true` trigger then never re-fires, leaving the image stuck
 * invisible forever. In `controlled` mode this component declares no
 * `initial`/`whileInView` of its own — it only exposes `variants`, so an
 * ancestor that isn't itself transformed/clipped can own the single
 * `whileInView` trigger and propagate "show" down to it.
 */
export function RevealImage({ image, aspect, className, delay = 0, priority = false, controlled = false }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className={`reveal-image reveal-image--static ${className ?? ''}`}
        style={aspect ? { aspectRatio: aspect } : undefined}
      >
        <img src={image.src} alt={image.alt ?? ''} loading={priority ? 'eager' : 'lazy'} />
      </div>
    );
  }

  const wipeVariants = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
    show: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] } },
  };
  const scaleVariants = {
    hidden: { scale: 1.18 },
    show: { scale: 1, transition: { duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] } },
  };

  const outerProps = controlled
    ? { variants: wipeVariants }
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, margin: '-10% 0px -10% 0px' },
        variants: wipeVariants,
      };

  const imgProps = controlled
    ? { variants: scaleVariants }
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, margin: '-10% 0px -10% 0px' },
        variants: scaleVariants,
      };

  return (
    <motion.div className={`reveal-image ${className ?? ''}`} style={aspect ? { aspectRatio: aspect } : undefined} {...outerProps}>
      <motion.img src={image.src} alt={image.alt ?? ''} loading={priority ? 'eager' : 'lazy'} {...imgProps} />
    </motion.div>
  );
}
