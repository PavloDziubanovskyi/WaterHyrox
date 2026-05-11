import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const scheduleItems = [
  { time: '08:00', event: 'Реєстрація + розминка' },
  { time: '08:45', event: 'Відкриття змагань' },
  { time: '09:00', event: 'Старт першої хвилі (10 учасників)' },
  { time: '', event: 'Кожна наступна хвиля стартує після фінішу попередньої', isSubItem: true },
  { time: '', event: 'Після всіх хвиль — Нагородження', isFinal: true },
];

export default function Schedule() {
  return (
    <SectionWrapper id="schedule" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading className="text-white mb-12 md:mb-16">
          РОЗКЛАД
        </SectionHeading>

        <div className="relative">
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-pink-accent/20" />

          <div className="space-y-0">
            {scheduleItems.map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-start gap-6 md:gap-10 relative ${item.isSubItem ? 'pl-[84px] md:pl-[104px]' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                {!item.isSubItem && (
                  <>
                    <div className="font-display text-2xl md:text-4xl text-white/80 w-[56px] md:w-[72px] text-right flex-shrink-0 pt-1">
                      {item.time}
                    </div>
                    <div className="relative flex-shrink-0 mt-3">
                      <div className="w-3 h-3 rounded-full bg-pink-accent" />
                    </div>
                  </>
                )}

                <div className={`${item.isSubItem ? '' : 'pt-1'}`}>
                  <p className={`font-body ${item.isFinal ? 'text-pink-accent font-semibold text-lg md:text-xl' : item.isSubItem ? 'text-white/40 text-sm italic' : 'text-white text-base md:text-lg'}`}>
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 border border-white/10 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-body text-sm text-white/50">
            Смуга для розминки доступна протягом усього дня
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
