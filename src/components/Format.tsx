import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Waves, Flame, Dumbbell, Footprints, Flag, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Cloudinary poster URL generator (extract first-frame JPEG)
const posterFromVideo = (videoUrl: string) => {
  // Insert 'so_0.5' (offset 0.5s) + convert extension to jpg
  return videoUrl
    .replace('/video/upload/', '/video/upload/so_0.5/')
    .replace(/\.mp4($|\?)/, '.jpg$1');
};

// Poster + click-to-play video player
function ReelPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    // Play on next tick after src is set
    setTimeout(() => {
      videoRef.current?.play().catch(() => { /* user will click play */ });
    }, 50);
  };

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      {!started ? (
        <button
          onClick={start}
          className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
          style={{
            backgroundImage: `url(${posterFromVideo(src)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label="Відтворити відео"
        >
          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center group-hover:bg-pink-accent group-hover:border-pink-accent transition-all duration-300 group-hover:scale-110">
            <Play size={26} className="text-white ml-1" fill="white" />
          </div>
        </button>
      ) : (
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          preload="metadata"
          poster={posterFromVideo(src)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

const GongIcon = ({ size = 64, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <line x1="12" y1="5" x2="12" y2="1" />
    <line x1="4" y1="13" x2="8" y2="13" />
  </svg>
);

// Cloudinary videos — smart crop to 9:16 (Reels aspect) + auto format/quality
const CLD = 'https://res.cloudinary.com/dsuei2gxq/video/upload/c_fill,ar_9:16,g_auto,f_auto,q_auto';
const VIDEO_SWIM   = `${CLD}/v1786433978/copy_569154C4-8DDA-482B-8478-6A0AB1BCB612_v1rhb1.mp4`;
const VIDEO_BURPEE = `${CLD}/v1786434687/copy_6F7F63F6-7813-4781-AFCB-3F8D98DAFD66_yn1pje.mp4`;
const VIDEO_FARMER = `${CLD}/v1786435197/copy_6A21AAC5-EF5A-4360-9E78-00C25C65613F_zy6tin.mp4`;
const VIDEO_BEAR   = `${CLD}/v1786435386/copy_C4E87728-C7F3-48FF-AFF0-560856936336_bdfrvi.mp4`;
const VIDEO_RUN    = `${CLD}/v1786435789/copy_12149467-65BD-4E53-974F-F528F1F85753_afzl9u.mp4`;

const stages = [
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Перший відрізок', video: VIDEO_SWIM },
  { icon: Flame, title: 'БЕРПІ-СТРИБКИ 40М', subtitle: 'Станція 1*', video: VIDEO_BURPEE },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Другий відрізок', video: VIDEO_SWIM },
  { icon: Dumbbell, title: 'FARMER CARRY 40М', subtitle: 'Станція 2**', video: VIDEO_FARMER },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Третій відрізок', video: VIDEO_SWIM },
  { icon: Footprints, title: 'BEAR CRAWL', subtitle: 'Станція 3', video: VIDEO_BEAR },
  { icon: Waves, title: '100 М ПЛАВАННЯ', subtitle: 'Четвертий відрізок', video: VIDEO_SWIM },
  { icon: Flag, title: 'ФІНІШ — БІГ 200М + ГОНГ', subtitle: 'Фінальний ривок', secondaryIcon: GongIcon, video: VIDEO_RUN },
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
        <div
          className="relative overflow-hidden rounded-xl"
          style={{ height: 'min(85vh, 720px)', minHeight: '560px' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

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
                <div className="flex flex-col justify-start lg:justify-center px-6 sm:px-10 md:px-14 pt-8 lg:pt-0 pb-4 lg:pb-0">
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

                {/* Right: vertical Reels-style video */}
                <div className="flex items-start lg:items-center justify-center px-6 sm:px-10 md:px-10 lg:pr-12 lg:pl-0 pt-0 pb-8 lg:pb-0">
                  <div
                    className="bg-white/5 border border-white/10 rounded-lg overflow-hidden relative w-full"
                    style={{
                      maxWidth: 'min(260px, 60vw)',
                      aspectRatio: '9 / 16',
                    }}
                  >
                    {stage.video ? (
                      <ReelPlayer key={`${current}-${stage.video}`} src={stage.video} />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 group">
                        <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pink-accent transition-colors duration-300">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1 group-hover:text-pink-accent transition-colors duration-300">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="font-body text-xs text-white/20 tracking-wider">Відео незабаром</span>
                      </div>
                    )}
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

      {/* Veteran modifications — prominent block */}
      <div className="px-6 md:px-10 py-12 md:py-16 max-w-7xl mx-auto">
        <motion.div
          className="bg-white/5 border border-pink-accent/40 p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-pink-accent flex items-center justify-center flex-shrink-0">
              <span className="text-black font-display text-lg">★</span>
            </div>
            <h3 className="font-display text-2xl md:text-4xl text-white">
              МОДИФІКАЦІЇ ДЛЯ ВЕТЕРАНІВ
            </h3>
          </div>
          <p className="font-body text-sm md:text-base text-white/60 mb-6 leading-relaxed">
            Учасники категорії «Ветерани» (ветерани війни, УБД, особи з інвалідністю) мають право на спрощені варіанти окремих станцій:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-pink-accent/30 p-5">
              <div className="font-display text-lg md:text-xl text-pink-accent mb-2">
                СТАНЦІЯ 1 — БЕРПІ-СТРИБКИ
              </div>
              <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                Дозволена модифікація: <strong className="text-white">відтискання + крокування</strong> замість повного берпі зі стрибком
              </p>
            </div>
            <div className="border border-pink-accent/30 p-5">
              <div className="font-display text-lg md:text-xl text-pink-accent mb-2">
                СТАНЦІЯ 2 — FARMER CARRY
              </div>
              <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                Передбачена <strong className="text-white">можливість вибору ваги гантелей</strong> за погодженням з організаторами
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
