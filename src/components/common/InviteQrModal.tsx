import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, QrCode, ExternalLink, ShieldCheck, Printer, Sparkles, Check, Copy } from 'lucide-react';
import { WEDDING_DATA } from '../../data/weddingData';
import { WaxSealEmblem } from './BotanicalMotifs';

interface InviteQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QrVariant {
  id: string;
  name: string;
  badge: string;
  description: string;
  svgPath: string;
  pngPath: string;
}

const QR_VARIANTS: QrVariant[] = [
  {
    id: 'qr-monogram-kasavu',
    name: 'Kasavu Gold & Sage (R&A Monogram)',
    badge: 'Luxury Stationery',
    description: 'Bespoke Kerala wedding edition with Antique Kasavu Gold ring and embedded R&A wax seal medallion.',
    svgPath: '/qr-codes/qr-monogram-kasavu.svg',
    pngPath: '/qr-codes/qr-monogram-kasavu.png',
  },
  {
    id: 'qr-classic-dark',
    name: 'Crisp Dark Ink (White Card)',
    badge: 'Printer Favorite',
    description: 'High-contrast charcoal on solid white. 100% scan reliability in any dim banquet hall or bright sunlight.',
    svgPath: '/qr-codes/qr-classic-dark.svg',
    pngPath: '/qr-codes/qr-classic-dark.png',
  },
  {
    id: 'qr-classic-transparent',
    name: 'Crisp Ink (Transparent)',
    badge: 'Textured Paper / Hot-Foil',
    description: 'No background color. Perfect for printing directly on textured cotton-rag, vellum, or gold foil stamping.',
    svgPath: '/qr-codes/qr-classic-transparent.svg',
    pngPath: '/qr-codes/qr-classic-transparent.png',
  },
  {
    id: 'qr-kerala-sage',
    name: 'Sadya Sage on Warm Ivory',
    badge: 'Editorial Palette',
    description: 'Botanical Kerala Sadya green on warm ivory paper tone, matching the website aesthetic.',
    svgPath: '/qr-codes/qr-kerala-sage.svg',
    pngPath: '/qr-codes/qr-kerala-sage.png',
  },
];

export const InviteQrModal: React.FC<InviteQrModalProps> = ({ isOpen, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState<QrVariant>(QR_VARIANTS[0]);
  const [copied, setCopied] = useState(false);

  const activeUrl = WEDDING_DATA.qrConfig?.activeUrl || 'https://renuandayushman.github.io/#rsvp-section';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(activeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestScan = () => {
    onClose();
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#FAF7F2] border border-[#C5A059]/50 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl z-10 my-auto paper-texture max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 border border-[#C5A059]/30 text-[#4A5D4E] hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-block mb-2">
                <WaxSealEmblem size={44} />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
                Physical Wedding Stationery Assets
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#222422] mt-1">
                RSVP Invitation QR Code
              </h3>
              <p className="text-xs text-[#4A4E4A] max-w-md mx-auto mt-1">
                Print-ready vector SVG and 300 DPI high-resolution files designed to scan directly to your wedding RSVP portal.
              </p>
            </div>

            {/* Target URL Banner */}
            <div className="bg-white/80 border border-[#C5A059]/30 rounded-2xl p-3.5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 truncate max-w-full">
                <span className="px-2 py-0.5 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] font-semibold text-[10px] uppercase shrink-0">
                  Encoded Destination
                </span>
                <span className="font-mono text-[#222422] truncate font-medium">
                  {activeUrl}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 text-[#4A5D4E] hover:bg-white text-[11px] font-medium transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleTestScan}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#4A5D4E] text-[#FAF7F2] hover:bg-[#3D4D40] text-[11px] font-medium transition-colors"
                >
                  <span>Test Jump</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Variant Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {QR_VARIANTS.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-white/50 border-[#C5A059]/20 hover:bg-white/80'
                    }`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                      {variant.badge}
                    </span>
                    <span className="font-medium text-[#222422] leading-tight line-clamp-1">
                      {variant.name.split('(')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* QR Code Display & Download Zone */}
            <div className="bg-white rounded-2xl border border-[#C5A059]/30 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm mb-6">
              {/* QR Image Box */}
              <div className="relative group shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 p-3 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/30 shadow-inner flex items-center justify-center">
                  <img
                    src={selectedVariant.svgPath}
                    alt={selectedVariant.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-[10px] text-[#4A5D4E]/80 font-mono">
                    Scan with your phone to test
                  </span>
                </div>
              </div>

              {/* Variant Details & Actions */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#866732] text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>{selectedVariant.badge}</span>
                </div>

                <h4 className="font-editorial text-xl text-[#222422]">
                  {selectedVariant.name}
                </h4>

                <p className="text-xs text-[#4A4E4A] leading-relaxed">
                  {selectedVariant.description}
                </p>

                {/* Print Safety Specs */}
                <div className="py-2 space-y-1 text-[11px] text-[#4A5D4E]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Error Correction Level H (30%):</strong> Scans even if creased or framed.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span><strong>Print Resolution:</strong> Vector SVG (infinite) + 2048px Ultra-HD PNG @ 300 DPI.</span>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={selectedVariant.svgPath}
                    download={`${selectedVariant.id}.svg`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A5D4E] text-[#FAF7F2] hover:bg-[#3D4D40] text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Vector (.SVG)</span>
                  </a>
                  <a
                    href={selectedVariant.pngPath}
                    download={`${selectedVariant.id}.png`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#C5A059]/40 text-[#222422] hover:bg-[#FAF7F2] text-xs font-semibold tracking-wide transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Download 300 DPI (.PNG)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Permanent Invite Advice & Deployment Guide */}
            <div className="bg-[#FAF2EF] border border-[#B85D43]/20 rounded-2xl p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#B85D43]">
                <QrCode className="w-4 h-4" />
                <span>Stationery Printing Rule: Keeping the QR Code Permanent</span>
              </div>
              <p className="text-[#4A4E4A] leading-relaxed">
                Because physical wedding cards cannot be updated once printed on paper, the QR code must point to a <strong>permanent URL</strong> that never changes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#4A4E4A]">
                <li>
                  <strong>Option A (Permanent Custom Domain):</strong> If you plan to deploy to a custom domain (e.g. <code className="bg-white/80 px-1 py-0.5 rounded text-[11px]">renu-ayushman.wedding</code> or <code className="bg-white/80 px-1 py-0.5 rounded text-[11px]">renuandayushman.com</code>), the QR encodes that exact domain with <code className="bg-white/80 px-1 py-0.5 rounded text-[11px]">/#rsvp-section</code>.
                </li>
                <li>
                  <strong>Option B (Dynamic Short Link - Zero Risk):</strong> Use an editable redirect (like <code className="bg-white/80 px-1 py-0.5 rounded text-[11px]">tinyurl.com/renu-ayushman-rsvp</code>). You can point it to localhost/preview today, your live domain tomorrow, and even a thank-you photo gallery next year without ever reprinting your cards!
                </li>
              </ul>
              <div className="pt-1 text-[11px] text-[#866732] font-mono">
                To regenerate with any new URL: run <code className="bg-white/80 px-1 py-0.5 rounded font-semibold">npm run generate-qr "YOUR_URL"</code>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
