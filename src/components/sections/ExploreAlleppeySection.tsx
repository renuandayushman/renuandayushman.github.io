import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Navigation } from 'lucide-react';
import { WEDDING_DATA, ExploreSpot } from '../../data/weddingData';
import { BotanicalDivider, KettuvallamHouseboatIcon, PalmBranchIcon } from '../common/BotanicalMotifs';

export const ExploreAlleppeySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'backwaters', label: 'Backwaters & Canals' },
    { id: 'beaches', label: 'Beaches & Sunset' },
    { id: 'culture', label: 'Temples & Heritage' },
    { id: 'flavors', label: 'Local Flavors' },
  ];

  const filteredSpots = activeCategory === 'all'
    ? WEDDING_DATA.exploreSpots
    : WEDDING_DATA.exploreSpots.filter(spot => spot.category === activeCategory);

  return (
    <section id="explore-section" className="py-20 sm:py-28 px-4 max-w-6xl mx-auto relative">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
          Venice of the East
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          Explore Alleppey
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl text-[#4A5D4E] mt-3 max-w-2xl mx-auto">
          Arriving early on January 29th or staying on after the weekend? Here is our handpicked guide to savoring the backwaters.
        </p>
        <BotanicalDivider />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#4A5D4E] text-[#FAF7F2] shadow-sm border border-[#C5A059]/40'
                : 'bg-white/80 text-[#4A4E4A] hover:bg-[#FAF7F2] border border-[#4A5D4E]/15'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredSpots.map((spot: ExploreSpot, index) => (
            <motion.div
              key={spot.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/30 rounded-3xl p-6 sm:p-8 shadow-vellum hover:shadow-vellum-hover transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top tag & Distance */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#866732] border border-[#C5A059]/30">
                    {spot.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A5D4E] font-medium">
                    <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{spot.distance}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
                  {spot.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#866732] font-medium mt-0.5 mb-4">
                  {spot.subtitle}
                </p>

                <p className="text-sm text-[#4A4E4A] leading-relaxed mb-6">
                  {spot.description}
                </p>
              </div>

              {/* Insider Highlight Box */}
              <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#4A5D4E]">
                  <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-[#866732]">
                    Our Insider Tip:
                  </span>
                  <span className="text-[#222422] font-medium truncate sm:overflow-visible">
                    {spot.highlight}
                  </span>
                </div>
              </div>

              {/* Decorative faint palm in card corner */}
              <div className="absolute right-4 bottom-4 w-16 h-16 text-[#4A5D4E]/05 pointer-events-none group-hover:text-[#C5A059]/10 transition-colors">
                <PalmBranchIcon className="w-full h-full" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Shikara Booking Suggestion */}
      <div className="mt-12 text-center p-6 rounded-3xl bg-[#4A5D4E]/06 border border-[#4A5D4E]/20 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <KettuvallamHouseboatIcon className="w-8 h-8 text-[#C5A059] shrink-0" />
          <div className="text-xs text-[#4A5D4E]">
            <span className="font-semibold block text-sm text-[#222422]">
              Want a private sunrise shikara arranged?
            </span>
            <span>Girish Chettan &amp; the Punnamada resort jetty can organize it in 5 minutes.</span>
          </div>
        </div>
        <a
          href="#concierge"
          className="shrink-0 px-4 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs font-medium hover:bg-[#3D4D40] transition-colors"
        >
          Contact Girish Chettan
        </a>
      </div>

    </section>
  );
};
