import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Car, HelpCircle, Music, Check, Share2, Sparkles } from 'lucide-react';
import { WEDDING_DATA, GuestSquad, TriviaQuestion } from '../../data/weddingData';
import { BotanicalDivider } from '../common/BotanicalMotifs';

export const GuestConnectionSection: React.FC = () => {
  // Tabs: 'squads' | 'cabpool' | 'trivia' | 'music'
  const [activeTab, setActiveTab] = useState<'squads' | 'cabpool' | 'trivia' | 'music'>('squads');

  // Trivia state: questionId -> selectedOptionId
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  // Cab Pool state: sample list of registered guests sharing cabs + quick add form
  const [cabPoolEntries, setCabPoolEntries] = useState([
    { name: "Siddharth & Ananya", date: "Jan 29", time: "02:30 PM", flight: "IndiGo 6E 412 from BLR", seatsLeft: 2 },
    { name: "Varun (IISER crew)", date: "Jan 29", time: "05:15 PM", flight: "Air India AI 504 from PNQ", seatsLeft: 3 },
    { name: "Rohan & Sneha", date: "Jan 30", time: "08:45 AM", flight: "Akasa QP 1331 from BOM", seatsLeft: 1 },
  ]);

  const [newCabName, setNewCabName] = useState("");
  const [newCabTime, setNewCabTime] = useState("");
  const [newCabDate, setNewCabDate] = useState("Jan 29");
  const [newCabFlight, setNewCabFlight] = useState("");
  const [cabAddedSuccess, setCabAddedSuccess] = useState(false);

  // Cocktail Song Request box
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songNote, setSongNote] = useState("");
  const [songSubmitted, setSongSubmitted] = useState(false);

  const handleTriviaSelect = (questionId: string, optionId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleAddCabPool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCabName.trim() || !newCabTime.trim()) return;

    setCabPoolEntries(prev => [
      ...prev,
      {
        name: newCabName.trim(),
        date: newCabDate,
        time: newCabTime.trim(),
        flight: newCabFlight.trim() || "Flight / Train Arrival",
        seatsLeft: 2,
      }
    ]);
    setNewCabName("");
    setNewCabTime("");
    setNewCabFlight("");
    setCabAddedSuccess(true);
    setTimeout(() => setCabAddedSuccess(false), 4000);
  };

  const handleSongSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songTitle.trim()) return;
    setSongSubmitted(true);
    setTimeout(() => {
      setSongTitle("");
      setSongArtist("");
      setSongNote("");
      setSongSubmitted(false);
    }, 4500);
  };

  return (
    <section id="guest-connection" className="py-20 sm:py-28 px-4 max-w-6xl mx-auto relative">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
          An Intimate 150-Guest Circle
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          Guest Connection Hub
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl text-[#4A5D4E] mt-3 max-w-2xl mx-auto">
          From Bangalore runners and IISER Pune physics pals to Kerala family and game night strategists — get to know who is coming!
        </p>
        <BotanicalDivider />
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
        <button
          onClick={() => setActiveTab('squads')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
            activeTab === 'squads'
              ? 'bg-[#4A5D4E] text-[#FAF7F2] shadow-sm border border-[#C5A059]/40'
              : 'bg-white/80 text-[#4A4E4A] hover:bg-[#FAF7F2] border border-[#4A5D4E]/15'
          }`}
        >
          <Users className="w-4 h-4 text-[#C5A059]" />
          <span>Meet the Squads</span>
        </button>

        <button
          onClick={() => setActiveTab('cabpool')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
            activeTab === 'cabpool'
              ? 'bg-[#4A5D4E] text-[#FAF7F2] shadow-sm border border-[#C5A059]/40'
              : 'bg-white/80 text-[#4A4E4A] hover:bg-[#FAF7F2] border border-[#4A5D4E]/15'
          }`}
        >
          <Car className="w-4 h-4 text-[#C5A059]" />
          <span>Kochi Airport Cab-Pool</span>
        </button>

        <button
          onClick={() => setActiveTab('trivia')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
            activeTab === 'trivia'
              ? 'bg-[#4A5D4E] text-[#FAF7F2] shadow-sm border border-[#C5A059]/40'
              : 'bg-white/80 text-[#4A4E4A] hover:bg-[#FAF7F2] border border-[#4A5D4E]/15'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-[#C5A059]" />
          <span>Wedding Trivia</span>
        </button>

        <button
          onClick={() => setActiveTab('music')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
            activeTab === 'music'
              ? 'bg-[#4A5D4E] text-[#FAF7F2] shadow-sm border border-[#C5A059]/40'
              : 'bg-white/80 text-[#4A4E4A] hover:bg-[#FAF7F2] border border-[#4A5D4E]/15'
          }`}
        >
          <Music className="w-4 h-4 text-[#C5A059]" />
          <span>Cocktail Song Box</span>
        </button>
      </div>

      {/* Tab 1: Meet the Squads */}
      {activeTab === 'squads' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WEDDING_DATA.squads.map((squad: GuestSquad, idx) => (
            <motion.div
              key={squad.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/30 rounded-3xl p-6 sm:p-7 shadow-vellum hover:shadow-vellum-hover transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${squad.badgeColor}`}>
                    Squad #{idx + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    {squad.vibes.map(v => (
                      <span key={v} className="text-[10px] text-[#4A5D4E]/70 bg-white/70 px-2 py-0.5 rounded-md border border-[#4A5D4E]/10">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422] mb-1">
                  {squad.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#866732] font-medium mb-3">
                  {squad.subtitle}
                </p>

                <p className="text-sm text-[#4A4E4A] leading-relaxed mb-5">
                  {squad.membersNote}
                </p>
              </div>

              {/* Instant Icebreaker prompt */}
              <div className="p-3.5 rounded-2xl bg-[#4A5D4E]/05 border border-[#4A5D4E]/15 text-xs">
                <span className="font-semibold text-[#4A5D4E] uppercase tracking-wider text-[10px] block mb-1">
                  🎯 Guaranteed Icebreaker:
                </span>
                <span className="text-[#222422] font-medium italic">
                  "{squad.icebreaker}"
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 2: Kochi Airport Cab-Pool Matcher */}
      {activeTab === 'cabpool' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-8 shadow-vellum max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#C5A059]/20">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422]">
                Kochi Airport (COK) → Alleppey Cab Pool
              </h3>
              <p className="text-xs text-[#4A5D4E] uppercase tracking-wider mt-1">
                Save money, enjoy the scenic 2-hour coastal drive, and catch up with old friends!
              </p>
            </div>
            <a
              href="https://wa.me/919447188990?text=Hi%20Girish%20Chettan!%20I'd%20like%20to%20book%20a%20cab%20from%20Kochi%20Airport%20to%20Punnamada%20Resort."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs font-medium hover:bg-[#3D4D40] transition-colors shrink-0"
            >
              <span>Ask Girish Chettan for a Cab</span>
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Active Cab Pool List */}
          <div className="my-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#866732]">
              Guests Open to Sharing a Cab:
            </h4>
            {cabPoolEntries.map((cab, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/80 border border-[#C5A059]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C5A059]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#222422]">{cab.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] font-medium">
                      {cab.date} • {cab.time}
                    </span>
                  </div>
                  <div className="text-xs text-[#4A4E4A] mt-1">{cab.flight}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#B85D43] bg-[#FAF2EF] px-2.5 py-1 rounded-full border border-[#B85D43]/20">
                    ~{cab.seatsLeft} seats free
                  </span>
                  <a
                    href={`https://wa.me/?text=Hey!%20I%20saw%20your%20listing%20on%20Renu%20and%20Ayushman's%20wedding%20cab-pool%20for%20${cab.date}%20at%20${cab.time}.%20Can%20I%20join%20your%20cab%20to%20Alleppey?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#4A5D4E] underline hover:text-[#222422]"
                  >
                    Connect via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Add Your Flight Form */}
          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 bg-[#FAF7F2] p-5 rounded-2xl border border-[#4A5D4E]/15">
            <h4 className="font-editorial text-xl text-[#222422] mb-1">
              Add Your Arrival to the Cab Pool
            </h4>
            <p className="text-xs text-[#4A4E4A] mb-4">
              Enter your details so other guests landing around the same time can coordinate:
            </p>

            <form onSubmit={handleAddCabPool} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Your Name(s)"
                value={newCabName}
                onChange={(e) => setNewCabName(e.target.value)}
                required
                className="px-3.5 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />

              <select
                value={newCabDate}
                onChange={(e) => setNewCabDate(e.target.value)}
                className="px-3.5 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              >
                <option value="Jan 28">Thu, Jan 28</option>
                <option value="Jan 29">Fri, Jan 29 (Recommended)</option>
                <option value="Jan 30">Sat, Jan 30 (Morning)</option>
              </select>

              <input
                type="text"
                placeholder="Landing Time (e.g. 03:00 PM)"
                value={newCabTime}
                onChange={(e) => setNewCabTime(e.target.value)}
                required
                className="px-3.5 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />

              <input
                type="text"
                placeholder="Flight/Train # (optional)"
                value={newCabFlight}
                onChange={(e) => setNewCabFlight(e.target.value)}
                className="px-3.5 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />

              <div className="sm:col-span-4 flex items-center justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs font-medium hover:bg-[#3D4D40] transition-colors"
                >
                  Post to Cab Pool
                </button>
              </div>
            </form>

            {cabAddedSuccess && (
              <div className="mt-3 text-xs text-[#4A5D4E] font-medium flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Added to the list! You can also share your link in the wedding WhatsApp group.</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Tab 3: Wedding Trivia & Predictions Mini-Game */}
      {activeTab === 'trivia' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422]">
              Wedding Trivia &amp; Predictions
            </h3>
            <p className="text-xs text-[#866732] uppercase tracking-wider mt-1">
              Tap an option to lock in your prediction and see the story!
            </p>
          </div>

          {WEDDING_DATA.trivia.map((q: TriviaQuestion, idx) => {
            const chosen = selectedAnswers[q.id];

            return (
              <div
                key={q.id}
                className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-7 shadow-vellum"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#866732]">
                    Question #{idx + 1}
                  </span>
                </div>

                <h4 className="font-editorial text-xl sm:text-2xl text-[#222422] mb-4">
                  {q.question}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt) => {
                    const isSelected = chosen === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleTriviaSelect(q.id, opt.id)}
                        className={`text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-[#4A5D4E] text-[#FAF7F2] border-[#C5A059] shadow-sm ring-2 ring-[#C5A059]/30'
                            : 'bg-white/80 text-[#222422] border-[#4A5D4E]/15 hover:border-[#C5A059]/50 hover:bg-[#FAF7F2]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt.text}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#C5A059] shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Fun reveal comment if answered */}
                {chosen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 rounded-xl bg-[#FAF2EF] border border-[#B85D43]/20 text-xs text-[#7E3825] flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#B85D43] shrink-0" />
                    <span>
                      {q.options.find(o => o.id === chosen)?.funComment}
                    </span>
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Tab 4: Cocktail Song Box */}
      {activeTab === 'music' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="backdrop-blur-md bg-[#FAF7F2]/90 border border-[#C5A059]/35 rounded-3xl p-6 sm:p-8 shadow-vellum max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-[#4A5D4E]/10 border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-4 text-[#4A5D4E]">
            <Music className="w-6 h-6 text-[#C5A059]" />
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422]">
            Help Craft the Evening Soundtrack
          </h3>
          <p className="text-sm text-[#4A4E4A] max-w-md mx-auto mt-2 mb-6">
            What track will get you racing to the dance floor by Vembanad Lake? Indie, 90s nostalgia, Malayalam grooves, disco, or Bollywood — tell the DJ!
          </p>

          <form onSubmit={handleSongSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                Song Title
              </label>
              <input
                type="text"
                placeholder="e.g., Jimikki Kammal, Dancing Queen, or Mr. Brightside"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                required
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                Artist / Movie
              </label>
              <input
                type="text"
                placeholder="e.g., Avial, ABBA, The Killers, or A.R. Rahman"
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4A5D4E] font-medium mb-1">
                Why this song? (Optional memory)
              </label>
              <input
                type="text"
                placeholder="e.g., College hostel anthem, or guarantees to make Ayushman dance"
                value={songNote}
                onChange={(e) => setSongNote(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 bg-white focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] text-[#FAF7F2] font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all border border-[#C5A059]/40"
            >
              Send Track to DJ's Crate
            </button>
          </form>

          {songSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-4 rounded-2xl bg-[#4A5D4E]/10 border border-[#4A5D4E]/25 text-xs text-[#4A5D4E] font-medium flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4 text-[#C5A059]" />
              <span>Track added to the wedding evening playlist! See you on the floor.</span>
            </motion.div>
          )}
        </motion.div>
      )}

    </section>
  );
};
