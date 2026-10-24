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
 */
export function RevealImage({ image, aspect, className, delay = 0, priority = false }) {
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

  return (
    <motion.div
      className={`reveal-image ${className ?? ''}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={image.src}
        alt={image.alt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
