import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Tracks the user's prefers-reduced-motion setting live (updates if they
 * change it mid-session, e.g. via OS settings while the tab is open).
 * Every animated component in this app should branch on this value so the
 * whole site degrades gracefully to a static, fully-readable page.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const handler = (event) => setReduced(event.matches);

    if (mql.addEventListener) {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
    // Safari < 14 fallback
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return reduced;
}
