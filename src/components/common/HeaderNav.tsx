import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Flow", href: "#timeline-section" },
    { label: "The Venue", href: "#venue-section" },
    { label: "Explore", href: "#explore-section" },
    { label: "Guest Hub", href: "#guest-connection" },
    { label: "Contacts", href: "#concierge" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C5A059]/30 shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* Brand / Initials */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
          <span className="font-editorial text-xl sm:text-2xl font-semibold text-[#222422] group-hover:text-[#4A5D4E] transition-colors">
            Renu &amp; Ayushman
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-[#C5A059] font-medium hidden sm:inline">
            30.01.27
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-[#4A4E4A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#4A5D4E] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#rsvp-section"
            className="px-4 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase border border-[#C5A059]/40 hover:bg-[#3D4D40] transition-colors shadow-sm"
          >
            RSVP
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a
            href="#rsvp-section"
            className="px-3 py-1.5 rounded-full bg-[#4A5D4E] text-[#FAF7F2] font-semibold text-[11px] tracking-wider uppercase border border-[#C5A059]/40"
          >
            RSVP
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 sm:p-2 rounded-full bg-white/80 border border-[#C5A059]/30 text-[#4A5D4E]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#C5A059]/30 px-6 py-6 shadow-xl space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-medium text-[#222422] hover:text-[#4A5D4E] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#rsvp-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-full bg-[#4A5D4E] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase border border-[#C5A059]"
            >
              Kindly RSVP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
