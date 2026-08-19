import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { ChevronDown } from 'lucide-react';

const eventDate = new Date('2026-08-22T09:00:00+03:00');

export default function Hero() {
  const eventCountdown = useCountdown(eventDate);

  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">

      {/* Dark background — no video */}
      <div className="absolute inset-0 bg-black" style={{ zIndex: 0 }} />

      {/* Pink glow */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ zIndex: 1 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #FF2D9B 0%, transparent 70%)`,
        }} />
      </div>

      <motion.div
        className="relative z-20 text-center w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="mb-4 md:mb-6 w-full flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 60, delay: 0.3 }}
        >
          <img
            src="/water-hyrox-for-dark-bg.svg"
            alt="WATER HYROX"
            className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[700px] lg:max-w-[900px] h-auto"
          />
        </motion.div>

        <motion.p
          className="font-body text-[10px] sm:text-sm md:text-base text-white/70 tracking-[0.2em] sm:tracking-[0.3em] mb-6 md:mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          ФУНКЦІОНАЛЬНИЙ ПЛАВАЛЬНИЙ ЧЕМПІОНАТ
        </motion.p>

        <motion.a
          href="#registration"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 sm:px-10 py-3 sm:py-4 mb-10 md:mb-14 border-2 border-pink-accent text-white font-display text-lg sm:text-2xl md:text-3xl tracking-wider bg-black hover:bg-pink-accent hover:text-black transition-all duration-300 glow-pink glow-pink-hover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ЗАРЕЄСТРУВАТИСЬ
        </motion.a>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="font-display text-xl sm:text-2xl md:text-4xl text-white">22 СЕРПНЯ 2026</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-pink-accent" />
          <span className="font-body text-xs sm:text-sm md:text-base text-white/50 text-center px-4">с. Зашляхом, Тернопільська обл.</span>
        </motion.div>

        {/* BIG event countdown */}
        <motion.div
          className="flex flex-col items-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 md:w-16 h-px bg-pink-accent" />
            <p className="font-display text-xs sm:text-sm md:text-lg text-pink-accent tracking-[0.35em] whitespace-nowrap">
              ДО ПОЧАТКУ ЗМАГАНЬ
            </p>
            <div className="w-8 md:w-16 h-px bg-pink-accent" />
          </div>

          <div className="flex gap-3 sm:gap-5 md:gap-8 justify-center">
            {[
              { val: eventCountdown.days, unit: 'ДНІВ' },
              { val: eventCountdown.hours, unit: 'ГОДИН' },
              { val: eventCountdown.minutes, unit: 'ХВИЛИН' },
              { val: eventCountdown.seconds, unit: 'СЕКУНД' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <div className="relative border-2 border-white/10 bg-white/[0.02] backdrop-blur-sm px-3 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 min-w-[68px] sm:min-w-[92px] md:min-w-[120px]">
                  <span className="block font-display text-[44px] sm:text-[68px] md:text-[92px] leading-none text-white text-center">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  {/* corner accents */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-pink-accent" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-accent" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-accent" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-accent" />
                </div>
                <span className="text-[9px] sm:text-[11px] md:text-xs text-white/50 tracking-[0.25em] font-body mt-2 md:mt-3">
                  {item.unit}
                </span>
              </div>
            ))}
          </div>

          {/* Registration info + registered counter */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-6">
            <div className="text-center">
              <p className="font-body text-[10px] sm:text-xs text-white/40 tracking-[0.2em] mb-1">
                РЕЄСТРАЦІЯ ЗАКРИВАЄТЬСЯ
              </p>
              <p className="font-display text-lg sm:text-xl md:text-2xl text-white/85 tracking-wider">
                19 СЕРПНЯ 2026
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/15" />
            <div className="text-center">
              <p className="font-body text-[10px] sm:text-xs text-white/40 tracking-[0.2em] mb-1">
                ЗАРЕЄСТРОВАНО
              </p>
              <p className="font-display text-lg sm:text-xl md:text-2xl text-pink-accent tracking-wider">
                42<span className="text-white/30">/110</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/30 text-xs tracking-[0.3em] font-body">SCROLL</span>
        <ChevronDown className="text-pink-accent" size={20} />
      </motion.div>
    </section>
  );
}
