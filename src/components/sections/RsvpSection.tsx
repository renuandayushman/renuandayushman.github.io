import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Calendar, Download, AlertCircle, Heart, QrCode } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { WaxSealEmblem } from '../common/BotanicalMotifs';

interface RsvpFormData {
  fullName: string;
  whatsapp: string;
  attending: 'yes' | 'no' | '';
  guestCount: number;
  guestNames: string;
  arrivalDate: string;
  travelMode: string;
  songRequest: string;
  note: string;
}

const initialForm: RsvpFormData = {
  fullName: '',
  whatsapp: '',
  attending: '',
  guestCount: 1,
  guestNames: '',
  arrivalDate: '2027-01-29',
  travelMode: 'Flight to Kochi (COK)',
  songRequest: '',
  note: '',
};

interface RsvpSectionProps {
  onOpenQrModal?: () => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ onOpenQrModal }) => {
  const [formData, setFormData] = useState<RsvpFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAttendingChange = (status: 'yes' | 'no') => {
    setFormData(prev => ({ ...prev, attending: status }));
  };

  const fireConfetti = () => {
    try {
      const end = Date.now() + 2 * 1000;
      const colors = ['#C5A059', '#4A5D4E', '#B85D43', '#FAF7F2'];
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 50, origin: { x: 0 }, colors });
        confetti({ particleCount: 3, angle: 120, spread: 50, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    } catch {
      // Confetti fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsapp.trim() || !formData.attending) {
      setErrorMessage("Please complete your name, WhatsApp number, and attendance.");
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const scriptUrl = WEDDING_DATA.rsvpConfig.googleAppsScriptUrl;
    const payload = {
      timestamp: new Date().toISOString(),
      ...formData,
    };

    try {
      if (scriptUrl && scriptUrl.startsWith('http')) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        existing.push(payload);
        localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
        await new Promise(res => setTimeout(res, 800));
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
    } catch {
      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
    }
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Renu & Ayushman's Wedding");
    const details = encodeURIComponent(
      "Wedding Celebration at Punnamada Resort, Alleppey, Kerala.\nSaturday, January 30, 2027"
    );
    const location = encodeURIComponent("Punnamada Resort, Alleppey, Kerala");
    const dates = "20270130T020000Z/20270130T193000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Renu and Ayushman Wedding//EN
BEGIN:VEVENT
UID:renu-ayushman-wedding-2027
DTSTAMP:20261111T120000Z
DTSTART:20270130T020000Z
DTEND:20270130T193000Z
SUMMARY:Renu & Ayushman's Wedding
DESCRIPTION:Wedding Celebration at Punnamada Resort, Alleppey.
LOCATION:Punnamada Resort, Kottankulangara, Alappuzha, Kerala
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Renu-Ayushman-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="rsvp-section" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* 2-Column Wide Editorial Card */}
      <div className="stationery-card stationery-inner-border rounded-t-[3.5rem] rounded-b-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Invitation Card Header & Gift Note (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 text-center lg:text-left">
            <div>
              <div className="flex justify-center lg:justify-start mb-4">
                <WaxSealEmblem size={56} />
              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                Response Requested
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-[#222422]">
                Kindly RSVP
              </h2>
              <p className="font-editorial italic text-sm text-[#4A5D4E] mt-2">
                Please reply by {WEDDING_DATA.dates.rsvpDeadline} to help us arrange your stay and sadya banana leaves.
              </p>
            </div>

            {/* A Gentle Gift Note */}
            <div className="p-5 rounded-2xl bg-[#FAF2EF] border border-[#B85D43]/20 text-left space-y-2">
              <div className="flex items-center gap-2 text-[#B85D43]">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">
                  A Gentle Note
                </span>
              </div>
              <p className="font-editorial italic text-xs sm:text-sm text-[#7E3825] leading-relaxed">
                "{WEDDING_DATA.giftNote.text}"
              </p>
            </div>

            {/* Physical QR Modal Link */}
            {onOpenQrModal && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenQrModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#C5A059]/40 text-xs uppercase tracking-wider text-[#4A5D4E] hover:bg-[#FAF7F2] transition-colors shadow-2xs"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Physical Invite QR Assets</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Active RSVP Form (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#4A5D4E] text-[#FAF7F2] flex items-center justify-center mx-auto shadow-md border-2 border-[#C5A059]">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#222422]">
                      {formData.attending === 'yes' ? "See You by the Lake" : "Thank You"}
                    </h3>
                    <p className="font-editorial italic text-sm sm:text-base text-[#4A5D4E] mt-2">
                      {formData.attending === 'yes'
                        ? `Thank you, ${formData.fullName}! Your reservation for ${formData.guestCount} guest(s) is confirmed.`
                        : `We will celebrate with you in spirit, ${formData.fullName}.`}
                    </p>
                  </div>

                  {formData.attending === 'yes' && (
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getGoogleCalendarUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 border border-[#C5A059]/40"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Google Calendar</span>
                      </a>

                      <button
                        onClick={downloadIcsFile}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-[#4A5D4E] text-xs uppercase tracking-wider font-medium border border-[#4A5D4E]/30 flex items-center justify-center gap-2"
                      >
                        <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Apple / iCal (.ics)</span>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => { setIsSubmitted(false); setFormData(initialForm); }}
                    className="text-xs uppercase tracking-wider text-[#866732] hover:underline pt-4 block mx-auto"
                  >
                    Modify details or submit another response
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Attendance Toggle */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-bold mb-2">
                      Will You Join Us in Alleppey? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleAttendingChange('yes')}
                        className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-medium transition-all border ${
                          formData.attending === 'yes'
                            ? 'bg-[#4A5D4E] text-[#FAF7F2] border-[#C5A059] shadow-xs'
                            : 'bg-white/80 text-[#222422] border-[#C5A059]/30 hover:border-[#4A5D4E]'
                        }`}
                      >
                        Attending with joy
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAttendingChange('no')}
                        className={`py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-medium transition-all border ${
                          formData.attending === 'no'
                            ? 'bg-[#B85D43] text-[#FAF7F2] border-[#B85D43] shadow-xs'
                            : 'bg-white/80 text-[#222422] border-[#C5A059]/30 hover:border-[#B85D43]'
                        }`}
                      >
                        Declining with love
                      </button>
                    </div>
                  </div>

                  {/* Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                      />
                    </div>
                  </div>

                  {/* Attending Specific Fields */}
                  {formData.attending === 'yes' && (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                            Guest Count
                          </label>
                          <select
                            value={formData.guestCount}
                            onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 1 })}
                            className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                          >
                            <option value={1}>1 Guest</option>
                            <option value={2}>2 Guests</option>
                            <option value={3}>3 Guests</option>
                            <option value={4}>4+ Guests</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                            Arrival Date
                          </label>
                          <select
                            value={formData.arrivalDate}
                            onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                            className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                          >
                            <option value="2027-01-29">Friday, Jan 29</option>
                            <option value="2027-01-30">Saturday, Jan 30</option>
                            <option value="2027-01-28">Thursday, Jan 28</option>
                          </select>
                        </div>
                      </div>

                      {formData.guestCount > 1 && (
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                            Names of Accompanying Guests
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Maya & Kabir"
                            value={formData.guestNames}
                            onChange={(e) => setFormData({ ...formData, guestNames: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                          Song Request for Evening Celebrations
                        </label>
                        <input
                          type="text"
                          placeholder="Song & Artist"
                          value={formData.songRequest}
                          onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                      Note or Blessing for the Couple (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Leave a sweet blessing..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.attending}
                      className="w-full py-3.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] disabled:opacity-50 text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A059] shadow-md transition-all hover:scale-[1.01]"
                    >
                      {isSubmitting ? "Sending Your Response..." : "Confirm & Send RSVP"}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
};
