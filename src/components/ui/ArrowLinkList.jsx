import { motion } from 'motion/react';
import './ArrowLinkList.css';

/**
 * Plain text rows separated by hairline dividers, each ending in a "→"
 * that slides right and turns plum on hover — the list pattern used for
 * "SIX SENSES THIMPHU / PUNAKHA / PARO..." and "WHEN TO VISIT / HOW TO GET
 * THERE..." in the reference recording.
 */
export function ArrowLinkList({ items, onSelect, activeId }) {
  return (
    <ul className="arrow-link-list">
      {items.map((item) => {
        const isActive = activeId != null && item.id === activeId;
        const Tag = onSelect ? 'button' : 'a';
        return (
          <li key={item.id ?? item.label} className="arrow-link-list__row">
            <Tag
              className={`arrow-link-list__link ${isActive ? 'arrow-link-list__link--active' : ''}`}
              href={onSelect ? undefined : item.href}
              onClick={onSelect ? () => onSelect(item.id) : undefined}
              type={onSelect ? 'button' : undefined}
            >
              <span>{item.label}</span>
              <motion.span className="arrow-link-list__arrow" aria-hidden="true">
                →
              </motion.span>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}
