import { useCallback } from 'react';
import { PlannerProvider } from './context/PlannerContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Intro } from './sections/Intro';
import { WhyMyoko } from './sections/01_WhyMyoko';
import { Wellness } from './sections/02_Wellness';
import { DesignYourStay } from './sections/03_DesignYourStay';
import { Accommodation } from './sections/04_Accommodation';
import { ChooseItinerary } from './sections/05_ChooseItinerary';
import { OurOfferings } from './sections/07_OurOfferings';
import { StoryCards } from './sections/08_StoryCards';
import { ReviewBooking } from './sections/09_ReviewBooking';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function AppShell() {
  const reduced = useReducedMotion();
  useSmoothScroll(reduced);

  const handleBookNow = useCallback(() => scrollToId('design-stay'), []);
  const handleSearch = useCallback(() => scrollToId('design-stay'), []);

  return (
    <>
      <Nav onBookNow={handleBookNow} />
      <main>
        <Hero onSearch={handleSearch} />
        <Intro />
        <WhyMyoko />
        <Wellness />
        <DesignYourStay />
        <Accommodation />
        <ChooseItinerary />
        <OurOfferings />
        <StoryCards />
        <ReviewBooking />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <PlannerProvider>
      <AppShell />
    </PlannerProvider>
  );
}
