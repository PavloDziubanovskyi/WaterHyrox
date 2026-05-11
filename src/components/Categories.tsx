import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const ageCategories = [
  { name: 'ЮНАЦТВО', range: '12–15 років', number: 1 },
  { name: 'МОЛОДЬ', range: '16–25 років', number: 2 },
  { name: 'ДОРОСЛІ', range: '26–35 років', number: 3 },
  { name: 'ДОРОСЛІ', range: '36–45 років', number: 4 },
  { name: 'ДОРОСЛІ', range: '46–55 років', number: 5 },
  { name: 'ДОРОСЛІ', range: '56+ років', number: 6 },
];

export default function Categories() {
  return (
    <SectionWrapper id="categories" className="bg-white text-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="text-black mb-12 md:mb-16">
          КАТЕГОРІЇ
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {ageCategories.map((cat, i) => (
            <motion.div
              key={cat.number}
              className="bg-white border-2 border-black p-6 md:p-8 text-center group cursor-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 40px rgba(255, 45, 155, 0.25)',
                borderColor: '#FF2D9B',
              }}
            >
              <div className="font-display text-[56px] md:text-[72px] leading-none text-black/10 mb-2">
                {cat.number}
              </div>
              <div className="font-display text-2xl md:text-3xl text-pink-accent mb-2 tracking-wider">
                {cat.name}
              </div>
              <div className="font-display text-xl md:text-2xl text-black mb-2">
                {cat.range}
              </div>
              <div className="font-body text-xs text-black/50 tracking-wider">
                Чоловіки + Жінки
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-black border-2 border-pink-accent p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-display text-4xl md:text-6xl text-pink-accent mb-4">ВЕТЕРАНИ</h3>
          <p className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
            Ветерани війни, УБД, особи з інвалідністю — окремий залік, незалежно від віку
          </p>
        </motion.div>

        <motion.div
          className="bg-white border-2 border-black p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-display text-xl md:text-3xl text-black text-center leading-snug">
            АБСОЛЮТНИЙ ЧЕМПІОН ВИЗНАЧАЄТЬСЯ СЕРЕД УСІХ КАТЕГОРІЙ — ОДИН ЧОЛОВІК + ОДНА ЖІНКА
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
