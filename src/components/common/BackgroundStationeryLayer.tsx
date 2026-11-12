import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LushKeralaFoliageBleed, KettuvallamScenicSketch } from './BotanicalMotifs';

export const BackgroundStationeryLayer: React.FC = () => {
  const { scrollY } = useScroll();

  // Multi-layered parallax depth transforms
  const yFoliageTopL = useTransform(scrollY, [0, 2000], [0, -120]);
  const yFoliageTopR = useTransform(scrollY, [0, 2000], [0, -70]);
  const yBoatMidL = useTransform(scrollY, [0, 2500], [0, 160]);
  const yFoliageMidR = useTransform(scrollY, [0, 2500], [0, -90]);
  const yFoliageBottomL = useTransform(scrollY, [0, 3000], [0, 120]);
  const yFoliageBottomR = useTransform(scrollY, [0, 3000], [0, 80]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden cotton-paper-bg" aria-hidden="true">
      
      {/* 1. Top-Left Lush Botanical Bleed (Sage & Terracotta Lotus) */}
      <motion.div
        style={{ y: yFoliageTopL }}
        className="absolute -top-12 -left-14 sm:-left-8 w-72 sm:w-96 h-auto opacity-[0.28] select-none"
      >
        <LushKeralaFoliageBleed className="w-full h-full" />
      </motion.div>

      {/* 2. Top-Right Arching Palm Fronds & Gold Accents (Flipped) */}
      <motion.div
        style={{ y: yFoliageTopR }}
        className="absolute -top-16 -right-16 sm:-right-10 w-80 sm:w-[420px] h-auto opacity-[0.26] select-none"
      >
        <LushKeralaFoliageBleed className="w-full h-full" flipped />
      </motion.div>

      {/* 3. Mid-Left Kettuvallam Houseboat on Vembanad Waters */}
      <motion.div
        style={{ y: yBoatMidL }}
        className="absolute top-[38%] -left-12 sm:-left-6 w-56 sm:w-80 h-auto opacity-[0.24] select-none"
      >
        <KettuvallamScenicSketch className="w-full h-full" />
      </motion.div>

      {/* 4. Mid-Right Lush Lotus & Foliage Bleed */}
      <motion.div
        style={{ y: yFoliageMidR }}
        className="absolute top-[48%] -right-14 sm:-right-8 w-72 sm:w-96 h-auto opacity-[0.24] select-none"
      >
        <LushKeralaFoliageBleed className="w-full h-full" flipped />
      </motion.div>

      {/* 5. Bottom-Left Foliage Anchor */}
      <motion.div
        style={{ y: yFoliageBottomL }}
        className="absolute -bottom-16 -left-14 sm:-left-10 w-80 sm:w-[400px] h-auto opacity-[0.26] select-none"
      >
        <LushKeralaFoliageBleed className="w-full h-full" />
      </motion.div>

      {/* 6. Bottom-Right Foliage Anchor */}
      <motion.div
        style={{ y: yFoliageBottomR }}
        className="absolute -bottom-20 -right-16 sm:-right-10 w-84 sm:w-[420px] h-auto opacity-[0.28] select-none"
      >
        <LushKeralaFoliageBleed className="w-full h-full" flipped />
      </motion.div>

    </div>
  );
};
