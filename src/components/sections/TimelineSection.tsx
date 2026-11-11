import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { WEDDING_DATA, TimelineEvent } from '../../data/weddingData';
import {
  NilavilakkuTempleLampIcon,
  IntertwinedRingsIcon,
  SadyaBananaLeafIcon,
  LawnGamesIcon,
  FireworksLakeIcon,
  ClinkingFlutesIcon,
  BotanicalDivider,
} from '../common/BotanicalMotifs';

export const TimelineSection: React.FC = () => {
  const [expandedEventId, setExpandedEventId] = useState<string | null>("registration-vows");

  const toggleEvent = (id: string) => {
    setExpandedEventId(prev => prev === id ? null : id);
  };

  const getEventIcon = (iconName: TimelineEvent['iconName']) => {
    switch (iconName) {
      case 'temple':
        return <NilavilakkuTempleLampIcon className="w-7 h-7 text-[#C5A059]" />;
      case 'rings':
        return <IntertwinedRingsIcon className="w-7 h-7 text-[#C5A059]" />;
      case 'sadya':
        return <SadyaBananaLeafIcon className="w-7 h-7 text-[#4A5D4E]" />;
      case 'games':
        return <LawnGamesIcon className="w-7 h-7 text-[#73957B]" />;
      case 'fireworks':
        return <FireworksLakeIcon className="w-7 h-7 text-[#C5A059]" />;
      case 'cocktail':
        return <ClinkingFlutesIcon className="w-7 h-7 text-[#B85D43]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="timeline-section" className="py-20 sm:py-28 px-4 max-w-4xl mx-auto relative overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
          Saturday, January 30, 2027
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          The Day's Flow
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl text-[#4A5D4E] mt-3 max-w-xl mx-auto">
          An intimate, celebratory journey from morning temple blessings to twilight backwater fireworks and starlit dancing.
        </p>
        <BotanicalDivider />
      </div>

      {/* Vertical Illustrated Timeline */}
      <div className="relative w-full overflow-hidden">
        {/* Central connecting line for desktop/tablet, left aligned for mobile */}
        <div className="absolute left-5 sm:left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C5A059]/30 via-[#4A5D4E]/30 to-[#C5A059]/30 transform md:-translate-x-1/2 pointer-events-none" />

        <div className="space-y-8 sm:space-y-12">
          {WEDDING_DATA.timeline.map((event, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedEventId === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-start w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node / Illustrated Icon Badge */}
                <div className="absolute left-5 sm:left-6 md:left-1/2 top-0 transform -translate-x-1/2 z-20 flex flex-col items-center">
                  <button
                    onClick={() => toggleEvent(event.id)}
                    aria-label={`View details for ${event.title}`}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#FAF7F2] border-2 shadow-md transition-all duration-300 hover:scale-110 ${
                      isExpanded
                        ? 'border-[#C5A059] ring-4 ring-[#C5A059]/20'
                        : 'border-[#4A5D4E]/30 hover:border-[#C5A059]'
                    }`}
                  >
                    {getEventIcon(event.iconName)}
                  </button>
                </div>

                {/* Event Card Content */}
                <div
                  className={`ml-13 sm:ml-16 md:ml-0 md:w-[45%] w-[calc(100%-3.25rem)] sm:w-[calc(100%-4rem)] ${
                    isEven ? 'md:pl-8' : 'md:pr-8'
                  }`}
                >
                  <div
                    onClick={() => toggleEvent(event.id)}
                    className={`cursor-pointer group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                      isExpanded
                        ? 'bg-[#FAF7F2] border-[#C5A059]/60 shadow-vellum-hover ring-1 ring-[#C5A059]/30'
                        : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-[#4A5D4E]/15 hover:border-[#C5A059]/40 hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {/* Period tag & Timing */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E]">
                        {event.period}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#866732]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-editorial text-2xl sm:text-2xl text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mt-0.5">
                      {event.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#4A4E4A] mt-3 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Expandable Details Tray */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[#C5A059]/20 space-y-2 text-xs"
                      >
                        <div className="flex items-start gap-2 text-[#4A5D4E]">
                          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                        {event.dressCode && (
                          <div className="flex items-start gap-2 text-[#7E3825] bg-[#FAF2EF] p-2 rounded-lg border border-[#B85D43]/20">
                            <span className="font-semibold shrink-0">Attire:</span>
                            <span>{event.dressCode}</span>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Bottom expand toggle hint */}
                    <div className="mt-3 flex items-center justify-end text-[11px] text-[#4A5D4E]/60 group-hover:text-[#4A5D4E]">
                      <span className="mr-1">{isExpanded ? "Collapse" : "Details & Attire"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#C5A059]' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
