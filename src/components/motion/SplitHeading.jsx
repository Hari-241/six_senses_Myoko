import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './SplitHeading.css';

/**
 * Splits `text` into words, each masked inside overflow:hidden and
 * animated up from below its own clip line, staggered — the headline
 * reveal used for the hero title and major section headings.
 */
export function SplitHeading({
  as = 'h1',
  text,
  className,
  delay = 0,
  stagger = 0.08,
  viewport = true,
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = as;
  const words = String(text).split(' ');

  if (reduced) {
    return (
      <Tag className={className} {...rest}>
        {text}
      </Tag>
    );
  }

  // IMPORTANT: the IntersectionObserver trigger must live on an element
  // that is never itself clipped-to-nothing by the mask's overflow:hidden.
  // Putting whileInView on the transformed inner word would deadlock it —
  // while hidden (translateY 110%) the word's own clipped visible area is
  // zero, so the observer never reports it as intersecting, so it never
  // gets the nudge that would make it visible. Instead, the untransformed
  // mask span is the controller; the inner word is a controlled child that
  // inherits "hidden"/"show" via Motion's variant propagation.
  const animationProps = viewport
    ? { whileInView: 'show', viewport: { once: true, margin: '-10% 0px -10% 0px' } }
    : { animate: 'show' };

  return (
    <Tag className={`split-heading ${className ?? ''}`} {...rest}>
      {words.map((word, i) => (
        <motion.span
          className="split-heading__mask"
          key={`${word}-${i}`}
          initial="hidden"
          {...animationProps}
          variants={{ hidden: {}, show: {} }}
        >
          <motion.span
            className="split-heading__word"
            variants={{
              hidden: { y: '110%' },
              show: {
                y: '0%',
                transition: {
                  duration: 0.9,
                  delay: delay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
