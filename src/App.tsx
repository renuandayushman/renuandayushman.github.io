import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/common/HeaderNav';
import { HeroSection } from './components/sections/HeroSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { VenueSection } from './components/sections/VenueSection';
import { ExploreAlleppeySection } from './components/sections/ExploreAlleppeySection';
import { GuestConnectionSection } from './components/sections/GuestConnectionSection';
import { ConciergeSection } from './components/sections/ConciergeSection';
import { RsvpSection } from './components/sections/RsvpSection';
import { FooterSection } from './components/sections/FooterSection';
import { AudioAmbientPlayer } from './components/common/AudioAmbientPlayer';
import { InviteQrModal } from './components/common/InviteQrModal';

export const App: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  // Smooth auto-scroll for guests scanning the physical invite QR code
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

        // Immediate attempt
        scrollToRsvp();
        // Follow-ups to guarantee accurate positioning after webfonts and dynamic elements render
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#222422] relative selection:bg-[#C5A059]/20 selection:text-[#4A5D4E]">
      {/* Floating Header Navigation */}
      <HeaderNav />

      {/* Main Sections */}
      <main>
        {/* 1. Hero: The Vellum Envelope */}
        <HeroSection />

        {/* 2. Timeline: The Day's Flow */}
        <TimelineSection />

        {/* 3. Venue & Stay: Punnamada Resort */}
        <VenueSection />

        {/* 4. Explore Alleppey: Venice of the East */}
        <ExploreAlleppeySection />

        {/* 5. Guest Hub: Meet the Crew, Cab Pool & Trivia */}
        <GuestConnectionSection />

        {/* 6. Concierge: Who to Reach Out To */}
        <ConciergeSection />

        {/* 7. Native RSVP Portal & Gift Note */}
        <RsvpSection onOpenQrModal={() => setQrModalOpen(true)} />
      </main>

      {/* Footer */}
      <FooterSection onOpenQrModal={() => setQrModalOpen(true)} />

      {/* Ambient Backwater Audio Player Toggle */}
      <AudioAmbientPlayer />

      {/* Physical Invite QR & Print Assets Modal */}
      <InviteQrModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </div>
  );
};

export default App;
