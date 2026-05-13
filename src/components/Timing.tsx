import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Timing() {
  return (
    <section id="timing" className="relative bg-black overflow-hidden py-20 md:py-28 px-4 sm:px-6 md:px-10">
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #FF2D9B 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Premium tag */}
        <motion.div
          className="inline-flex items-center gap-2 border border-pink-accent/40 px-4 py-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Zap size={14} className="text-pink-accent" />
          <span className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase">
            Преміум рівень змагань
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          className="font-display text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] leading-[0.9] text-white mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20 }}
        >
          ЕЛЕКТРОННИЙ<br />
          <span className="text-pink-accent">ХРОНОМЕТРАЖ</span>
        </motion.h2>

        <motion.p
          className="font-body text-base md:text-xl text-white/60 max-w-2xl mb-12 md:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Професійна точність хронометражу.
        </motion.p>

        {/* Single highlight card - precision */}
        <motion.div
          className="border border-white/10 hover:border-pink-accent transition-colors p-8 md:p-12 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-pink-accent mb-4 font-display text-5xl md:text-7xl">0.01</div>
          <div className="font-display text-2xl md:text-3xl text-white mb-3">
            СЕКУНДИ
          </div>
          <p className="font-body text-sm md:text-base text-white/50 leading-relaxed">
            Професійна точність хронометражу
          </p>
        </motion.div>
      </div>
    </section>
  );
}
