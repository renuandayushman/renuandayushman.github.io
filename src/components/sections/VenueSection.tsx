import React from 'react';
import { MapPin, Phone, ExternalLink, Plane, Train, Car, Compass, Waves, Bike, Sparkles, Home, Fish } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { BotanicalDivider, KettuvallamHouseboatIcon } from '../common/BotanicalMotifs';

export const VenueSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#4A5D4E]" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#4A5D4E]" />;
      case 'Bike':
        return <Bike className="w-5 h-5 text-[#4A5D4E]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#4A5D4E]" />;
      case 'Sun':
        return <Fish className="w-5 h-5 text-[#B85D43]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const getTransitIcon = (mode: string) => {
    if (mode.includes('Air')) return <Plane className="w-5 h-5 text-[#C5A059]" />;
    if (mode.includes('Train')) return <Train className="w-5 h-5 text-[#4A5D4E]" />;
    return <Car className="w-5 h-5 text-[#B85D43]" />;
  };

  return (
    <section id="venue-section" className="py-20 sm:py-28 px-4 max-w-6xl mx-auto relative">
      
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
          The Destination &amp; Haven
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          Punnamada Resort
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl text-[#4A5D4E] mt-3 max-w-2xl mx-auto">
          {WEDDING_DATA.venue.tagline}
        </p>
        <BotanicalDivider />
      </div>

      {/* Main Grid: Resort Architecture Card + Interactive Map & Directions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Resort Story & On-site Guest Amenities (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-8 shadow-vellum">
            
            <div className="flex items-center gap-3 text-[#4A5D4E] mb-4">
              <KettuvallamHouseboatIcon className="w-7 h-7 text-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#866732]">
                Lakeside Heritage Sanctuary
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422] mb-3">
              Where Ancient Kerala Architecture Meets Vembanad Lake
            </h3>
            
            <p className="text-sm text-[#4A4E4A] leading-relaxed mb-6">
              Punnamada Resort is nestled right on the water’s edge in Alleppey, built in the classical Kerala architectural tradition with sloping tiled roofs, open-roof courtyard bathrooms, and intricately carved wood. All wedding festivities take place right on the grounds, so you can simply stroll from your veranda to the festivities.
            </p>

            {/* Address & Quick Links */}
            <div className="p-4 rounded-2xl bg-[#4A5D4E]/06 border border-[#4A5D4E]/15 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#222422] uppercase tracking-wider">Address</div>
                  <div className="text-xs text-[#4A5D4E] mt-0.5">{WEDDING_DATA.venue.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={WEDDING_DATA.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs font-medium hover:bg-[#3D4D40] transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={`tel:${WEDDING_DATA.venue.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C5A059] text-[#866732] text-xs font-medium hover:bg-[#FAF6EE] transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Front Desk</span>
                </a>
              </div>
            </div>

            {/* Resort Guest Perks Grid */}
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4A5D4E] mb-4">
              Complimentary Guest Perks &amp; Activities
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WEDDING_DATA.venue.amenities.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl bg-white/70 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#C5A059]/30">
                      {getAmenityIcon(item.icon)}
                    </div>
                    <span className="text-xs font-semibold text-[#222422]">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4A4E4A] leading-normal pl-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Column: Travel Routes + Interactive Map Embed (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Travel Directions Cards */}
          <div className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-7 shadow-vellum">
            <h3 className="font-editorial text-2xl text-[#222422] mb-1">
              How to Reach Alleppey
            </h3>
            <p className="text-xs text-[#4A5D4E] uppercase tracking-wider mb-5">
              Convenient transit options for out-of-town guests
            </p>

            <div className="space-y-4">
              {WEDDING_DATA.venue.transit.map((route) => (
                <div
                  key={route.mode}
                  className="p-4 rounded-2xl bg-white/70 border border-[#4A5D4E]/15 hover:border-[#C5A059]/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#C5A059]/30">
                        {getTransitIcon(route.mode)}
                      </div>
                      <span className="font-semibold text-xs text-[#222422]">
                        {route.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#866732] font-semibold">
                      {route.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A4E4A] leading-relaxed pl-8">
                    {route.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Cab-Pool Teaser Banner */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#FAF2EF] border border-[#B85D43]/25 flex items-center justify-between gap-3">
              <div className="text-xs text-[#7E3825]">
                <span className="font-semibold block">Landing at Kochi (COK)?</span>
                <span>Share an easy 2-hour cab with fellow guests on Jan 29/30.</span>
              </div>
              <a
                href="#guest-connection"
                className="shrink-0 text-xs font-semibold text-[#B85D43] underline hover:text-[#9E4A32]"
              >
                Find Cab Pool
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-vellum bg-white">
            <div className="p-3 bg-[#4A5D4E] text-[#FAF7F2] flex items-center justify-between text-xs px-4">
              <span className="font-medium tracking-wide">Punnamada Resort Google Map</span>
              <a
                href={WEDDING_DATA.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-[#C5A059]"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative h-64 sm:h-72 w-full">
              <iframe
                title="Punnamada Resort Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.918930811984!2d76.35728347576595!3d9.510041490571661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08850626354fbf%3A0xc3fae3ba15b0ceca!2sPunnamada%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
