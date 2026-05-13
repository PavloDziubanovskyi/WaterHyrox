import { motion } from 'framer-motion';
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
  const topOffset = 60 + index * 20;

  return (
    // Outer wrapper takes 100vh height — this gives each card its own "scroll page"
    // so that the user MUST scroll a full viewport before next card slides over
    <div className="h-screen w-full relative">
      <div
        className="sticky w-full"
        style={{
          top: `${topOffset}px`,
          zIndex: index + 1,
        }}
      >
        <motion.div
          className="relative w-full max-w-6xl mx-auto bg-black border border-white/15 overflow-hidden rounded-lg shadow-2xl"
          style={{ height: 'calc(100vh - 140px)', minHeight: '480px' }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Giant pink stage number on the right */}
          <div className="absolute top-0 right-0 h-full flex items-center pr-4 md:pr-12 pointer-events-none overflow-hidden">
            <span className="font-display text-[160px] sm:text-[240px] md:text-[360px] lg:text-[440px] leading-[0.7] text-pink-accent/10 select-none">
              {stageNumber}
            </span>
          </div>

          {/* Content - left side (text) */}
          <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10">
            {/* Left column: Stage info */}
            <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 pt-8 lg:pt-0">
              {/* Stage label */}
              <div className="font-body text-xs sm:text-sm tracking-[0.3em] text-pink-accent mb-4 md:mb-6 uppercase">
                Етап {stageNumber} / {total}
              </div>

              {/* Icon */}
              <div className="flex items-center gap-3 mb-4 md:mb-6 text-white">
                <IconComponent size={40} strokeWidth={1.5} className="md:hidden" />
                <IconComponent size={72} strokeWidth={1.5} className="hidden md:block" />
                {SecondaryIcon && (
                  <>
                    <SecondaryIcon size={40} strokeWidth={1.5} className="md:hidden" />
                    <SecondaryIcon size={72} strokeWidth={1.5} className="hidden md:block" />
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[0.9] text-white uppercase">
                {stage.title}
              </h3>
            </div>

            {/* Right column: Video placeholder */}
            <div className="flex items-center justify-center px-6 sm:px-10 md:px-12 lg:pr-16 lg:pl-0 pb-8 lg:pb-0">
              <div className="w-full aspect-video bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* TODO: replace with actual video URL */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-body text-xs md:text-sm text-white/20 tracking-wider mt-2">
                    Відео незабаром
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom hint - absolute over the whole card */}
          <div className="absolute bottom-4 md:bottom-6 left-6 sm:left-10 md:left-14 lg:left-16 right-6 sm:right-10 md:right-14 lg:right-16 flex justify-between items-end pointer-events-none">
            <div className="font-body text-xs text-white/30 tracking-wider uppercase">
              {stageNumber < total ? 'Гортайте далі' : 'Фініш'}
            </div>
            <div className="font-display text-sm sm:text-base text-white/30">
              {stageNumber} / {total}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Format() {
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

      {/* Stacked cards container - each card occupies one viewport height of scroll */}
      <div className="relative px-4 sm:px-6 md:px-10 pb-24">
        {stages.map((stage, i) => (
          <StackedStage key={i} stage={stage} index={i} total={stages.length} />
        ))}
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
