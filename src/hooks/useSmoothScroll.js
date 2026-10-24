import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Drives Lenis's inertial smooth scroll via requestAnimationFrame.
 *
 * Lenis scrolls the window natively (it dispatches real `scroll` events as
 * it animates), so Motion's `useScroll()` and any `whileInView` triggers
 * keep working without extra wiring — this hook is purely the engine.
 *
 * When the user prefers reduced motion we skip Lenis entirely and fall back
 * to plain native scrolling, which is both calmer and avoids fighting
 * assistive-tech scroll behaviour.
 */
export function useSmoothScroll(disabled = false) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (disabled) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out, matches --ease-out feel
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [disabled]);

  return lenisRef;
}
