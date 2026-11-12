import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Disc3, Music2, RotateCw, Check } from 'lucide-react';
import { WEDDING_DATA, GuestSquad } from '../../data/weddingData';
import { BotanicalDivider } from '../common/BotanicalMotifs';

export const CrewTriviaSection: React.FC = () => {
  // Flippable index cards state: squadId -> boolean
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Song Request widget state
  const [songName, setSongName] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songSaved, setSongSaved] = useState(false);
  const [isSpinning, setIsSpinning] = useState(true);

  // Trivia state: questionId -> selectedOptionId
  const [triviaAnswers, setTriviaAnswers] = useState<Record<string, string>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSongSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songName.trim()) return;

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('wedding_song_requests') || '[]');
    saved.push({ song: songName, artist: songArtist, time: new Date().toISOString() });
    localStorage.setItem('wedding_song_requests', JSON.stringify(saved));

    setSongSaved(true);
    setTimeout(() => {
      setSongName('');
      setSongArtist('');
      setSongSaved(false);
    }, 3500);
  };

  return (
    <section id="crew-trivia" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
          An Intimate 150-Guest Gathering
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#222422]">
          Who You'll Meet &amp; Music
        </h2>
        <p className="font-editorial italic text-base sm:text-lg text-[#4A5D4E]/80 mt-2">
          Flip the index cards for crew icebreakers, request a celebration anthem, and test your couple trivia
        </p>
        <BotanicalDivider className="my-6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 4 Flippable Index Cards (7 cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#866732]">
              Guest Squads • Tap to Flip Card
            </span>
            <span className="text-[11px] text-[#4A5D4E] flex items-center gap-1 font-mono">
              <RotateCw className="w-3 h-3 text-[#C5A059]" />
              <span>Tap to reveal secret</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WEDDING_DATA.squads.map((squad: GuestSquad) => {
              const isFlipped = !!flippedCards[squad.id];

              return (
                <div
                  key={squad.id}
                  onClick={() => toggleFlip(squad.id)}
                  className="h-56 cursor-pointer perspective group"
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 180, damping: 20 }}
                    className="w-full h-full relative preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    
                    {/* Front of Card (Tactile Stationery Index Card) */}
                    <div
                      className="absolute inset-0 backface-hidden stationery-card rounded-2xl p-5 flex flex-col justify-between border-2 border-[#C5A059]/30 hover:border-[#C5A059]/60 transition-all shadow-sm group-hover:shadow-md"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: squad.accent }}
                          />
                          <span className="text-[9px] uppercase tracking-wider font-mono text-[#866732]">
                            INDEX 0{squad.id.length}
                          </span>
                        </div>
                        <h4 className="font-editorial text-2xl text-[#222422] leading-tight">
                          {squad.name}
                        </h4>
                        <p className="font-editorial italic text-xs text-[#4A5D4E] mt-1">
                          {squad.subhead}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 my-2">
                          {squad.tags.map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/80 border border-[#C5A059]/20 text-[#4A4E4A]">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-[#C5A059]/20 text-[10px] uppercase tracking-wider text-[#866732] flex items-center justify-between">
                          <span>Icebreaker inside</span>
                          <span>↷</span>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card (Secret Icebreaker Revealed) */}
                    <div
                      className="absolute inset-0 backface-hidden rounded-2xl p-5 flex flex-col justify-between bg-gradient-to-br from-[#4A5D4E] to-[#313E34] text-[#FAF7F2] shadow-md border-2 border-[#C5A059]"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-mono block mb-1">
                          CONVERSATION STARTER
                        </span>
                        <h4 className="font-editorial text-xl text-[#FAF7F2]">
                          {squad.name}
                        </h4>
                      </div>

                      <div className="my-2 p-3 rounded-xl bg-black/20 border border-[#C5A059]/30">
                        <p className="font-editorial italic text-sm text-[#FAF7F2] leading-relaxed">
                          "{squad.icebreaker}"
                        </p>
                      </div>

                      <div className="text-[10px] uppercase tracking-wider text-[#C5A059] flex items-center justify-between pt-1">
                        <span>Tap to flip back</span>
                        <span>↶</span>
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Vinyl Song Request + Interactive Trivia (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* 1. Spinning Vinyl Turntable Song Request Widget */}
          <div className="stationery-card stationery-inner-border rounded-3xl p-6 sm:p-7 shadow-lg">
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Music2 className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#866732]">
                  Lakeside DJ Deck
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsSpinning(!isSpinning)}
                className="text-[10px] uppercase tracking-wider text-[#4A5D4E] hover:text-[#222422]"
              >
                {isSpinning ? "Pause Vinyl" : "Spin Vinyl"}
              </button>
            </div>

            {/* Turntable Groove Visual */}
            <div className="flex items-center gap-4 py-2">
              <div className="relative w-20 h-20 shrink-0">
                <motion.div
                  animate={{ rotate: isSpinning ? 360 : 0 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-20 h-20 rounded-full bg-[#1D241F] border-2 border-[#C5A059] flex items-center justify-center shadow-md relative"
                >
                  {/* Vinyl Grooves */}
                  <div className="w-16 h-16 rounded-full border border-white/10" />
                  <div className="w-12 h-12 rounded-full border border-white/10" />
                  {/* Center Label */}
                  <div className="w-7 h-7 rounded-full bg-[#B85D43] border border-white flex items-center justify-center text-[7px] font-mono text-white font-bold">
                    R&amp;A
                  </div>
                </motion.div>
              </div>

              <div>
                <h4 className="font-editorial text-2xl text-[#222422] leading-tight">
                  Request a Song
                </h4>
                <p className="font-editorial italic text-xs text-[#4A5D4E] mt-0.5">
                  Grooves, retro Malayalam &amp; indie tracks for the evening party.
                </p>
              </div>
            </div>

            {/* Interactive Song Request Form */}
            <form onSubmit={handleSongSubmit} className="mt-4 pt-4 border-t border-[#C5A059]/20 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Song Title"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                />
                <input
                  type="text"
                  placeholder="Artist / Band"
                  value={songArtist}
                  onChange={(e) => setSongArtist(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl border border-[#C5A059]/40 bg-white/90 focus:outline-none focus:ring-1 focus:ring-[#4A5D4E]"
                />
              </div>

              <button
                type="submit"
                disabled={!songName.trim() || songSaved}
                className="w-full py-2.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4D40] disabled:opacity-50 text-[#FAF7F2] text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-2 border border-[#C5A059]"
              >
                {songSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Added to Wedding Playlist!</span>
                  </>
                ) : (
                  <>
                    <Disc3 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Drop onto Playlist</span>
                  </>
                )}
              </button>
            </form>

          </div>

          {/* 2. Interactive Couple Trivia Cards */}
          <div className="stationery-card stationery-inner-border rounded-3xl p-6 shadow-md space-y-4">
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#866732]">
                Couple Predictions &amp; Trivia
              </span>
            </div>

            <div className="space-y-4">
              {WEDDING_DATA.trivia.map((q) => (
                <div key={q.id} className="p-3.5 rounded-2xl bg-white/70 border border-[#C5A059]/25 text-left">
                  <p className="text-xs font-semibold text-[#222422] mb-2">
                    {q.question}
                  </p>
                  
                  <div className="space-y-1.5">
                    {q.options.map((opt) => {
                      const isSelected = triviaAnswers[q.id] === opt.id;

                      return (
                        <div key={opt.id}>
                          <button
                            type="button"
                            onClick={() => setTriviaAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                            className={`w-full text-left text-[11px] p-2 rounded-xl border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#4A5D4E] text-[#FAF7F2] border-[#C5A059] shadow-xs'
                                : 'bg-white/80 text-[#4A4E4A] border-gray-200 hover:border-[#C5A059]'
                            }`}
                          >
                            <span>{opt.text}</span>
                            {isSelected && <span className="text-[#C5A059]">✓</span>}
                          </button>

                          {isSelected && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[10px] font-editorial italic text-[#866732] mt-1 px-1"
                            >
                              💬 {opt.funComment}
                            </motion.p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
