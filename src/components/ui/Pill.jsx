import { motion } from 'motion/react';
import './Pill.css';

/**
 * Fully-rounded pill button/link — the reference site's only rounded
 * shape (images stay hard-edged). `variant` controls fill:
 *  - "plum"    solid plum, white text (BOOK NOW, SEARCH, primary CTAs)
 *  - "outline" transparent with a hairline border (LOGIN)
 *  - "ghost"   no border until hover (used inside light panels)
 */
export function Pill({
  as = 'button',
  variant = 'plum',
  size = 'md',
  className,
  children,
  icon,
  ...rest
}) {
  const Tag = motion[as] ?? motion.button;
  return (
    <Tag
      className={`pill pill--${variant} pill--${size} ${className ?? ''}`}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      <span className="pill__label">{children}</span>
      {icon ? <span className="pill__icon">{icon}</span> : null}
    </Tag>
  );
}
