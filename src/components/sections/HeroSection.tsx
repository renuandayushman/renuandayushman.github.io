import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowDown } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { WaxSealEmblem, KettuvallamScenicSketch } from '../common/BotanicalMotifs';

export const HeroSection: React.FC = () => {
  const scrollToTimeline = () => {
    const el = document.getElementById('timeline-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Wide 12-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Flanking Editorial Note (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-between h-full py-8 space-y-6"
          >
            {/* Tilted Vintage Stamp Card */}
            <div className="postage-stamp rounded-2xl p-5 -rotate-2 transform hover:rotate-0 transition-transform">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#866732] block mb-1">
                KERALA • 688006
              </span>
              <p className="font-editorial text-lg text-[#222422] leading-snug">
                An intimate celebration on the serene shores of Vembanad Lake.
              </p>
              <div className="mt-3 pt-2 border-t border-[#C5A059]/30 flex items-center justify-between text-[11px] text-[#4A5D4E]">
                <span>Alleppey, India</span>
                <span className="text-[#C5A059]">✦</span>
              </div>
            </div>

            {/* Scenic Kettuvallam Sketch */}
            <div className="opacity-80 p-2">
              <KettuvallamScenicSketch className="w-full h-auto text-[#4A5D4E]" />
            </div>
          </motion.div>

          {/* Center Main Vellum Stationery Envelope (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="stationery-card stationery-inner-border rounded-t-[3.5rem] rounded-b-3xl px-6 sm:px-10 py-14 sm:py-18 text-center relative shadow-xl">
              
              {/* Top Center Wax Seal */}
              <div className="flex justify-center -mt-6 mb-6">
                <WaxSealEmblem size={64} />
              </div>

              {/* Minimal Invitation Line */}
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#866732] font-semibold block mb-3">
                Wedding Celebration
              </span>

              {/* Couple Names */}
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal text-[#222422] tracking-tight leading-[1.08] my-3">
                {WEDDING_DATA.couple.bride}
                <span className="font-script text-3xl sm:text-4xl text-[#C5A059] mx-2.5 inline-block font-normal">
                  &amp;
                </span>
                {WEDDING_DATA.couple.groom}
              </h1>

              {/* Date & Destination Banner */}
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-[#4A5D4E]/06 border border-[#C5A059]/30 text-xs text-[#4A5D4E]">
                <div className="flex items-center gap-1.5 font-semibold text-[#866732]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>30.01.2027</span>
                </div>
                <span className="text-[#C5A059]/50">•</span>
                <div className="flex items-center gap-1.5 text-[#4A5D4E]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Punnamada Resort, Alleppey</span>
                </div>
              </div>

              {/* Minimal Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 pt-6 border-t border-[#C5A059]/20">
                <button
                  onClick={scrollToTimeline}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#4A5D4E]/30 text-[#4A5D4E] hover:bg-[#4A5D4E]/08 text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-1.5"
                >
                  <span>The Day's Flow</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>

                <button
                  onClick={scrollToRsvp}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium border border-[#C5A059]/40 shadow-sm transition-all hover:scale-[1.02]"
                >
                  Kindly RSVP
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Flanking Quick Info & Stamp (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col justify-between h-full py-8 space-y-6"
          >
            {/* Tilted Venue Card */}
            <div className="postage-stamp rounded-2xl p-5 rotate-2 transform hover:rotate-0 transition-transform">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B85D43] block mb-1">
                PUNNAMADA HAVEN
              </span>
              <p className="font-editorial text-lg text-[#222422] leading-snug">
                Traditional Kerala architecture along Vembanad Lake's quiet edge.
              </p>
              <div className="mt-3 pt-2 border-t border-[#C5A059]/30 flex items-center justify-between text-[11px] text-[#866732]">
                <span>RSVP by Dec 15</span>
                <span className="text-[#C5A059]">✦</span>
              </div>
            </div>

            {/* Botanical Monogram Seal Accent */}
            <div className="text-center p-4 rounded-2xl bg-white/50 border border-[#C5A059]/20">
              <span className="font-editorial text-2xl tracking-widest text-[#4A5D4E] block">
                R &amp; A
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#866732]">
                Alleppey, Kerala
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
