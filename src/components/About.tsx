import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountdown';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

function StatBlock({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { count, start } = useCountUp(value, 2000);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className="bg-black p-8 md:p-12 text-center relative overflow-hidden group"
      onViewportEnter={start}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', damping: 15 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-pink-accent" />
      <div className="font-display text-[72px] md:text-[120px] leading-none text-white mb-2">
        {count}{suffix}
      </div>
      <p className="font-body text-sm md:text-base text-white/60 tracking-wider uppercase">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white text-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="text-black mb-8 md:mb-12">
          ЦЕ НЕ ПРОСТО<br />ПЛАВАННЯ
        </SectionHeading>

        <motion.p
          className="font-body text-lg md:text-xl text-black/70 max-w-3xl mb-16 md:mb-20 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          WATER HYROX — це унікальний формат, де 400 метрів плавання поєднуються з функціональними станціями та фінальним бігом до гонга. Натхненний міжнародним HYROX, адаптований для воду.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <StatBlock value={400} label="Плавання" suffix="М" />
          <StatBlock value={3} label="Функціональні станції" />
          <StatBlock value={200} label="Фінальний біг до гонга" suffix="М" />
        </div>
      </div>
    </SectionWrapper>
  );
}
