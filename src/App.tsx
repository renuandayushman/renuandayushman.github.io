import React, { useState, useEffect } from 'react';
import { BackgroundStationeryLayer } from './components/common/BackgroundStationeryLayer';
import { HeaderNav } from './components/common/HeaderNav';
import { HeroSection } from './components/sections/HeroSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { VenueExploreSection } from './components/sections/VenueExploreSection';
import { CrewTriviaSection } from './components/sections/CrewTriviaSection';
import { RsvpSection } from './components/sections/RsvpSection';
import { FooterSection } from './components/sections/FooterSection';
import { AudioAmbientPlayer } from './components/common/AudioAmbientPlayer';
import { InviteQrModal } from './components/common/InviteQrModal';

export const App: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Smooth auto-scroll for guests scanning physical invite QR code
  useEffect(() => {
    const handleDeepLink = () => {
      const isRsvpTarget =
        window.location.hash === '#rsvp-section' ||
        window.location.hash === '#rsvp' ||
        window.location.pathname === '/rsvp' ||
        window.location.pathname.endsWith('/rsvp') ||
        new URLSearchParams(window.location.search).has('rsvp');

      if (isRsvpTarget) {
        const scrollToRsvp = () => {
          const el = document.getElementById('rsvp-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };

        scrollToRsvp();
        const t1 = setTimeout(scrollToRsvp, 250);
        const t2 = setTimeout(scrollToRsvp, 750);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    };

    const cleanup = handleDeepLink();
    window.addEventListener('hashchange', handleDeepLink);
    return () => {
      cleanup?.();
      window.removeEventListener('hashchange', handleDeepLink);
    };
  }, []);

  return (
    <div className="min-h-screen text-[#222422] relative selection:bg-[#C5A059]/20 selection:text-[#4A5D4E] overflow-x-hidden">
      {/* 1. Full-Bleed Layered Composition with Multi-Toned Parallax Botanicals */}
      <BackgroundStationeryLayer />

      {/* 2. Floating Header Navigation */}
      <HeaderNav />

      {/* 3. Main Page Flow */}
      <main className="relative z-10">
        {/* Hero: Wide 12-Column Editorial Spread */}
        <HeroSection />

        {/* The Day's Flow: Winding Scrollytelling River with 140px-180px Sketches */}
        <TimelineSection />

        {/* The Setting: Prominent Punnamada Showcase & Vintage Postcard Moodboard */}
        <VenueExploreSection />

        {/* The Guest Circle & Music: Flippable Icebreaker Cards, Spinning Vinyl Widget & Trivia */}
        <CrewTriviaSection />

        {/* RSVP Portal: 2-Column Wide Stationery Card */}
        <RsvpSection onOpenQrModal={() => setQrModalOpen(true)} />
      </main>

      {/* 4. Footer & Discreet Help Desk */}
      <FooterSection onOpenQrModal={() => setQrModalOpen(true)} />

      {/* 5. Ambient Backwater Audio Player Toggle */}
      <AudioAmbientPlayer />

      {/* 6. Physical Invite QR & Print Assets Modal */}
      <InviteQrModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </div>
  );
};

export default App;
