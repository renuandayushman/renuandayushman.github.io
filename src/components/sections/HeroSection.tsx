import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowDown } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { CountdownTimer } from '../common/CountdownTimer';
import { WaxSealEmblem, PalmBranchIcon, KettuvallamHouseboatIcon } from '../common/BotanicalMotifs';

export const HeroSection: React.FC = () => {
  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTimeline = () => {
    const el = document.getElementById('timeline-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden paper-texture">
      {/* Decorative Kerala Backwater Botanical Background Art */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {/* Palm tree silhouettes in corners */}
        <div className="absolute -top-12 -left-12 w-64 h-64 text-[#4A5D4E] transform rotate-12">
          <PalmBranchIcon className="w-full h-full" />
        </div>
        <div className="absolute -bottom-16 -right-16 w-80 h-80 text-[#4A5D4E] transform -rotate-45">
          <PalmBranchIcon className="w-full h-full" />
        </div>
        {/* Houseboat silhouette floating quietly */}
        <div className="absolute bottom-12 left-10 w-44 text-[#4A5D4E]/30 hidden md:block">
          <KettuvallamHouseboatIcon className="w-full h-auto" />
        </div>
        {/* Subtle circular ripple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C5A059]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-[#4A5D4E]/10" />
      </div>

      {/* Main Vellum Envelope Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full mx-auto"
      >
        <div className="relative backdrop-blur-xl bg-[#FAF7F2]/90 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl text-center">
          
          {/* Top Wax Seal */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <WaxSealEmblem size={58} />
            </motion.div>
          </div>

          {/* Invitation Invitation Line */}
          <div className="mt-4 mb-3">
            <span className="font-script text-2xl sm:text-3xl text-[#C5A059] block">
              with joyful hearts
            </span>
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#4A5D4E] font-medium mt-1">
              {WEDDING_DATA.couple.invitationNote}
            </p>
          </div>

          {/* Main Couple Names in High-Contrast Editorial Serif */}
          <div className="my-6">
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal text-[#222422] tracking-tight leading-[1.05]">
              {WEDDING_DATA.couple.bride}
              <span className="font-script text-4xl sm:text-5xl text-[#C5A059] mx-3 inline-block">
                &amp;
              </span>
              {WEDDING_DATA.couple.groom}
            </h1>
          </div>

          {/* Date & Destination Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-3 px-6 my-2 rounded-2xl bg-[#4A5D4E]/06 border border-[#4A5D4E]/15 text-[#4A5D4E]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {WEDDING_DATA.dates.displayDate}
              </span>
              <span className="text-xs font-mono text-[#C5A059] font-bold">
                ({WEDDING_DATA.dates.shortDate})
              </span>
            </div>
            <span className="hidden sm:inline text-[#C5A059]">✦</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Punnamada Resort, Alleppey
              </span>
            </div>
          </div>

          {/* Intimate Subtitle */}
          <p className="font-editorial italic text-base sm:text-lg text-[#4A5D4E]/80 max-w-md mx-auto my-4">
            {WEDDING_DATA.couple.subNote}
          </p>

          {/* Countdown Timer */}
          <div className="pt-2">
            <CountdownTimer targetDateISO={WEDDING_DATA.dates.weddingDateISO} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollToRsvp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] text-[#FAF7F2] font-medium text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group border border-[#C5A059]/40"
            >
              <span>Kindly RSVP</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={scrollToTimeline}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent hover:bg-[#4A5D4E]/08 text-[#4A5D4E] font-medium text-sm tracking-wider border border-[#4A5D4E]/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore The Day's Flow</span>
              <ArrowDown className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>

          {/* Bottom Delicate flourish */}
          <div className="mt-8 pt-4 border-t border-[#C5A059]/20 flex items-center justify-center gap-2 text-xs text-[#4A5D4E]/70 font-script text-base">
            <span>{WEDDING_DATA.couple.blessing}</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
