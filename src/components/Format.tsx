import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Waves, Flame, Dumbbell, Footprints, Flag, ChevronLeft, ChevronRight } from 'lucide-react';

const GongIcon = ({ size = 64, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <line x1="12" y1="5" x2="12" y2="1" />
    <line x1="4" y1="13" x2="8" y2="13" />
  </svg>
);

const stages = [
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Перший відрізок' },
  { icon: Flame, title: 'БЕРПІ-СТРИБКИ 40М', subtitle: 'Станція 1*' },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Другий відрізок' },
  { icon: Dumbbell, title: 'FARMER CARRY 40М', subtitle: 'Станція 2**' },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Третій відрізок' },
  { icon: Footprints, title: 'BEAR CRAWL', subtitle: 'Станція 3' },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Четвертий відрізок' },
  { icon: Flag, title: 'ФІНІШ — БІГ 200М + ГОНГ', subtitle: 'Фінальний ривок', secondaryIcon: GongIcon },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.88,
  }),
};

export default function Format() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    if (current > 0) goTo(current - 1);
  };

  const next = () => {
    if (current < stages.length - 1) goTo(current + 1);
  };

  // Keyboard navigation
  useState(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const stage = stages[current];
  const IconComponent = stage.icon;
  const SecondaryIcon = stage.secondaryIcon;

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

      {/* Slider */}
      <div className="relative px-4 sm:px-6 md:px-10 pb-8 max-w-7xl mx-auto">

        {/* Progress bar */}
        <div className="w-full h-0.5 bg-white/10 mb-6 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-pink-accent rounded-full"
            animate={{ width: `${((current + 1) / stages.length) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Card container with overflow hidden for slide effect */}
        <div className="relative overflow-hidden rounded-xl" style={{ height: 'min(75vh, 600px)', minHeight: '460px' }}>

          {/* Background stack — showing 2 cards behind for depth */}
          {[2, 1].map((offset) => {
            const idx = current + offset;
            if (idx >= stages.length) return null;
            return (
              <div
                key={`stack-${offset}`}
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                style={{
                  transform: `translateY(${offset * 8}px) scale(${1 - offset * 0.025})`,
                  zIndex: 10 - offset,
                  opacity: 1 - offset * 0.3,
                }}
              />
            );
          })}

          {/* Main sliding card */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 280, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.35 },
              }}
              className="absolute inset-0 bg-black border border-white/20 rounded-xl overflow-hidden z-20"
            >
              {/* Giant number */}
              <div className="absolute top-0 right-0 h-full flex items-center pr-4 md:pr-12 pointer-events-none overflow-hidden">
                <span className="font-display text-[140px] sm:text-[220px] md:text-[340px] lg:text-[420px] leading-[0.7] text-pink-accent/8 select-none">
                  {current + 1}
                </span>
              </div>

              {/* Content grid */}
              <div className="h-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] relative z-10">
                {/* Left: text */}
                <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 pt-8 lg:pt-0 pb-16 lg:pb-0">
                  <div className="font-body text-xs tracking-[0.3em] text-pink-accent mb-4 uppercase">
                    Етап {current + 1} / {stages.length} — {stage.subtitle}
                  </div>
                  <div className="flex items-center gap-3 mb-5 text-white">
                    <IconComponent size={36} strokeWidth={1.5} className="md:hidden" />
                    <IconComponent size={64} strokeWidth={1.5} className="hidden md:block" />
                    {SecondaryIcon && (
                      <>
                        <SecondaryIcon size={36} strokeWidth={1.5} className="md:hidden" />
                        <SecondaryIcon size={64} strokeWidth={1.5} className="hidden md:block" />
                      </>
                    )}
                  </div>
                  <h3 className="font-display text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] xl:text-[86px] leading-[0.9] text-white uppercase">
                    {stage.title}
                  </h3>
                </div>

                {/* Right: video placeholder */}
                <div className="flex items-center justify-center px-6 sm:px-10 md:px-10 lg:pr-12 lg:pl-0 pb-16 lg:pb-0 pt-0 lg:pt-0">
                  <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
                    {/* TODO: replace with actual video URL */}
                    <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pink-accent transition-colors duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1 group-hover:text-pink-accent transition-colors duration-300">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="font-body text-xs text-white/20 tracking-wider">Відео незабаром</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:border-pink-accent hover:text-pink-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={22} />
            </motion.button>

            <motion.button
              onClick={next}
              disabled={current === stages.length - 1}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed hover:border-pink-accent hover:text-pink-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={22} />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {stages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                style={{ width: i === current ? '32px' : '8px' }}
              >
                <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${i === current ? 'bg-pink-accent' : 'bg-white/25 hover:bg-white/50'}`} />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="font-display text-xl sm:text-2xl text-white/40">
            {String(current + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="text-center mt-4">
          <span className="font-body text-xs text-white/20 tracking-widest">← → для навігації</span>
        </div>
      </div>

      {/* Veteran modifications */}
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
