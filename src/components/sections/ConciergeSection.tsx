import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { WEDDING_DATA, ContactPerson } from '../../data/weddingData';
import { BotanicalDivider } from '../common/BotanicalMotifs';

export const ConciergeSection: React.FC = () => {
  const getBadgeStyle = (side: ContactPerson['side']) => {
    switch (side) {
      case 'bride':
        return 'bg-[#C5A059]/15 text-[#866732] border-[#C5A059]/30';
      case 'groom':
        return 'bg-[#4A5D4E]/15 text-[#4A5D4E] border-[#4A5D4E]/30';
      case 'transport':
        return 'bg-[#B85D43]/15 text-[#B85D43] border-[#B85D43]/30';
      case 'venue':
        return 'bg-[#222422]/10 text-[#222422] border-[#222422]/20';
      default:
        return 'bg-[#FAF7F2] text-[#222422] border-gray-200';
    }
  };

  return (
    <section id="concierge" className="py-20 sm:py-28 px-4 max-w-6xl mx-auto relative">
      
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
          Here to Help Every Step of the Way
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          Who to Reach Out To
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl text-[#4A5D4E] mt-3 max-w-2xl mx-auto">
          No confusion, no stress. Tap below to call directly or message on WhatsApp anytime during your journey or stay.
        </p>
        <BotanicalDivider />
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {WEDDING_DATA.contacts.map((contact: ContactPerson) => {
          // Format cleaned phone number for WhatsApp link
          const cleanPhone = contact.phone.replace(/[^0-9]/g, '');
          const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(contact.whatsappMessage)}`;

          return (
            <div
              key={contact.role}
              className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-7 shadow-vellum hover:shadow-vellum-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${getBadgeStyle(contact.side)}`}>
                    {contact.role}
                  </span>
                  <span className="text-xs font-mono text-[#866732] font-semibold">
                    {contact.phone}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#222422] mb-1">
                  {contact.names}
                </h3>

                <p className="text-sm text-[#4A4E4A] leading-relaxed mb-6">
                  {contact.description}
                </p>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="pt-4 border-t border-[#C5A059]/20 flex items-center gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] text-[#FAF7F2] text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 border border-[#C5A059]/30 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>Message on WhatsApp</span>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="py-2.5 px-4 rounded-full bg-white hover:bg-[#FAF7F2] text-[#4A5D4E] text-xs font-semibold tracking-wide border border-[#4A5D4E]/25 transition-colors flex items-center justify-center gap-1.5"
                  aria-label={`Call ${contact.names}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Call</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assurance note */}
      <div className="mt-12 text-center text-xs text-[#4A5D4E]/80 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
        <span>Girish Chettan and our family volunteers are available on WhatsApp throughout January 29th &amp; 30th.</span>
      </div>

    </section>
  );
};
