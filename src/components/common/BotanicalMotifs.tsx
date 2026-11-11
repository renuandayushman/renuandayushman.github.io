import React from 'react';

// Elegant minimal line-art Kerala motifs in Kasavu Gold and Sage
export const PalmBranchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#C5A059]" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 42C12 30 20 18 38 8" />
    <path d="M14 34C18 31 24 29 28 30" />
    <path d="M19 27C24 23 31 22 36 24" />
    <path d="M25 20C30 16 38 15 42 18" />
    <path d="M30 13C35 10 41 9 44 12" />
    <path d="M12 36C8 31 7 24 9 19" />
    <path d="M18 29C15 23 15 16 19 12" />
    <path d="M24 22C23 15 25 9 30 6" />
  </svg>
);

export const KettuvallamHouseboatIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#4A5D4E]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Hull */}
    <path d="M6 46C14 49 48 49 58 43C56 38 52 38 46 38H16C10 38 7 42 6 46Z" fill="currentColor" fillOpacity="0.08" />
    {/* Thatched canopy arch */}
    <path d="M14 38C14 26 22 20 34 20C44 20 50 25 50 38" />
    {/* Thatch line textures */}
    <path d="M20 23V38" strokeDasharray="1 3" />
    <path d="M26 21V38" strokeDasharray="1 3" />
    <path d="M32 20V38" strokeDasharray="1 3" />
    <path d="M38 21V38" strokeDasharray="1 3" />
    <path d="M44 24V38" strokeDasharray="1 3" />
    {/* Boat bow & stern curls */}
    <path d="M6 46C4 44 3 40 5 36" />
    <path d="M58 43C61 40 62 36 60 32" />
    {/* Oar / pole */}
    <line x1="8" y1="36" x2="2" y2="52" />
    {/* Water ripples */}
    <path d="M4 53C12 55 20 52 28 54C36 56 44 53 52 55C56 56 60 54 62 53" />
    <path d="M10 57C18 59 26 56 34 58C42 60 50 57 58 59" strokeWidth="1.2" strokeOpacity="0.7" />
  </svg>
);

export const NilavilakkuTempleLampIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#C5A059]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Flame */}
    <path d="M32 6C32 6 27 13 27 17C27 20 29.2 22 32 22C34.8 22 37 20 37 17C37 13 32 6 32 6Z" fill="currentColor" fillOpacity="0.25" />
    {/* Top bird/crown finial */}
    <path d="M30 22H34V25H30Z" />
    {/* Oil dish upper */}
    <path d="M22 26C22 28 42 28 42 26C42 25 22 25 22 26Z" />
    <path d="M18 28C18 32 46 32 46 28H18Z" />
    {/* Pillar with ornamental notches */}
    <path d="M30 32V48" />
    <path d="M34 32V48" />
    <circle cx="32" cy="38" r="3.5" fill="currentColor" fillOpacity="0.15" />
    <path d="M28 44H36" />
    {/* Wide stepped base */}
    <path d="M24 49H40" />
    <path d="M18 53C18 51 46 51 46 53" />
    <path d="M14 57C14 55 50 55 50 57H14Z" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

export const IntertwinedRingsIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#C5A059]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Left ring */}
    <circle cx="27" cy="34" r="14" />
    <circle cx="27" cy="34" r="11" />
    {/* Right ring */}
    <circle cx="39" cy="30" r="14" />
    <circle cx="39" cy="30" r="11" />
    {/* Diamond gem on top */}
    <path d="M39 12L42 16H36L39 12Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M34 16L39 12L44 16" />
    {/* Subtle sparkle */}
    <path d="M46 10L49 13M49 10L46 13" strokeWidth="1.2" />
  </svg>
);

export const SadyaBananaLeafIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#4A5D4E]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Banana leaf contour */}
    <path d="M8 32C12 18 28 14 54 16C58 28 52 44 44 48C28 54 14 46 8 32Z" fill="currentColor" fillOpacity="0.12" />
    {/* Central vein */}
    <path d="M8 32C24 32 38 31 54 28" />
    {/* Leaf rib incisions */}
    <path d="M16 28L22 20" />
    <path d="M26 29L34 20" />
    <path d="M38 30L46 22" />
    <path d="M18 34L24 42" />
    <path d="M28 33L36 43" />
    <path d="M40 32L46 41" />
    {/* Rice mound & pappadam */}
    <ellipse cx="26" cy="32" rx="5" ry="3" fill="currentColor" fillOpacity="0.2" />
    <circle cx="38" cy="33" r="3.5" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

export const LawnGamesIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#73957B]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Carrom board square frame */}
    <rect x="14" y="14" width="36" height="36" rx="4" fill="currentColor" fillOpacity="0.08" />
    <rect x="18" y="18" width="28" height="28" rx="2" />
    {/* Center circle */}
    <circle cx="32" cy="32" r="6" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
    {/* Corner pockets */}
    <circle cx="19" cy="19" r="2.5" />
    <circle cx="45" cy="19" r="2.5" />
    <circle cx="19" cy="45" r="2.5" />
    <circle cx="45" cy="45" r="2.5" />
    {/* Diagonal lines */}
    <line x1="22" y1="22" x2="27" y2="27" strokeDasharray="1 2" />
    <line x1="42" y1="22" x2="37" y2="27" strokeDasharray="1 2" />
    <line x1="22" y1="42" x2="27" y2="37" strokeDasharray="1 2" />
    <line x1="42" y1="42" x2="37" y2="37" strokeDasharray="1 2" />
  </svg>
);

export const FireworksLakeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#C5A059]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Sky burst center */}
    <circle cx="32" cy="22" r="2" fill="currentColor" />
    {/* Burst rays */}
    <path d="M32 10V16" />
    <path d="M32 28V34" />
    <path d="M20 22H26" />
    <path d="M38 22H44" />
    <path d="M23 13L28 18" />
    <path d="M41 13L36 18" />
    <path d="M23 31L28 26" />
    <path d="M41 31L36 26" />
    {/* Little spark dots */}
    <circle cx="16" cy="18" r="1" fill="currentColor" />
    <circle cx="48" cy="18" r="1" fill="currentColor" />
    <circle cx="32" cy="6" r="1" fill="currentColor" />
    {/* Water reflection ripples */}
    <path d="M12 44C20 46 44 46 52 44" strokeWidth="1.2" />
    <path d="M18 49C26 51 38 51 46 49" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M24 54C28 55 36 55 40 54" strokeWidth="1" strokeOpacity="0.5" />
    {/* Reflected sparkle */}
    <line x1="32" y1="42" x2="32" y2="46" strokeWidth="1.2" strokeDasharray="1 2" />
  </svg>
);

export const ClinkingFlutesIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#C5A059]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Left Flute */}
    <path d="M20 12L25 28C25 31 22 34 22 37H28" />
    <path d="M28 14L25 28" />
    <line x1="25" y1="37" x2="25" y2="48" />
    <path d="M18 48H32" />
    {/* Right Flute (tilted to clink) */}
    <path d="M44 12L39 28C39 31 42 34 42 37H36" />
    <path d="M36 14L39 28" />
    <line x1="39" y1="37" x2="39" y2="48" />
    <path d="M32 48H46" />
    {/* Clink sparks */}
    <path d="M32 16L32 20" />
    <path d="M29 18L35 18" />
    <circle cx="32" cy="10" r="1" fill="currentColor" />
  </svg>
);

export const CelebratoryCakeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#B85D43]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Bottom tier */}
    <rect x="14" y="38" width="36" height="16" rx="2" fill="currentColor" fillOpacity="0.08" />
    <line x1="14" y1="44" x2="50" y2="44" strokeDasharray="2 3" />
    {/* Top tier */}
    <rect x="20" y="24" width="24" height="14" rx="2" fill="currentColor" fillOpacity="0.12" />
    <line x1="20" y1="30" x2="44" y2="30" strokeDasharray="2 3" />
    {/* Cake topper flowers / candles */}
    <line x1="32" y1="16" x2="32" y2="24" />
    <circle cx="32" cy="14" r="2" fill="currentColor" />
    <path d="M28 18C28 16 30 16 32 18" />
    <path d="M36 18C36 16 34 16 32 18" />
    {/* Cake stand base */}
    <path d="M10 54H54" strokeWidth="2" />
    <path d="M26 54L28 60H36L38 54" />
  </svg>
);

// Wax Seal Emblem: "R & A"
export const WaxSealEmblem: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 64 }) => (
  <div 
    className={`relative inline-flex items-center justify-center rounded-full bg-[#B85D43] text-[#FAF7F2] shadow-md border border-[#964730]/40 select-none ${className}`}
    style={{ width: size, height: size }}
  >
    {/* Organic melted wax edge styling */}
    <svg 
      className="absolute inset-0 w-full h-full text-[#9E4A32] opacity-40 pointer-events-none" 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
      <circle cx="50" cy="50" r="41" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
    </svg>
    <div className="relative text-center leading-none">
      <span className="font-editorial text-sm tracking-widest font-semibold text-[#FAF7F2]">R&amp;A</span>
      <div className="text-[8px] uppercase tracking-wider text-[#FAF7F2]/80 mt-0.5">30.01.27</div>
    </div>
  </div>
);

// Elegant Ornamental Flourish / Divider
export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center gap-3 text-[#C5A059] ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#C5A059]/70" />
    <div className="flex items-center gap-1.5 opacity-80">
      <span className="text-[10px] transform -rotate-45">✦</span>
      <PalmBranchIcon className="w-5 h-5 text-[#4A5D4E]" />
      <span className="text-[10px] transform rotate-45">✦</span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#C5A059]/70" />
  </div>
);
