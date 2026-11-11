import React from 'react';

interface VellumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'ivory' | 'sage' | 'dark';
  deckled?: boolean;
}

export const VellumCard: React.FC<VellumCardProps> = ({
  children,
  className = "",
  variant = 'ivory',
  deckled = false,
}) => {
  const variantStyles = {
    ivory: "bg-[#FAF7F2]/90 border-[#C5A059]/30 text-[#222422] shadow-vellum",
    sage: "bg-[#4A5D4E]/05 border-[#4A5D4E]/25 text-[#222422] shadow-vellum",
    dark: "bg-[#222422]/90 border-[#C5A059]/30 text-[#FAF7F2] shadow-2xl",
  };

  return (
    <div
      className={`relative backdrop-blur-md rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-vellum-hover ${variantStyles[variant]} ${
        deckled ? 'deckled-border' : ''
      } ${className}`}
    >
      {/* Delicate Kasavu corner flourishes */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C5A059]/40 pointer-events-none rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C5A059]/40 pointer-events-none rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C5A059]/40 pointer-events-none rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C5A059]/40 pointer-events-none rounded-br-sm" />

      {children}
    </div>
  );
};
