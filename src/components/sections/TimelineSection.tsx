import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { WEDDING_DATA, TimelineEvent } from '../../data/weddingData';
import {
  TempleLampLargeSketch,
  RingsAndCakeLargeSketch,
  SadyaLargeSketch,
  LawnGamesLargeSketch,
  FireworksLakeLargeSketch,
  DinnerCelebrationsLargeSketch,
  BotanicalDivider,
} from '../common/BotanicalMotifs';

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const renderIllustration = (iconName: TimelineEvent['iconName']) => {
    switch (iconName) {
      case 'temple':
        return <TempleLampLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      case 'rings':
        return <RingsAndCakeLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      case 'sadya':
        return <SadyaLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      case 'games':
        return <LawnGamesLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      case 'fireworks':
        return <FireworksLakeLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      case 'celebration':
        return <DinnerCelebrationsLargeSketch className="w-36 h-36 sm:w-44 sm:h-44" />;
      default:
        return null;
    }
  };

  return (
    <section id="timeline-section" ref={containerRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-24">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
          Saturday, January 30, 2027
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          The Day's Flow
        </h2>
        <p className="font-editorial italic text-base sm:text-lg text-[#4A5D4E]/80 mt-2">
          A serene journey along the backwaters from morning prayers to midnight stars
        </p>
        <BotanicalDivider className="my-6" />
      </div>

      {/* Winding Scrollytelling River Container */}
      <div className="relative">
        
        {/* Animated Serpentine River SVG (Desktop/Tablet) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 2400"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="riverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#4A5D4E" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#B85D43" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C5A059" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Faint static river bed outline */}
            <path
              d="M 400 0 
                 C 250 200, 200 350, 400 500 
                 C 600 650, 600 800, 400 950 
                 C 200 1100, 200 1250, 400 1400 
                 C 600 1550, 600 1700, 400 1850 
                 C 200 2000, 250 2200, 400 2400"
              stroke="#DECDB5"
              strokeWidth="4"
              strokeDasharray="4 6"
              opacity="0.5"
            />

            {/* Active animated scrollytelling river current */}
            <motion.path
              d="M 400 0 
                 C 250 200, 200 350, 400 500 
                 C 600 650, 600 800, 400 950 
                 C 200 1100, 200 1250, 400 1400 
                 C 600 1550, 600 1700, 400 1850 
                 C 200 2000, 250 2200, 400 2400"
              stroke="url(#riverGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
            />
          </svg>
        </div>

        {/* Milestones Flow */}
        <div className="space-y-16 sm:space-y-24">
          {WEDDING_DATA.timeline.map((event, index) => {
            const isLeft = event.side === 'left';
            const tiltAngle = isLeft ? '-rotate-1' : 'rotate-1';
            const sketchTilt = isLeft ? 'rotate-2' : '-rotate-2';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Milestone Node on Center Line */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] shadow-md flex items-center justify-center text-xs font-mono font-bold text-[#866732]">
                    0{index + 1}
                  </div>
                </div>

                {/* Left Column Component */}
                <div
                  className={`md:col-span-5 flex justify-center ${
                    isLeft ? 'order-1 md:order-1 md:justify-end' : 'order-2 md:order-1 md:justify-start'
                  }`}
                >
                  {isLeft ? (
                    /* Text Card on Left */
                    <div className={`stationery-card stationery-inner-border rounded-2xl p-6 sm:p-8 max-w-md w-full transform hover:rotate-0 transition-transform ${tiltAngle}`}>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E]">
                          {event.badge}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#866732] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422]">
                        {event.title}
                      </h3>
                      <p className="font-editorial italic text-sm sm:text-base text-[#4A5D4E] mt-2">
                        {event.caption}
                      </p>
                    </div>
                  ) : (
                    /* Large Sketch on Left */
                    <div className={`postage-stamp rounded-3xl p-4 sm:p-6 flex items-center justify-center transform hover:rotate-0 transition-transform ${sketchTilt}`}>
                      {renderIllustration(event.iconName)}
                    </div>
                  )}
                </div>

                {/* Empty Center Spacer for 12-Col Grid */}
                <div className="hidden md:block md:col-span-2" />

                {/* Right Column Component */}
                <div
                  className={`md:col-span-5 flex justify-center ${
                    isLeft ? 'order-2 md:order-3 md:justify-start' : 'order-1 md:order-3 md:justify-end'
                  }`}
                >
                  {isLeft ? (
                    /* Large Sketch on Right */
                    <div className={`postage-stamp rounded-3xl p-4 sm:p-6 flex items-center justify-center transform hover:rotate-0 transition-transform ${sketchTilt}`}>
                      {renderIllustration(event.iconName)}
                    </div>
                  ) : (
                    /* Text Card on Right */
                    <div className={`stationery-card stationery-inner-border rounded-2xl p-6 sm:p-8 max-w-md w-full transform hover:rotate-0 transition-transform ${tiltAngle}`}>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#B85D43]/10 text-[#B85D43]">
                          {event.badge}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#866732] bg-white/70 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422]">
                        {event.title}
                      </h3>
                      <p className="font-editorial italic text-sm sm:text-base text-[#4A5D4E] mt-2">
                        {event.caption}
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
