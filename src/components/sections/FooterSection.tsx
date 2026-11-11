import React from 'react';
import { ArrowUp, QrCode } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { BotanicalDivider, WaxSealEmblem, PalmBranchIcon } from '../common/BotanicalMotifs';

interface FooterSectionProps {
  onOpenQrModal?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenQrModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 border-t border-[#C5A059]/30 bg-[#FAF7F2] text-center relative overflow-hidden paper-texture">
      {/* Background Palm Silhouettes */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 text-[#4A5D4E]/05 pointer-events-none">
        <PalmBranchIcon className="w-full h-full" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 text-[#4A5D4E]/05 pointer-events-none">
        <PalmBranchIcon className="w-full h-full transform -scale-x-100" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        {/* Wax Seal */}
        <div className="inline-block">
          <WaxSealEmblem size={54} />
        </div>

        {/* Couple names */}
        <h2 className="font-editorial text-4xl sm:text-5xl text-[#222422]">
          {WEDDING_DATA.couple.bride} &amp; {WEDDING_DATA.couple.groom}
        </h2>

        <p className="font-script text-2xl sm:text-3xl text-[#C5A059]">
          {WEDDING_DATA.couple.blessing}
        </p>

        <p className="text-xs uppercase tracking-[0.2em] text-[#4A5D4E] font-medium">
          January 30, 2027 • Punnamada Resort, Alleppey, Kerala
        </p>

        <BotanicalDivider className="my-6" />

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-[#4A4E4A]">
          <a href="#timeline-section" className="hover:text-[#4A5D4E] transition-colors">The Day's Flow</a>
          <span className="text-[#C5A059]/40">•</span>
          <a href="#venue-section" className="hover:text-[#4A5D4E] transition-colors">Punnamada Resort</a>
          <span className="text-[#C5A059]/40">•</span>
          <a href="#explore-section" className="hover:text-[#4A5D4E] transition-colors">Explore Alleppey</a>
          <span className="text-[#C5A059]/40">•</span>
          <a href="#guest-connection" className="hover:text-[#4A5D4E] transition-colors">Guest Hub &amp; Cab-Pool</a>
          <span className="text-[#C5A059]/40">•</span>
          <a href="#concierge" className="hover:text-[#4A5D4E] transition-colors">Who to Reach Out To</a>
          <span className="text-[#C5A059]/40">•</span>
          <a href="#rsvp-section" className="hover:text-[#4A5D4E] transition-colors text-[#866732] font-semibold">RSVP</a>
        </div>

        {/* Action buttons */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
          {onOpenQrModal && (
            <button
              onClick={onOpenQrModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#C5A059]/40 text-xs font-semibold text-[#4A5D4E] hover:bg-white transition-all shadow-sm group"
            >
              <QrCode className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>Physical Invite QR Assets</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#C5A059]/30 text-xs font-medium text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow-sm"
          >
            <span>Back to Envelope</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>

        <p className="text-[11px] text-[#4A5D4E]/60 pt-4">
          Designed with love for our wedding celebration on Vembanad Lake.
        </p>

      </div>
    </footer>
  );
};
