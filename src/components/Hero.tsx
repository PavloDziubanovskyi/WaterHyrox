import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { ChevronDown } from 'lucide-react';

const eventDate = new Date('2026-08-22T09:00:00+03:00');
const regDeadline = new Date('2026-08-16T23:59:00+03:00');

function CounterBlock({ label, timeLeft }: { label: string; timeLeft: { days: number; hours: number; minutes: number; seconds: number } }) {
  return (
    <div className="text-center">
      <div className="flex gap-2 md:gap-3 justify-center mb-2">
        {[
          { val: timeLeft.days, unit: 'ДН' },
          { val: timeLeft.hours, unit: 'ГОД' },
          { val: timeLeft.minutes, unit: 'ХВ' },
          { val: timeLeft.seconds, unit: 'СЕК' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-display text-[32px] md:text-[56px] leading-none text-pink-accent">
              {String(item.val).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs text-white/50 tracking-widest font-body">
              {item.unit}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs md:text-sm text-white/60 font-body tracking-wider">{label}</p>
    </div>
  );
}

export default function Hero() {
  const eventCountdown = useCountdown(eventDate);
  const regCountdown = useCountdown(regDeadline);

  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">

      {/* Cloudinary video background — works on all devices */}
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="https://res.cloudinary.com/dsuei2gxq/video/upload/v1779883730/vecteezy_asian-men-practicing-swimming-and-preparing-to-play-water_46013651_dpmbk5.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />

      {/* Pink glow */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ zIndex: 2 }}>
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

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="font-display text-xl sm:text-2xl md:text-4xl text-white">8 СЕРПНЯ 2026</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-pink-accent" />
          <span className="font-body text-xs sm:text-sm md:text-base text-white/50 text-center px-4">с. Зашляхом, Тернопільська обл.</span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <CounterBlock label="ДО ПОЧАТКУ ЗМАГАНЬ" timeLeft={eventCountdown} />
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <CounterBlock label="ДО КІНЦЯ РЕЄСТРАЦІЇ" timeLeft={regCountdown} />
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="font-display text-[32px] md:text-[56px] leading-none text-pink-accent mb-1">
              0<span className="text-white/30">/110</span>
            </div>
            <p className="text-xs md:text-sm text-white/60 font-body tracking-wider">ЗАРЕЄСТРОВАНО</p>
          </div>
        </motion.div>

        <motion.a
          href="#registration"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 sm:px-10 py-3 sm:py-4 border-2 border-pink-accent text-white font-display text-lg sm:text-2xl md:text-3xl tracking-wider bg-black hover:bg-pink-accent hover:text-black transition-all duration-300 glow-pink glow-pink-hover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ЗАРЕЄСТРУВАТИСЬ
        </motion.a>
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
