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
  {
    icon: Waves,
    title: '100 М ПЛАВАННЯ',
    description: 'Перший відрізок плавання в басейні. Рівномірний темп, концентрація на техніці.',
  },
  {
    icon: Flame,
    title: 'БЕРПІ-СТРИБКИ 40М',
    description: 'Функціональна станція: берпі з випливанням вперед на 40 метрів. Вибухова сила та витривалість.',
  },
  {
    icon: Waves,
    title: '100 М ПЛАВАННЯ',
    description: 'Другий відрізок після першої станції. Контроль дихання та темпу.',
  },
  {
    icon: Dumbbell,
    title: 'FARMER CARRY 40М',
    description: 'Перенесення ваги на 40 метрів. Сильний хват, стійка постава, сила корпусу.',
  },
  {
    icon: Waves,
    title: '100 М ПЛАВАННЯ',
    description: 'Третій відрізок плавання. Напіввідстань пройдено — час прискорюватись.',
  },
  {
    icon: Footprints,
    title: 'BEAR CRAWL',
    description: 'Пересування на чотирьох кінцівках. Координація, сила плечового поясу та кора.',
  },
  {
    icon: Waves,
    title: '100 М ПЛАВАННЯ',
    description: 'Останній відрізок плавання. Залиште все в басейні перед фінальним ривком.',
  },
  {
    icon: Flag,
    title: 'ФІНІШ — БІГ 200М + ГОНГ',
    description: 'Фінальний спринт 200 метрів до гонга. Все або нічого.',
    secondaryIcon: GongIcon,
  },
];

function TimelineConnector({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const viewBoxW = 60;
  const viewBoxH = stages.length * 100;
  const midX = 30;

  let d = `M ${midX} 0`;
  for (let i = 0; i < stages.length; i++) {
    const y = i * 100;
    const targetX = i % 2 === 0 ? 50 : 10;
    d += ` C ${midX} ${y + 25}, ${targetX} ${y + 50}, ${targetX} ${y + 50}`;
    if (i < stages.length - 1) {
      const nextY = (i + 1) * 100;
      d += ` C ${targetX} ${y + 75}, ${midX} ${nextY - 25}, ${midX} ${nextY}`;
    }
  }

  return (
    <svg
      className="absolute left-0 top-0 w-[60px] h-full hidden lg:block"
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="#FF2D9B"
        strokeWidth={3}
        strokeLinecap="round"
        style={{ pathLength }}
      />
    </svg>
  );
}

function StageBlock({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const isLeft = index % 2 === 0;
  const IconComponent = stage.icon;
  const SecondaryIcon = 'secondaryIcon' in stage ? stage.secondaryIcon : null;

  const slideFrom = isLeft ? -80 : 80;

  return (
    <div className="relative min-h-[60vh] flex items-center py-16 md:py-24">
      {/* Pink number — always on the outer edge */}
      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-0' : 'right-0'}`}>
        <motion.span
          className="font-display text-[200px] leading-none text-pink-accent/10 select-none block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {index + 1}
        </motion.span>
      </div>

      {/* Content area */}
      <motion.div
        className={`w-full lg:w-[55%] ${isLeft ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'}`}
        initial={{ opacity: 0, x: slideFrom }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Mobile number */}
        <div className="lg:hidden mb-4">
          <span className="font-display text-[120px] leading-none text-pink-accent/10 select-none">
            {index + 1}
          </span>
        </div>

        {/* Stage label */}
        <div className="font-body text-xs tracking-[0.3em] text-pink-accent mb-4 uppercase">
          Етап {index + 1} / 8
        </div>

        {/* Icon */}
        <div className="flex items-center gap-3 mb-4 text-white">
          <IconComponent size={80} strokeWidth={1.5} />
          {SecondaryIcon && <SecondaryIcon size={80} strokeWidth={1.5} />}
        </div>

        {/* Title */}
        <h3 className="font-display text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[0.9] text-white mb-4 uppercase">
          {stage.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm md:text-base text-white/50 max-w-lg leading-relaxed">
          {stage.description}
        </p>
      </motion.div>

      {/* Video on opposite side (desktop) / below content (mobile) */}
      <motion.div
        className={`w-full lg:w-[35%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${isLeft ? 'lg:left-0' : 'lg:right-0'} mt-8 lg:mt-0`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="w-full aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="font-body text-sm text-white/20 tracking-wider">ВІДЕО НЕЗАБАРОМ</span>
          {/* TODO: replace with actual video URL */}
        </div>
      </motion.div>
    </div>
  );
}

export default function Format() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="format" className="bg-black relative" ref={containerRef}>
      {/* Section header */}
      <div className="px-6 md:px-10 pt-24 md:pt-32 pb-8 md:pb-12 max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-[80px] md:text-[120px] lg:text-[140px] leading-none text-white mb-4"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20, stiffness: 80 }}
        >
          ЯК ЦЕ<br />ВІДБУВАЄТЬСЯ
        </motion.h2>
        <motion.p
          className="font-body text-sm md:text-base tracking-[0.2em] text-pink-accent uppercase"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          8 етапів. Безперервний хронометраж.
        </motion.p>
      </div>

      {/* Zigzag timeline */}
      <div className="relative px-6 md:px-10 max-w-7xl mx-auto">
        {/* Scroll-drawn connector line */}
        <TimelineConnector containerRef={containerRef} />

        {/* Stage blocks */}
        {stages.map((stage, i) => (
          <StageBlock key={i} stage={stage} index={i} />
        ))}
      </div>

      {/* Full video block */}
      <div className="px-6 md:px-10 py-16 md:py-24 max-w-7xl mx-auto">
        <motion.div
          className="bg-white/5 border border-white/10 p-8 md:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-[48px] md:text-[72px] lg:text-[96px] leading-none text-white mb-4">
            ПОВНЕ ВІДЕО ПРОХОДЖЕННЯ ДИСТАНЦІЇ
          </h3>
          <p className="font-body text-sm md:text-base text-white/50 mb-8 max-w-xl">
            Дивіться повне проходження всіх етапів дистанції WATER HYROX
          </p>
          {/* TODO: replace with actual video URL */}
          <div className="w-full aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="font-body text-base md:text-lg text-white/20 tracking-wider">Відео з'явиться найближчим часом</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
