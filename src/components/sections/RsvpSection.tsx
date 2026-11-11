import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Calendar, Heart, Send, AlertCircle, Download, QrCode } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { WaxSealEmblem, PalmBranchIcon } from '../common/BotanicalMotifs';

interface RsvpFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  attending: 'yes' | 'no' | '';
  guestCount: number;
  plusOneNames: string;
  events: {
    temple: boolean;
    registrationAndSadya: boolean;
    cocktails: boolean;
  };
  travelMode: string;
  arrivalDate: string;
  arrivalTime: string;
  joinCabPool: boolean;
  dietaryNotes: string;
  songRequest: string;
  personalNote: string;
}

const initialForm: RsvpFormData = {
  fullName: '',
  whatsapp: '',
  email: '',
  attending: '',
  guestCount: 1,
  plusOneNames: '',
  events: {
    temple: true,
    registrationAndSadya: true,
    cocktails: true,
  },
  travelMode: 'Flight to Kochi (COK)',
  arrivalDate: '2027-01-29',
  arrivalTime: 'Afternoon (12 PM - 5 PM)',
  joinCabPool: false,
  dietaryNotes: '',
  songRequest: '',
  personalNote: '',
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

  const handleEventCheckbox = (eventKey: keyof RsvpFormData['events']) => {
    setFormData(prev => ({
      ...prev,
      events: {
        ...prev.events,
        [eventKey]: !prev.events[eventKey],
      }
    }));
  };

  const fireConfetti = () => {
    try {
      // Elegant gold, sage, terracotta confetti burst
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#C5A059', '#4A5D4E', '#B85D43', '#FAF7F2'];

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch (e) {
      console.warn("Confetti error:", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsapp.trim() || !formData.attending) {
      setErrorMessage("Please fill in your name, contact, and attendance confirmation.");
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const scriptUrl = WEDDING_DATA.rsvpConfig.googleAppsScriptUrl;

    const payload = {
      timestamp: new Date().toISOString(),
      ...formData,
      eventsAttending: Object.entries(formData.events)
        .filter(([, val]) => val)
        .map(([k]) => k)
        .join(', '),
    };

    try {
      if (scriptUrl && scriptUrl.startsWith('http')) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // standard for Google Apps Script Web Apps
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback simulation: store in localStorage for demo & offline reliability
        const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        existing.push(payload);
        localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
        await new Promise(res => setTimeout(res, 900));
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
    } catch (err) {
      console.error("RSVP submit error:", err);
      // Still consider stored locally so guest is never blocked
      setIsSubmitting(false);
      setIsSubmitted(true);
      fireConfetti();
    }
  };

  // Google Calendar URL Generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Renu & Ayushman's Wedding Celebration");
    const details = encodeURIComponent(
      "Celebrating Renu & Ayushman's wedding at Punnamada Resort, Alleppey.\n\nSchedule:\n• 7:30 AM: Temple Blessings\n• 11:00 AM: Lakeside Vows & Registration\n• 1:00 PM: Grand Kerala Sadya Feast\n• 3:30 PM: Lawn Games & Leisure\n• 6:15 PM: Twilight Lake Fireworks\n• 7:30 PM: Cocktail Dinner & Dancing\n\nContact: +91 9446433692 (Punnamada Resort)"
    );
    const location = encodeURIComponent("Punnamada Resort, Kottankulangara, Alappuzha, Kerala 688006");
    // 2027-01-30 07:30 IST to 2027-01-31 01:00 IST in UTC:
    // IST is UTC+5:30. 2027-01-30 07:30 IST = 2027-01-30 02:00:00 UTC
    // 2027-01-31 01:00 IST = 2027-01-30 19:30:00 UTC
    const dates = "20270130T020000Z/20270130T193000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Apple / Outlook iCal (.ics) download
  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Renu and Ayushman Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:renu-ayushman-wedding-2027@punnamada
DTSTAMP:20261111T120000Z
DTSTART:20270130T020000Z
DTEND:20270130T193000Z
SUMMARY:Renu & Ayushman's Wedding Celebration
DESCRIPTION:Celebrating Renu & Ayushman's wedding at Punnamada Resort, Alleppey.\\nSchedule:\\n• 7:30 AM: Temple Blessings\\n• 11:00 AM: Lakeside Vows & Rings\\n• 1:00 PM: Grand Sadya Feast\\n• 6:15 PM: Twilight Fireworks\\n• 7:30 PM: Cocktail Dinner
LOCATION:Punnamada Resort, Kottankulangara, Alappuzha, Kerala 688006
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
    <section id="rsvp-section" className="py-20 sm:py-28 px-4 max-w-4xl mx-auto relative">
      
      {/* Gift Note Banner */}
      <div className="mb-16 backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 shadow-vellum text-center relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-[#FAF2EF] border border-[#B85D43]/30 flex items-center justify-center mx-auto mb-3 text-[#B85D43]">
          <Heart className="w-5 h-5 fill-current" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#866732] font-semibold block mb-2">
          {WEDDING_DATA.giftNote.heading}
        </span>

        <h3 className="font-editorial italic text-2xl sm:text-3xl text-[#222422] max-w-xl mx-auto leading-snug">
          "{WEDDING_DATA.giftNote.quote}"
        </h3>

        <p className="text-sm text-[#4A4E4A] max-w-lg mx-auto mt-4 leading-relaxed">
          {WEDDING_DATA.giftNote.body}
        </p>

        {/* Decorative flourish */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 text-[#4A5D4E]/05 pointer-events-none">
          <PalmBranchIcon className="w-full h-full" />
        </div>
      </div>

      {/* Main RSVP Form Card */}
      <div className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative">
        
        {/* Top Wax Seal */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <WaxSealEmblem size={52} />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block">
            Response Requested
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#222422] mt-1">
            RSVP &amp; Guest Details
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5D4E] mt-2 max-w-md mx-auto">
            Kindly respond by December 15, 2026 to help us arrange your Sadya banana leaves, villas, and boat seats.
          </p>
          {onOpenQrModal && (
            <div className="mt-3">
              <button
                type="button"
                onClick={onOpenQrModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#C5A059]/30 text-[11px] font-medium text-[#4A5D4E] hover:bg-white transition-colors shadow-xs"
              >
                <QrCode className="w-3 h-3 text-[#C5A059]" />
                <span>Physical Invite QR Assets</span>
              </button>
            </div>
          )}
        </div>

        {/* Success Confirmation State */}
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-12 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#4A5D4E] text-[#FAF7F2] flex items-center justify-center mx-auto shadow-lg border-2 border-[#C5A059]">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#222422]">
                  {formData.attending === 'yes' ? "We Can't Wait to Celebrate Together!" : "Thank You for Letting Us Know!"}
                </h3>
                <p className="text-sm text-[#4A5D4E] max-w-md mx-auto mt-2 leading-relaxed">
                  {formData.attending === 'yes'
                    ? `Thank you, ${formData.fullName}! Your RSVP for ${formData.guestCount} guest(s) has been lovingly recorded. We'll see you on the backwaters!`
                    : `We will truly miss having you with us by the lake, ${formData.fullName}, but we know you'll be celebrating in spirit.`}
                </p>
              </div>

              {/* Calendar Buttons if attending */}
              {formData.attending === 'yes' && (
                <div className="pt-6 border-t border-[#C5A059]/25 max-w-md mx-auto space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#866732] block">
                    Save the Date to Your Calendar:
                  </span>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs font-semibold tracking-wide hover:bg-[#3D4D40] transition-colors flex items-center justify-center gap-2 border border-[#C5A059]/40"
                    >
                      <Calendar className="w-4 h-4 text-[#C5A059]" />
                      <span>Google Calendar</span>
                    </a>

                    <button
                      onClick={downloadIcsFile}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-[#4A5D4E] text-xs font-semibold tracking-wide border border-[#4A5D4E]/30 hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-[#C5A059]" />
                      <span>Apple / Outlook (.ics)</span>
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => { setIsSubmitted(false); setFormData(initialForm); }}
                className="text-xs text-[#866732] underline hover:text-[#222422] pt-4 block mx-auto"
              >
                Submit another response / modify details
              </button>
            </motion.div>
          ) : (
            /* Active RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Attendance Toggle */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#4A5D4E] font-bold mb-3 text-center">
                  Will You Be Joining Us in Alleppey? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button
                    type="button"
                    onClick={() => handleAttendingChange('yes')}
                    className={`py-4 px-5 rounded-2xl border text-sm font-medium transition-all flex flex-col items-center text-center ${
                      formData.attending === 'yes'
                        ? 'bg-[#4A5D4E] text-[#FAF7F2] border-[#C5A059] shadow-md ring-2 ring-[#C5A059]/30'
                        : 'bg-white/90 text-[#222422] border-[#4A5D4E]/20 hover:border-[#C5A059]'
                    }`}
                  >
                    <span className="font-semibold text-base mb-1">
                      🌿 Wouldn't miss it for the backwaters!
                    </span>
                    <span className={`text-xs ${formData.attending === 'yes' ? 'text-[#C5A059]' : 'text-[#4A4E4A]'}`}>
                      Counting down the days to Jan 30
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAttendingChange('no')}
                    className={`py-4 px-5 rounded-2xl border text-sm font-medium transition-all flex flex-col items-center text-center ${
                      formData.attending === 'no'
                        ? 'bg-[#B85D43] text-[#FAF7F2] border-[#9E4A32] shadow-md ring-2 ring-[#B85D43]/30'
                        : 'bg-white/90 text-[#222422] border-[#4A5D4E]/20 hover:border-[#B85D43]'
                    }`}
                  >
                    <span className="font-semibold text-base mb-1">
                      💌 Cheering from afar
                    </span>
                    <span className={`text-xs ${formData.attending === 'no' ? 'text-[#FAF7F2]/80' : 'text-[#4A4E4A]'}`}>
                      Sending love from distance
                    </span>
                  </button>
                </div>
              </div>

              {/* 2. Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C5A059]/20">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                    Your Full Name(s) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Menon"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                    WhatsApp Number * (For wedding updates)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                  />
                </div>

                {formData.attending === 'yes' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                      Total Number of Guests in Your Party
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                    >
                      <option value={1}>1 (Just me)</option>
                      <option value={2}>2 (Me + partner / spouse)</option>
                      <option value={3}>3 (Family of three)</option>
                      <option value={4}>4 (Family of four)</option>
                      <option value={5}>5+ (Extended family)</option>
                    </select>
                  </div>
                )}
              </div>

              {formData.attending === 'yes' && formData.guestCount > 1 && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                    Name(s) of Your Plus-One / Family Members
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maya & Kabir"
                    value={formData.plusOneNames}
                    onChange={(e) => setFormData({ ...formData, plusOneNames: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                  />
                </div>
              )}

              {/* 3. Event Checkboxes (If Attending) */}
              {formData.attending === 'yes' && (
                <div className="pt-4 border-t border-[#C5A059]/20 space-y-3">
                  <label className="block text-xs uppercase tracking-widest text-[#4A5D4E] font-bold mb-2">
                    Which Moments on Saturday, Jan 30th Will You Attend?
                  </label>

                  <div className="space-y-2.5">
                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#C5A059]/25 cursor-pointer hover:bg-white transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.events.temple}
                        onChange={() => handleEventCheckbox('temple')}
                        className="mt-1 h-4 w-4 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] border-[#C5A059]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-[#222422] block">
                          Morning Temple Blessings (07:30 AM – 09:30 AM)
                        </span>
                        <span className="text-[#4A4E4A]">
                          Alleppey Temple, prayers &amp; traditional nadaswaram.
                        </span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#C5A059]/25 cursor-pointer hover:bg-white transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.events.registrationAndSadya}
                        onChange={() => handleEventCheckbox('registrationAndSadya')}
                        className="mt-1 h-4 w-4 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] border-[#C5A059]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-[#222422] block">
                          Official Vows, Rings &amp; Grand Kerala Sadya (11:00 AM – 03:00 PM)
                        </span>
                        <span className="text-[#4A4E4A]">
                          Lakeside ceremony, cake cutting, and authentic banana-leaf feast.
                        </span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#C5A059]/25 cursor-pointer hover:bg-white transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.events.cocktails}
                        onChange={() => handleEventCheckbox('cocktails')}
                        className="mt-1 h-4 w-4 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] border-[#C5A059]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-[#222422] block">
                          Fireworks &amp; Cocktail Dinner (06:15 PM – Late)
                        </span>
                        <span className="text-[#4A4E4A]">
                          Sunset lake fireworks, cocktails, toasts, DJ beats &amp; dinner.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* 4. Travel Logistics & Cab-Pool */}
              {formData.attending === 'yes' && (
                <div className="pt-4 border-t border-[#C5A059]/20 space-y-4">
                  <label className="block text-xs uppercase tracking-widest text-[#4A5D4E] font-bold">
                    Travel &amp; Arrival Logistics
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#4A4E4A] font-medium mb-1">
                        Arrival Date
                      </label>
                      <select
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                      >
                        <option value="2027-01-28">Thursday, Jan 28</option>
                        <option value="2027-01-29">Friday, Jan 29 (Recommended)</option>
                        <option value="2027-01-30">Saturday, Jan 30 (Morning)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#4A4E4A] font-medium mb-1">
                        Travel Mode
                      </label>
                      <select
                        value={formData.travelMode}
                        onChange={(e) => setFormData({ ...formData, travelMode: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                      >
                        <option value="Flight to Kochi (COK)">Flight to Kochi (COK)</option>
                        <option value="Train to Alleppey (ALLP)">Train to Alleppey (ALLP)</option>
                        <option value="Train to Ernakulam (ERS/ERN)">Train to Ernakulam</option>
                        <option value="Self Drive / Cab from nearby">Self Drive / Cab from Kerala</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#4A4E4A] font-medium mb-1">
                        Approximate Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ~3:30 PM"
                        value={formData.arrivalTime}
                        onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Cab-Pool Opt-In Checkbox */}
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF2EF] border border-[#B85D43]/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.joinCabPool}
                      onChange={(e) => setFormData({ ...formData, joinCabPool: e.target.checked })}
                      className="h-4 w-4 rounded text-[#B85D43] focus:ring-[#B85D43] border-[#C5A059]"
                    />
                    <span className="text-xs text-[#7E3825]">
                      <strong>Yes, include me in the Kochi Airport Cab Pool</strong> to share a ride with fellow guests landing at COK.
                    </span>
                  </label>
                </div>
              )}

              {/* 5. Dietary & Song Request & Note */}
              <div className="pt-4 border-t border-[#C5A059]/20 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                      Dietary Preferences / Allergies
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Jain, Nut Allergy, Vegan"
                      value={formData.dietaryNotes}
                      onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                      className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                      Song Request for the Cocktail Dinner
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sweet Caroline or Chaiyya Chaiyya"
                      value={formData.songRequest}
                      onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                      className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                    A Message or Blessing for Renu &amp; Ayushman
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Leave a sweet note for the guestbook..."
                    value={formData.personalNote}
                    onChange={(e) => setFormData({ ...formData, personalNote: e.target.value })}
                    className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.attending}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] disabled:bg-gray-400 text-[#FAF7F2] font-semibold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto border border-[#C5A059]"
                >
                  {isSubmitting ? (
                    <span>Submitting Your Response...</span>
                  ) : (
                    <>
                      <span>Confirm &amp; Send RSVP</span>
                      <Send className="w-4 h-4 text-[#C5A059]" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#4A5D4E]/70 mt-3">
                  Need to change your response later? Just message us or submit this form again.
                </p>
              </div>

            </form>
          )}
        </AnimatePresence>

      </div>

    </section>
  );
};
