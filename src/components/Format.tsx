import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Waves, Flame, Dumbbell, Footprints, Flag } from 'lucide-react';

const GongIcon = ({ size = 80, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <line x1="12" y1="5" x2="12" y2="1" />
    <line x1="4" y1="13" x2="8" y2="13" />
  </svg>
);

const stages = [
  { icon: Waves, title: '100 М ПЛАВАННЯ' },
  { icon: Flame, title: 'БЕРПІ-СТРИБКИ 40М' },
  { icon: Waves, title: '100 М ПЛАВАННЯ' },
  { icon: Dumbbell, title: 'FARMER CARRY 40М' },
  { icon: Waves, title: '100 М ПЛАВАННЯ' },
  { icon: Footprints, title: 'BEAR CRAWL' },
  { icon: Waves, title: '100 М ПЛАВАННЯ' },
  { icon: Flag, title: 'ФІНІШ — БІГ 200М + ГОНГ', secondaryIcon: GongIcon },
];

interface StageProps {
  stage: typeof stages[0];
  index: number;
  total: number;
}

function StackedStage({ stage, index, total }: StageProps) {
  const IconComponent = stage.icon;
  const SecondaryIcon = stage.secondaryIcon;
  const stageNumber = index + 1;

  // Each card sticks at slightly different top offset to create visible stacked edge
  const topOffset = 60 + index * 24; // 60px base + 24px per card

  return (
    <div
      className="sticky"
      style={{
        top: `${topOffset}px`,
        // Small margin so cards push each other
        marginBottom: '24vh',
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="relative w-full max-w-6xl mx-auto bg-black border border-white/15 overflow-hidden rounded-lg shadow-2xl"
        style={{ height: '70vh', minHeight: '480px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Giant pink stage number on the right */}
        <div className="absolute top-0 right-0 h-full flex items-center pr-4 md:pr-12 pointer-events-none overflow-hidden">
          <span className="font-display text-[180px] sm:text-[260px] md:text-[380px] lg:text-[460px] leading-[0.7] text-pink-accent/10 select-none">
            {stageNumber}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20">
          {/* Stage label */}
          <div className="font-body text-xs sm:text-sm tracking-[0.3em] text-pink-accent mb-6 uppercase">
            Етап {stageNumber} / {total}
          </div>

          {/* Icon */}
          <div className="flex items-center gap-3 mb-6 text-white">
            <IconComponent size={44} strokeWidth={1.5} className="md:hidden" />
            <IconComponent size={80} strokeWidth={1.5} className="hidden md:block" />
            {SecondaryIcon && (
              <>
                <SecondaryIcon size={44} strokeWidth={1.5} className="md:hidden" />
                <SecondaryIcon size={80} strokeWidth={1.5} className="hidden md:block" />
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-[36px] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-[0.9] text-white uppercase max-w-4xl">
            {stage.title}
          </h3>

          {/* Bottom hint */}
          <div className="absolute bottom-6 md:bottom-8 left-6 sm:left-10 md:left-16 lg:left-20 right-6 sm:right-10 md:right-16 lg:right-20 flex justify-between items-end">
            <div className="font-body text-xs text-white/30 tracking-wider uppercase">
              {stageNumber < total ? 'Гортайте далі' : 'Фініш'}
            </div>
            <div className="font-display text-sm sm:text-base text-white/30">
              {stageNumber} / {total}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Format() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="format" className="bg-black relative">
      {/* Section header */}
      <div className="px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-8 md:pb-12 max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-[44px] sm:text-[64px] md:text-[100px] lg:text-[140px] leading-none text-white mb-4"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20, stiffness: 80 }}
        >
          ЯК ЦЕ<br />ВІДБУВАЄТЬСЯ
        </motion.h2>
        <motion.p
          className="font-body text-xs sm:text-sm md:text-base tracking-[0.2em] text-pink-accent uppercase"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          8 етапів. Безперервний хронометраж.
        </motion.p>
      </div>

      {/* Stacked cards container */}
      <div ref={containerRef} className="relative px-4 sm:px-6 md:px-10 pb-32">
        <div className="relative">
          {stages.map((stage, i) => (
            <StackedStage key={i} stage={stage} index={i} total={stages.length} />
          ))}
        </div>
      </div>

      {/* Veteran modifications notes */}
      <div className="px-6 md:px-10 py-12 md:py-16 max-w-7xl mx-auto">
        <motion.div
          className="border-l-2 border-pink-accent/60 pl-6 py-2 space-y-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase mb-3">
            Модифікації для категорії «Ветерани»
          </div>
          <p className="font-body text-sm md:text-base text-white/60 leading-relaxed">
            <span className="text-pink-accent font-semibold">*</span> Станція 1 — «Берпі зі стрибком в довжину» — можлива модифікація з відтисканням та крокуванням
          </p>
          <p className="font-body text-sm md:text-base text-white/60 leading-relaxed">
            <span className="text-pink-accent font-semibold">**</span> Станція 2 — «Прогулянка фермера» — передбачена можливість вибору ваги гантелей
          </p>
        </motion.div>
      </div>
    </section>
  );
}
