import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Standard scroll-triggered entrance: a gentle rise + fade, fired once as
 * the element crosses into view. Used for section headings, paragraphs,
 * cards — anything that isn't a full-bleed image (see RevealImage) or part
 * of the signature parallax collage (see ParallaxCollage).
 *
 * `as` lets the wrapper render as a semantic element (e.g. "ul", "li")
 * while still getting the motion treatment, since `motion.div` can't
 * always substitute for the tag a layout needs.
 */
export function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 40,
  duration,
  className,
  style,
  once = true,
  margin = '-12% 0px -12% 0px',
  ...rest
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration: duration ?? 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggers its direct children with the same rise+fade as Reveal. Pass
 * `stagger` to tune the per-child delay (seconds).
 */
export function RevealGroup({
  children,
  as = 'div',
  className,
  style,
  stagger = 0.1,
  once = true,
  margin = '-12% 0px -12% 0px',
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const revealItemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealItem({ as = 'div', children, className, style, ...rest }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag className={className} style={style} variants={revealItemVariants} {...rest}>
      {children}
    </MotionTag>
  );
}
