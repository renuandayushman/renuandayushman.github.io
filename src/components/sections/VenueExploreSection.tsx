import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight, Compass } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import {
  BotanicalDivider,
  KettuvallamScenicSketch,
} from '../common/BotanicalMotifs';

export const VenueExploreSection: React.FC = () => {
  return (
    <section id="venue-explore" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
          The Destination
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          The Setting &amp; Haven
        </h2>
        <p className="font-editorial italic text-base sm:text-lg text-[#4A5D4E]/80 mt-2">
          Vembanad Lake, Alleppey &amp; the Kuttanad Canals
        </p>
        <BotanicalDivider className="my-6" />
      </div>

      {/* Editorial Collage Grid (Hero Resort Card + Asymmetric Moodboard Postcards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Prominent Hero Showcase Card for Punnamada Resort (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="stationery-card stationery-inner-border rounded-t-[3.5rem] rounded-b-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            
            {/* Top Postmark Stamp */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#866732] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                DESTINATION HAVEN • 688006
              </span>
              <div className="w-11 h-11 rounded-full border-2 border-dashed border-[#C5A059]/50 flex items-center justify-center text-[9px] font-mono text-[#866732] rotate-12">
                ALLEPPEY
              </div>
            </div>

            {/* Arch-Shaped Illustrated Heritage Resort Vignette */}
            <div className="w-full h-56 sm:h-64 rounded-t-[5rem] rounded-b-2xl bg-gradient-to-b from-[#FAF7F2] to-[#E4ECE6]/40 border border-[#C5A059]/40 flex flex-col items-center justify-center p-6 relative overflow-hidden my-4">
              <KettuvallamScenicSketch className="w-60 sm:w-72 h-auto text-[#4A5D4E]" />
              <div className="absolute bottom-3 text-center">
                <span className="text-[11px] font-editorial italic text-[#4A5D4E]/90">
                  Punnamada waterfront lawns &amp; heritage teak villas
                </span>
              </div>
            </div>

            {/* Resort Details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#866732]">
                  Resort Sanctuary
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#222422]">
                {WEDDING_DATA.venue.name}
              </h3>

              <p className="font-editorial italic text-sm sm:text-base text-[#4A5D4E] leading-relaxed">
                Sloping clay tiled roofs, open-roof courtyard bathrooms, and verandas opening onto the vast waters of Vembanad Lake. All events take place right here on the resort grounds.
              </p>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#C5A059]/25 flex flex-wrap items-center gap-3">
                <a
                  href={WEDDING_DATA.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={`tel:${WEDDING_DATA.venue.phone}`}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#4A5D4E] text-xs uppercase tracking-wider font-medium border border-[#4A5D4E]/25 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Front Desk</span>
                </a>
              </div>

              <div className="text-[11px] text-[#4A4E4A] flex items-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{WEDDING_DATA.venue.address}</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Asymmetric Postcard Moodboard (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Postcard 1: Shikara Canal Cruises (Canals) */}
          <motion.a
            href="https://maps.google.com/?q=Punnamada+Lake+Jetty+Alleppey"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="postage-stamp block rounded-2xl p-6 -rotate-1 hover:rotate-0 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E]">
                Backwaters • Resort Jetty
              </span>
              <span className="text-xs font-mono text-[#866732] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Explore ↗
              </span>
            </div>
            <h4 className="font-editorial text-2xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
              Shikara &amp; Canoe Rides
            </h4>
            <p className="font-editorial italic text-xs sm:text-sm text-[#4A4E4A] mt-1">
              Silent wooden glides through Kuttanad lotus canals &amp; kingfisher groves.
            </p>
          </motion.a>

          {/* Postcard 2: Marari Beach & Arabian Coast (Coast) */}
          <motion.a
            href="https://maps.google.com/?q=Marari+Beach+Alappuzha"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="postage-stamp block rounded-2xl p-6 rotate-2 hover:rotate-0 transition-all cursor-pointer group bg-gradient-to-br from-white/95 to-[#FAF6EE]"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#866732]">
                Coastline • 20 mins
              </span>
              <span className="text-xs font-mono text-[#866732] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Map ↗
              </span>
            </div>
            <h4 className="font-editorial text-2xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
              Marari Beach Sands
            </h4>
            <p className="font-editorial italic text-xs sm:text-sm text-[#4A4E4A] mt-1">
              Quiet coconut-lined Arabian Sea shoreline with crisp salty sunset air.
            </p>
          </motion.a>

          {/* Postcard 3: Alappuzha Pier & Lighthouse (Heritage) */}
          <motion.a
            href="https://maps.google.com/?q=Alappuzha+Lighthouse"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="postage-stamp block rounded-2xl p-6 -rotate-2 hover:rotate-0 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#B85D43]/10 text-[#B85D43]">
                Heritage • 1862 Port
              </span>
              <span className="text-xs font-mono text-[#866732] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Map ↗
              </span>
            </div>
            <h4 className="font-editorial text-2xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
              Alappuzha Pier &amp; Lighthouse
            </h4>
            <p className="font-editorial italic text-xs sm:text-sm text-[#4A4E4A] mt-1">
              Historic 150-year-old railway pier ruins stretching into the sea.
            </p>
          </motion.a>

          {/* Postcard 4: Toddy Shop Karimeen (Flavors) */}
          <motion.a
            href="https://maps.google.com/?q=Alappuzha+Backwater+Karimeen"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="postage-stamp block rounded-2xl p-6 rotate-1 hover:rotate-0 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#73957B]/15 text-[#4A5D4E]">
                Local Flavors
              </span>
              <span className="text-xs font-mono text-[#866732] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Map ↗
              </span>
            </div>
            <h4 className="font-editorial text-2xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
              Toddy Shop Karimeen
            </h4>
            <p className="font-editorial italic text-xs sm:text-sm text-[#4A4E4A] mt-1">
              Charred pearl spot in spicy banana leaves, hot parottas &amp; filter coffee.
            </p>
          </motion.a>

        </div>

      </div>

    </section>
  );
};
