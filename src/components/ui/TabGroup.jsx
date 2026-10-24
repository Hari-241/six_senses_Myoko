import { AnimatePresence, motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './TabGroup.css';

/**
 * A row of pill tabs sharing one animated highlight (Motion's `layoutId`),
 * which slides between tabs instead of each tab independently fading —
 * the "Our Offerings" tab treatment. Pass a stable `layoutId` per
 * independent tab group on the page (so two tab groups don't fight over
 * the same shared element).
 */
export function TabGroup({ tabs, activeId, onChange, layoutId, size = 'md' }) {
  const reduced = useReducedMotion();

  return (
    <div className={`tab-group tab-group--${size}`} role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`tab-group__tab ${isActive ? 'tab-group__tab--active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {isActive && !reduced ? (
              <motion.span
                layoutId={layoutId}
                className="tab-group__highlight"
                transition={{ type: 'spring', stiffness: 360, damping: 32 }}
              />
            ) : null}
            {isActive && reduced ? <span className="tab-group__highlight" /> : null}
            <span className="tab-group__label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Crossfades its children whenever `activeKey` changes — wrap the panel
 * content that a TabGroup controls in this so switching tabs feels like a
 * soft dissolve rather than a hard cut.
 */
export function TabPanel({ activeKey, children, className }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        className={className}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
