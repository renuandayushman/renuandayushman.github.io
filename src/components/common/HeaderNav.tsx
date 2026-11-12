import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';

export const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Flow", href: "#timeline-section" },
    { label: "The Setting", href: "#venue-explore" },
    { label: "The Crew", href: "#crew-trivia" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#C5A059]/30 shadow-2xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-editorial text-lg sm:text-2xl font-normal text-[#222422] group-hover:text-[#4A5D4E] transition-colors tracking-tight">
            {WEDDING_DATA.couple.bride} &amp; {WEDDING_DATA.couple.groom}
          </span>
          <span className="text-[11px] font-mono text-[#C5A059] font-medium hidden sm:inline">
            30.01.27
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#4A5D4E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#222422] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#rsvp-section"
            className="px-5 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium border border-[#C5A059]/40 hover:bg-[#3D4D40] transition-colors shadow-xs"
          >
            RSVP
          </a>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#rsvp-section"
            className="px-3.5 py-1.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-[11px] uppercase tracking-wider font-medium border border-[#C5A059]/40"
          >
            RSVP
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-1.5 rounded-full bg-white/70 border border-[#C5A059]/30 text-[#4A5D4E]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#C5A059]/30 px-6 py-5 shadow-lg space-y-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] font-medium text-[#222422] hover:text-[#4A5D4E] py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#rsvp-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium border border-[#C5A059]"
            >
              RSVP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
