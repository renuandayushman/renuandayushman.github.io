import React, { useState } from 'react';
import { ArrowUp, QrCode, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { WaxSealEmblem, BotanicalDivider } from '../common/BotanicalMotifs';

interface FooterSectionProps {
  onOpenQrModal?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenQrModal }) => {
  const [helpOpen, setHelpOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 border-t border-[#C5A059]/25 text-center relative z-10">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* Wax Seal */}
        <div className="flex justify-center">
          <WaxSealEmblem size={48} />
        </div>

        {/* Couple Names & Date */}
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#222422]">
            {WEDDING_DATA.couple.bride} &amp; {WEDDING_DATA.couple.groom}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#866732] font-semibold mt-1">
            {WEDDING_DATA.dates.displayDate} • {WEDDING_DATA.venue.name}, Alleppey
          </p>
        </div>

        <BotanicalDivider className="my-4" />

        {/* Discreet 1-Line Help Desk Accordion */}
        <div className="max-w-md mx-auto pt-1">
          <button
            onClick={() => setHelpOpen(!helpOpen)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#4A5D4E] hover:text-[#222422] transition-colors font-medium py-1"
          >
            <span>Need Assistance? Contact Info</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${helpOpen ? 'rotate-180' : ''}`} />
          </button>

          {helpOpen && (
            <div className="mt-3 p-4 rounded-2xl bg-white/70 border border-[#C5A059]/30 text-left space-y-3 shadow-2xs">
              {/* Renu's Family */}
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#222422] block">Renu's Family</span>
                  <span className="text-[11px] text-[#4A5D4E]">Family Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/919847054321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-colors"
                    title="WhatsApp Renu's Family"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+919847054321"
                    className="p-1.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-colors"
                    title="Call Renu's Family"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-[#C5A059]/20" />

              {/* Punnamada Resort Reception */}
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#222422] block">Punnamada Resort</span>
                  <span className="text-[11px] text-[#4A5D4E]">Reception &amp; Concierge</span>
                </div>
                <a
                  href={`tel:${WEDDING_DATA.venue.phone}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#C5A059] text-[11px] text-[#866732] hover:bg-[#FAF6EE] transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 9446433692</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: QR Assets & Back to Top */}
        <div className="pt-4 flex items-center justify-center gap-3">
          {onOpenQrModal && (
            <button
              onClick={onOpenQrModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#C5A059]/30 text-[11px] uppercase tracking-wider text-[#4A5D4E] hover:bg-white transition-colors"
            >
              <QrCode className="w-3 h-3 text-[#C5A059]" />
              <span>Physical Invite QR</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#C5A059]/30 text-[11px] uppercase tracking-wider text-[#4A5D4E] hover:bg-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-[#C5A059]" />
          </button>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-[#4A5D4E]/50 pt-2 font-mono">
          Renu &amp; Ayushman • 30.01.2027
        </p>

      </div>
    </footer>
  );
};
