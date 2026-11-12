import React from 'react';

// ============================================================================
// 1. EXPRESSIVE LARGE 140px-180px SKETCHES FOR "THE DAY'S FLOW" SCROLLYTELLING
// ============================================================================

// A. Temple Visit — Nilavilakku Brass Lamp with Jasmine Flowers & Flame
export const TempleLampLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DEC286" />
        <stop offset="50%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#866732" />
      </linearGradient>
    </defs>
    {/* Soft ambient flame glow halo */}
    <circle cx="80" cy="30" r="28" fill="url(#flameGlow)" />
    
    {/* Holy Flame */}
    <path d="M80 14C80 14 72 24 72 31C72 35.4 75.6 39 80 39C84.4 39 88 35.4 88 31C88 24 80 14 80 14Z" fill="#C5A059" fillOpacity="0.85" />
    <path d="M80 20C80 20 75 27 75 31C75 33.8 77.2 36 80 36C82.8 36 85 33.8 85 31C85 27 80 20 80 20Z" fill="#FAF7F2" />

    {/* Top peacock/finial finery */}
    <path d="M78 39H82V45H78Z" fill="url(#brassGrad)" />
    <path d="M74 45C74 43 86 43 86 45" stroke="#866732" strokeWidth="1.5" />

    {/* Upper Oil Basin */}
    <path d="M60 47C60 45 100 45 100 47" stroke="#C5A059" strokeWidth="2" />
    <path d="M52 48C52 57 108 57 108 48H52Z" fill="url(#brassGrad)" fillOpacity="0.25" stroke="#866732" strokeWidth="1.8" />
    <ellipse cx="80" cy="48" rx="28" ry="4" stroke="#C5A059" strokeWidth="1.2" />

    {/* Hanging Jasmine Garland Swirls */}
    <path d="M54 53C48 64 48 84 58 92" stroke="#4A5D4E" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="50" cy="62" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />
    <circle cx="48" cy="74" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />
    <circle cx="56" cy="85" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />

    <path d="M106 53C112 64 112 84 102 92" stroke="#4A5D4E" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="110" cy="62" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />
    <circle cx="112" cy="74" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />
    <circle cx="104" cy="85" r="3" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" />

    {/* Pillar with Ornamental Rings & Ridges */}
    <rect x="76" y="56" width="8" height="52" fill="url(#brassGrad)" fillOpacity="0.3" stroke="#866732" strokeWidth="1.5" />
    <circle cx="80" cy="70" r="7" fill="url(#brassGrad)" stroke="#866732" strokeWidth="1.5" />
    <circle cx="80" cy="92" r="6" fill="url(#brassGrad)" stroke="#866732" strokeWidth="1.5" />
    <line x1="72" y1="80" x2="88" y2="80" stroke="#C5A059" strokeWidth="2" />
    <line x1="74" y1="102" x2="86" y2="102" stroke="#C5A059" strokeWidth="2" />

    {/* Stepped Heavy Brass Pedestal */}
    <path d="M64 108H96" stroke="#866732" strokeWidth="2" />
    <path d="M56 116C56 112 104 112 104 116" stroke="#866732" strokeWidth="2" />
    <path d="M46 124C46 118 114 118 114 124H46Z" fill="url(#brassGrad)" fillOpacity="0.3" stroke="#866732" strokeWidth="2" />
    <path d="M38 132C38 126 122 126 122 132H38Z" fill="url(#brassGrad)" fillOpacity="0.4" stroke="#866732" strokeWidth="2" />

    {/* Loose flower petals scattered on floor */}
    <ellipse cx="42" cy="138" rx="4" ry="2" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" transform="rotate(-15 42 138)" />
    <ellipse cx="64" cy="139" rx="4" ry="2" fill="#B85D43" fillOpacity="0.5" stroke="#B85D43" strokeWidth="1" transform="rotate(25 64 139)" />
    <ellipse cx="118" cy="137" rx="4" ry="2" fill="#FAF7F2" stroke="#C5A059" strokeWidth="1" transform="rotate(10 118 137)" />
  </svg>
);

// B. Registration, Rings & Cake — Lakeside Vows Arch, Rings & Tiered Cake
export const RingsAndCakeLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cakeGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAF7F2" />
        <stop offset="100%" stopColor="#E9D7AF" />
      </linearGradient>
    </defs>

    {/* Botanical Arch Frame behind */}
    <path d="M25 140C25 65 50 30 80 30C110 30 135 65 135 140" stroke="#4A5D4E" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.6" />
    <path d="M34 90C28 85 24 75 28 68" stroke="#4A5D4E" strokeWidth="1.5" />
    <path d="M126 90C132 85 136 75 132 68" stroke="#4A5D4E" strokeWidth="1.5" />

    {/* Intertwined Wedding Rings Floating on top */}
    <g transform="translate(10, 0)">
      <circle cx="62" cy="42" r="16" stroke="#C5A059" strokeWidth="3" fill="#FAF7F2" fillOpacity="0.8" />
      <circle cx="78" cy="38" r="16" stroke="#C5A059" strokeWidth="3" fill="#FAF7F2" fillOpacity="0.8" />
      {/* Solitaire Diamond Spark */}
      <path d="M78 18L83 23H73L78 18Z" fill="#FAF7F2" stroke="#866732" strokeWidth="1.5" />
      <line x1="78" y1="12" x2="78" y2="15" stroke="#C5A059" strokeWidth="1.5" />
      <line x1="72" y1="14" x2="74" y2="17" stroke="#C5A059" strokeWidth="1.5" />
      <line x1="84" y1="14" x2="82" y2="17" stroke="#C5A059" strokeWidth="1.5" />
    </g>

    {/* Two-Tiered Ceremonial Cake */}
    {/* Cake Stand */}
    <ellipse cx="80" cy="138" rx="46" ry="6" fill="#DECDB5" fillOpacity="0.4" stroke="#866732" strokeWidth="1.5" />
    <path d="M68 138L72 148H88L92 138" stroke="#866732" strokeWidth="1.5" />
    <line x1="60" y1="148" x2="100" y2="148" stroke="#866732" strokeWidth="2" />

    {/* Bottom Tier */}
    <rect x="46" y="105" width="68" height="30" rx="3" fill="url(#cakeGold)" stroke="#866732" strokeWidth="1.5" />
    <line x1="46" y1="114" x2="114" y2="114" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="3 3" />
    <line x1="46" y1="124" x2="114" y2="124" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="3 3" />

    {/* Top Tier */}
    <rect x="58" y="76" width="44" height="29" rx="3" fill="url(#cakeGold)" stroke="#866732" strokeWidth="1.5" />
    <line x1="58" y1="85" x2="102" y2="85" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="3 3" />

    {/* Cake Floral/Leaf Garnishes */}
    <path d="M52 104C46 98 42 108 48 114" stroke="#4A5D4E" strokeWidth="1.8" fill="#4A5D4E" fillOpacity="0.2" />
    <path d="M108 104C114 98 118 108 112 114" stroke="#4A5D4E" strokeWidth="1.8" fill="#4A5D4E" fillOpacity="0.2" />
    <circle cx="80" cy="74" r="3" fill="#B85D43" />
    <circle cx="75" cy="75" r="2.5" fill="#C5A059" />
    <circle cx="85" cy="75" r="2.5" fill="#4A5D4E" />
  </svg>
);

// C. Grand Kerala Sadya — Fresh Banana Leaf Feast with Colorful Traditional Dishes
export const SadyaLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#73957B" />
        <stop offset="60%" stopColor="#4A5D4E" />
        <stop offset="100%" stopColor="#313E34" />
      </linearGradient>
    </defs>

    {/* Fresh Tender Banana Leaf Base */}
    <path
      d="M16 80C24 45 60 32 136 36C148 65 140 108 118 122C74 136 34 118 16 80Z"
      fill="url(#leafGrad)"
      stroke="#263028"
      strokeWidth="2"
    />
    {/* Central Leaf Vein */}
    <path d="M16 80C55 80 95 78 136 74" stroke="#A4C2AA" strokeWidth="2" />
    {/* Leaf rib incisions */}
    <path d="M38 72L50 50M64 73L80 50M94 74L112 52" stroke="#A4C2AA" strokeWidth="1.2" opacity="0.6" />
    <path d="M42 84L54 106M68 83L86 108M98 81L116 104" stroke="#A4C2AA" strokeWidth="1.2" opacity="0.6" />

    {/* Center Steaming Rice Mound */}
    <ellipse cx="78" cy="80" rx="18" ry="12" fill="#FAF7F2" stroke="#DECDB5" strokeWidth="1.5" />
    {/* Ghee pool on rice */}
    <ellipse cx="78" cy="79" rx="6" ry="4" fill="#C5A059" fillOpacity="0.7" />

    {/* Crispy Golden Pappadam */}
    <circle cx="106" cy="82" r="11" fill="#E9D7AF" stroke="#866732" strokeWidth="1.5" />
    <path d="M101 79L108 86M103 84L110 80" stroke="#866732" strokeWidth="0.8" opacity="0.6" />

    {/* Upper Rows of Traditional Sadya Accompaniments */}
    {/* Upperi (Banana Chips) */}
    <circle cx="36" cy="62" r="5" fill="#E9D7AF" stroke="#866732" strokeWidth="1" />
    <circle cx="44" cy="64" r="5" fill="#E9D7AF" stroke="#866732" strokeWidth="1" />
    {/* Sharkara Varatti (Jaggery chips) */}
    <rect x="52" y="58" width="8" height="7" rx="1.5" fill="#7E3825" stroke="#421C11" strokeWidth="1" />
    {/* Mango Pickle / Inji Puli */}
    <circle cx="68" cy="54" r="6" fill="#B85D43" stroke="#5F291A" strokeWidth="1" />
    {/* Avial (Mixed vegetables in coconut curd) */}
    <ellipse cx="84" cy="52" rx="9" ry="6" fill="#DEC286" stroke="#866732" strokeWidth="1" />
    {/* Thoran (Cabbage/Beans coconut stir-fry) */}
    <ellipse cx="104" cy="52" rx="8" ry="5.5" fill="#73957B" stroke="#313E34" strokeWidth="1" />
    {/* Olan / Kichadi */}
    <circle cx="120" cy="56" r="6" fill="#FAF7F2" stroke="#DECDB5" strokeWidth="1" />

    {/* Traditional Clay Payasam Bowl on side */}
    <ellipse cx="38" cy="98" rx="12" ry="7" fill="#B85D43" stroke="#5F291A" strokeWidth="1.5" />
    <ellipse cx="38" cy="97" rx="10" ry="5" fill="#C5A059" fillOpacity="0.8" />
    {/* Small Payasam Banana */}
    <path d="M52 104C57 101 64 104 68 110" stroke="#DEC286" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// D. Lawn Games — Carrom Board, Wooden Dice & Verandah Leisure
export const LawnGamesLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Isometric Wooden Carrom Board */}
    <g transform="rotate(-8 80 80)">
      {/* Outer wooden border */}
      <rect x="30" y="30" width="84" height="84" rx="8" fill="#DECDB5" stroke="#644C25" strokeWidth="3" />
      {/* Inner playing surface */}
      <rect x="38" y="38" width="68" height="68" rx="4" fill="#FAF7F2" stroke="#866732" strokeWidth="1.5" />

      {/* Center circle & rose pattern */}
      <circle cx="72" cy="72" r="14" stroke="#B85D43" strokeWidth="1.2" />
      <circle cx="72" cy="72" r="5" fill="#B85D43" />
      <circle cx="72" cy="72" r="2" fill="#FAF7F2" />

      {/* Corner Pockets */}
      <circle cx="43" cy="43" r="4.5" fill="#222422" />
      <circle cx="101" cy="43" r="4.5" fill="#222422" />
      <circle cx="43" cy="101" r="4.5" fill="#222422" />
      <circle cx="101" cy="101" r="4.5" fill="#222422" />

      {/* Baseline foul arrows */}
      <line x1="48" y1="48" x2="60" y2="60" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="96" y1="48" x2="84" y2="60" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Carrom Coins & Red Queen */}
      <circle cx="70" cy="68" r="3.2" fill="#B85D43" stroke="#5F291A" strokeWidth="1" />
      <circle cx="76" cy="73" r="3.2" fill="#222422" />
      <circle cx="68" cy="75" r="3.2" fill="#DEC286" stroke="#866732" strokeWidth="1" />
      {/* Ivory Striker */}
      <circle cx="56" cy="88" r="5.5" fill="#FAF7F2" stroke="#4A5D4E" strokeWidth="1.8" />
    </g>

    {/* Tumbled Wooden Dice on the grass */}
    <g transform="translate(100, 95) rotate(15)">
      <rect x="0" y="0" width="22" height="22" rx="3.5" fill="#FAF7F2" stroke="#B85D43" strokeWidth="1.8" />
      <circle cx="6" cy="6" r="1.8" fill="#B85D43" />
      <circle cx="11" cy="11" r="1.8" fill="#B85D43" />
      <circle cx="16" cy="16" r="1.8" fill="#B85D43" />
    </g>

    {/* Green lawn blades */}
    <path d="M20 135C24 125 28 122 34 130" stroke="#4A5D4E" strokeWidth="1.8" />
    <path d="M38 136C42 124 46 126 50 134" stroke="#4A5D4E" strokeWidth="1.8" />
    <path d="M128 138C132 126 136 128 142 136" stroke="#4A5D4E" strokeWidth="1.8" />
  </svg>
);

// E. Twilight Fireworks by the Lake — Twilight Over Vembanad Lake
export const FireworksLakeLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="twilightWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A5D4E" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#263028" stopOpacity="0.8" />
      </linearGradient>
      <radialGradient id="starburstGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C5A059" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Golden Twilight Halo */}
    <circle cx="80" cy="48" r="38" fill="url(#starburstGlow)" />

    {/* Big Grand Starburst Fireworks */}
    <circle cx="80" cy="48" r="4" fill="#FAF7F2" stroke="#C5A059" strokeWidth="2" />
    {/* Primary Rays */}
    <line x1="80" y1="20" x2="80" y2="34" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
    <line x1="80" y1="62" x2="80" y2="76" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
    <line x1="52" y1="48" x2="66" y2="48" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
    <line x1="94" y1="48" x2="108" y2="48" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
    {/* Diagonal Rays */}
    <line x1="60" y1="28" x2="70" y2="38" stroke="#B85D43" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="100" y1="28" x2="90" y2="38" stroke="#B85D43" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="60" y1="68" x2="70" y2="58" stroke="#B85D43" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="100" y1="68" x2="90" y2="58" stroke="#B85D43" strokeWidth="1.8" strokeLinecap="round" />

    {/* Secondary Smaller Sparkle on left */}
    <circle cx="42" cy="36" r="2.5" fill="#C5A059" />
    <line x1="42" y1="26" x2="42" y2="31" stroke="#C5A059" strokeWidth="1.2" />
    <line x1="42" y1="41" x2="42" y2="46" stroke="#C5A059" strokeWidth="1.2" />
    <line x1="32" y1="36" x2="37" y2="36" stroke="#C5A059" strokeWidth="1.2" />
    <line x1="47" y1="36" x2="52" y2="36" stroke="#C5A059" strokeWidth="1.2" />

    {/* Secondary Smaller Sparkle on right */}
    <circle cx="118" cy="38" r="2.5" fill="#B85D43" />
    <line x1="118" y1="28" x2="118" y2="33" stroke="#B85D43" strokeWidth="1.2" />
    <line x1="118" y1="43" x2="118" y2="48" stroke="#B85D43" strokeWidth="1.2" />
    <line x1="108" y1="38" x2="113" y2="38" stroke="#B85D43" strokeWidth="1.2" />
    <line x1="123" y1="38" x2="128" y2="38" stroke="#B85D43" strokeWidth="1.2" />

    {/* Floating Sparks in the sky */}
    <circle cx="30" cy="52" r="1.5" fill="#C5A059" />
    <circle cx="130" cy="54" r="1.5" fill="#C5A059" />
    <circle cx="68" cy="18" r="1.2" fill="#FAF7F2" />
    <circle cx="92" cy="18" r="1.2" fill="#FAF7F2" />

    {/* Lake Horizon & Reflection Ripples */}
    <path d="M14 105C40 102 120 102 146 105" stroke="#4A5D4E" strokeWidth="1.5" />
    <path d="M24 115C48 118 112 118 136 115" stroke="#C5A059" strokeWidth="1.8" strokeOpacity="0.8" />
    <path d="M38 124C58 127 102 127 122 124" stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.6" />
    <path d="M52 133C68 135 92 135 108 133" stroke="#C5A059" strokeWidth="1.2" strokeOpacity="0.4" />
    <path d="M68 141C74 142 86 142 92 141" stroke="#FAF7F2" strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

// F. Dinner & Celebrations — Clinking Flutes, Vinyl Record & Starlight
export const DinnerCelebrationsLargeSketch: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Festoon Hanging Fairy Lights string */}
    <path d="M10 24C45 38 115 38 150 24" stroke="#C5A059" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="36" cy="30" r="3.5" fill="#E9D7AF" stroke="#C5A059" strokeWidth="1" />
    <circle cx="62" cy="34" r="3.5" fill="#E9D7AF" stroke="#C5A059" strokeWidth="1" />
    <circle cx="98" cy="34" r="3.5" fill="#E9D7AF" stroke="#C5A059" strokeWidth="1" />
    <circle cx="124" cy="30" r="3.5" fill="#E9D7AF" stroke="#C5A059" strokeWidth="1" />

    {/* Vintage Vinyl Record underneath */}
    <g transform="translate(18, 55)">
      <circle cx="62" cy="62" r="34" fill="#222422" stroke="#DECDB5" strokeWidth="1.5" />
      <circle cx="62" cy="62" r="28" stroke="#4A4E4A" strokeWidth="0.8" strokeDasharray="3 2" />
      <circle cx="62" cy="62" r="22" stroke="#4A4E4A" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Vinyl Label */}
      <circle cx="62" cy="62" r="14" fill="#B85D43" stroke="#FAF7F2" strokeWidth="1" />
      <circle cx="62" cy="62" r="3" fill="#FAF7F2" />
    </g>

    {/* Clinking Champagne Flutes in Foreground */}
    {/* Left Flute (tilted right) */}
    <g transform="rotate(12 70 70)">
      <path d="M52 38L58 72C58 78 54 82 54 86H62" stroke="#C5A059" strokeWidth="2" fill="#FAF7F2" fillOpacity="0.5" />
      <path d="M64 40L58 72" stroke="#C5A059" strokeWidth="1.5" />
      <line x1="58" y1="86" x2="58" y2="108" stroke="#866732" strokeWidth="2" />
      <path d="M46 108H70" stroke="#866732" strokeWidth="2" />
    </g>

    {/* Right Flute (tilted left) */}
    <g transform="rotate(-12 90 70)">
      <path d="M102 38L96 72C96 78 100 82 100 86H92" stroke="#C5A059" strokeWidth="2" fill="#FAF7F2" fillOpacity="0.5" />
      <path d="M90 40L96 72" stroke="#C5A059" strokeWidth="1.5" />
      <line x1="96" y1="86" x2="96" y2="108" stroke="#866732" strokeWidth="2" />
      <path d="M84 108H108" stroke="#866732" strokeWidth="2" />
    </g>

    {/* Clink Spark Stars */}
    <path d="M80 40V48M76 44H84" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
    <circle cx="80" cy="34" r="1.8" fill="#C5A059" />
    <circle cx="73" cy="38" r="1.2" fill="#FAF7F2" />
    <circle cx="87" cy="38" r="1.2" fill="#FAF7F2" />
  </svg>
);

// ============================================================================
// 2. LUSH MULTI-TONED BOTANICAL VIEWPORT BLEEDS & WATERMARKS
// ============================================================================

export const LushKeralaFoliageBleed: React.FC<{ className?: string; flipped?: boolean }> = ({ 
  className = "w-72 h-auto text-[#4A5D4E]", 
  flipped = false 
}) => (
  <svg 
    viewBox="0 0 240 320" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} ${flipped ? '-scale-x-100' : ''}`}
  >
    {/* Soft Watercolor Wash Underlay */}
    <path
      d="M20 20C90 10 160 50 180 140C200 230 140 280 40 300C10 260 0 160 20 20Z"
      fill="#4A5D4E"
      fillOpacity="0.08"
    />
    <path
      d="M80 60C140 70 200 120 210 180C220 240 180 290 90 280"
      fill="#C5A059"
      fillOpacity="0.07"
    />

    {/* Graceful Arching Coconut Palm Frond 1 */}
    <path d="M10 290C30 190 70 100 210 40" stroke="#4A5D4E" strokeWidth="2.5" strokeLinecap="round" />
    {/* Palm Leaflets */}
    <path d="M40 230C65 215 95 210 115 220" stroke="#4A5D4E" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M60 190C90 170 125 165 150 180" stroke="#4A5D4E" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M90 150C125 125 165 120 190 140" stroke="#4A5D4E" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M130 105C165 85 205 85 225 105" stroke="#4A5D4E" strokeWidth="1.8" strokeLinecap="round" />

    {/* Terracotta Lotus Bloom Accent */}
    <g transform="translate(140, 200) rotate(15)">
      {/* Lotus Petals */}
      <path d="M30 10C24 25 24 45 30 55C36 45 36 25 30 10Z" fill="#B85D43" fillOpacity="0.4" stroke="#B85D43" strokeWidth="1.5" />
      <path d="M30 55C22 50 14 38 18 24C24 30 28 42 30 55Z" fill="#B85D43" fillOpacity="0.25" stroke="#B85D43" strokeWidth="1.5" />
      <path d="M30 55C38 50 46 38 42 24C36 30 32 42 30 55Z" fill="#B85D43" fillOpacity="0.25" stroke="#B85D43" strokeWidth="1.5" />
      <path d="M30 55C18 53 8 44 8 32C16 35 24 44 30 55Z" fill="#DEC286" fillOpacity="0.3" stroke="#C5A059" strokeWidth="1.2" />
      <path d="M30 55C42 53 52 44 52 32C44 35 36 44 30 55Z" fill="#DEC286" fillOpacity="0.3" stroke="#C5A059" strokeWidth="1.2" />
      {/* Lotus Pad */}
      <ellipse cx="30" cy="62" rx="36" ry="12" fill="#4A5D4E" fillOpacity="0.2" stroke="#4A5D4E" strokeWidth="1.5" />
    </g>

    {/* Banana Leaf Curve on lower margin */}
    <path d="M20 310C60 270 120 280 170 310" stroke="#73957B" strokeWidth="2" fill="#73957B" fillOpacity="0.15" />
  </svg>
);

// Traditional Kettuvallam Thatched Houseboat Sketch
export const KettuvallamScenicSketch: React.FC<{ className?: string }> = ({ className = "w-48 h-auto" }) => (
  <svg viewBox="0 0 180 90" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Wooden Hull */}
    <path d="M12 62C30 68 140 68 168 56C164 48 155 48 142 48H36C24 48 16 54 12 62Z" fill="#644C25" fillOpacity="0.3" stroke="#421C11" strokeWidth="2" />
    {/* Thatched curved roof */}
    <path d="M30 48C30 26 50 16 88 16C122 16 142 26 142 48" stroke="#866732" strokeWidth="2" fill="#E9D7AF" fillOpacity="0.3" />
    {/* Thatched textures */}
    <path d="M46 22V48M62 18V48M78 16V48M94 17V48M110 20V48M126 25V48" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 3" />
    {/* Curls */}
    <path d="M12 62C8 58 6 50 10 44" stroke="#421C11" strokeWidth="2" />
    <path d="M168 56C174 50 175 42 170 36" stroke="#421C11" strokeWidth="2" />
    {/* Oar / Punnamada Backwaters */}
    <line x1="20" y1="46" x2="4" y2="76" stroke="#644C25" strokeWidth="2" />
    {/* Water ripples */}
    <path d="M6 72C24 76 60 70 94 74C128 78 160 72 174 74" stroke="#4A5D4E" strokeWidth="1.5" />
    <path d="M22 80C48 83 96 81 144 83" stroke="#C5A059" strokeWidth="1" strokeOpacity="0.7" />
  </svg>
);

// Wax Seal Emblem: "R & A"
export const WaxSealEmblem: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 56 }) => (
  <div 
    className={`relative inline-flex items-center justify-center rounded-full bg-[#B85D43] text-[#FAF7F2] shadow-sm select-none transition-transform hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg 
      className="absolute inset-0 w-full h-full text-[#9E4A32] opacity-40 pointer-events-none" 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
      <circle cx="50" cy="50" r="41" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
    </svg>
    <div className="relative text-center leading-none">
      <span className="font-editorial text-xs sm:text-sm tracking-widest font-semibold text-[#FAF7F2]">R&amp;A</span>
      <div className="text-[7px] uppercase tracking-wider text-[#FAF7F2]/80 mt-0.5">30.01.27</div>
    </div>
  </div>
);

// Minimal Botanical Divider
export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 text-[#C5A059] ${className}`}>
    <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#C5A059]/80" />
    <div className="flex items-center gap-1.5 opacity-80">
      <span className="text-[9px] text-[#C5A059]">✦</span>
      <span className="text-xs text-[#4A5D4E]">🌿</span>
      <span className="text-[9px] text-[#C5A059]">✦</span>
    </div>
    <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#C5A059]/80" />
  </div>
);
