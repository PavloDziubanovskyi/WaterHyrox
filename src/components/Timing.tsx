import { motion } from 'framer-motion';
import { Timer, Zap } from 'lucide-react';

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
          Точність до сотих секунди. Індивідуальні чіпи. Автоматична фіксація старту, переходів та фінішу.
        </motion.p>

        {/* Three highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <motion.div
            className="border border-white/10 hover:border-pink-accent transition-colors p-6 md:p-8 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Timer className="text-pink-accent mb-4" size={32} strokeWidth={1.5} />
            <div className="font-display text-2xl md:text-3xl text-white mb-2">
              ЧІП НА НОЗІ
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Індивідуальний чіп фіксує кожен ваш крок — від стартового стрибка у воду до удару в гонг
            </p>
          </motion.div>

          <motion.div
            className="border border-white/10 hover:border-pink-accent transition-colors p-6 md:p-8 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-pink-accent mb-4 font-display text-4xl">8</div>
            <div className="font-display text-2xl md:text-3xl text-white mb-2">
              ТОЧОК ФІКСАЦІЇ
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Старт, чотири плавальних відрізки, три станції, фінішна лінія — все автоматично
            </p>
          </motion.div>

          <motion.div
            className="border border-white/10 hover:border-pink-accent transition-colors p-6 md:p-8 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-pink-accent mb-4 font-display text-4xl">0.01</div>
            <div className="font-display text-2xl md:text-3xl text-white mb-2">
              СЕКУНДИ
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Точність хронометражу — як на справжніх професійних змаганнях
            </p>
          </motion.div>
        </div>

        {/* How it works - compact */}
        <motion.div
          className="border-l-2 border-pink-accent pl-6 md:pl-8 py-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase mb-3">
            Як це працює
          </div>
          <p className="font-body text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
            Стрибок у воду — час пішов. Зона перевзування — час іде. Гонг на фініші — час зупинено. Жодних суддів з секундомірами. Тільки чіста математика і ваш результат на табло за мить після фінішу.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
