import { useEffect, useMemo, useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ArrowLinkList } from '../components/ui/ArrowLinkList';
import { RevealImage } from '../components/motion/RevealImage';
import { Reveal } from '../components/motion/Reveal';
import { Pill } from '../components/ui/Pill';
import { usePlanner, GROUP_SIZE_MAP } from '../context/PlannerContext';
import { roomsForGroupSize } from '../data/accommodation';
import './04_Accommodation.css';

export function Accommodation() {
  const { state, setRoom } = usePlanner();
  const groupSize = GROUP_SIZE_MAP[state.survey.travellingAs] ?? null;
  const filteredRooms = useMemo(() => roomsForGroupSize(groupSize), [groupSize]);

  const [viewingId, setViewingId] = useState(filteredRooms[0]?.id);

  useEffect(() => {
    if (!filteredRooms.find((r) => r.id === viewingId)) {
      setViewingId(filteredRooms[0]?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredRooms]);

  const room = filteredRooms.find((r) => r.id === viewingId) ?? filteredRooms[0];

  return (
    <section className="accommodation section" id="accommodation">
      <div className="container">
        <SectionHeading
          eyebrow="Where You'll Stay"
          heading="Accommodation"
          body={
            groupSize
              ? "Shown for the party size you told us about — change it any time by answering “Who's travelling?” above."
              : "Six Senses Myoko offers suites, villas and residences across the valley. Answer “Who's travelling?” above to see the rooms suited to your party."
          }
        />

        {room ? (
          <div className="accommodation__layout">
            <ArrowLinkList
              items={filteredRooms.map((r) => ({ id: r.id, label: r.name }))}
              activeId={viewingId}
              onSelect={setViewingId}
            />

            <Reveal as="div" key={room.id} className="accommodation__detail" delay={0.05}>
              <RevealImage image={room.image} aspect="3 / 2" className="accommodation__image" />
              <div className="accommodation__info">
                <h3>{room.name}</h3>
                <p className="accommodation__meta">
                  {room.size} &middot; {room.occupancy}
                </p>
                <ul className="accommodation__features">
                  {room.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="accommodation__footer">
                  <span className="accommodation__rate">
                    From <strong>{room.rateFrom}</strong> / night
                  </span>
                  <Pill
                    variant={state.roomId === room.id ? 'tan' : 'plum'}
                    onClick={() => setRoom(room.id)}
                  >
                    {state.roomId === room.id ? 'Selected' : 'Select'}
                  </Pill>
                </div>
              </div>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
