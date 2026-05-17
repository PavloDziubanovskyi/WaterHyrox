import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const scheduleItems = [
  { time: '08:00', event: 'Відкриття реєстрації учасників. Розминка у басейні дозволена з 08:00 на виділеній доріжці' },
  { time: '08:55', event: 'Офіційне відкриття змагань, брифінг учасників' },
  { time: '09:15', event: 'Старт змагань — перший заплив (10 учасників)' },
  { time: '', event: 'Послідовно кожні 10 учасників стартують після того, як попередній заплив завершить дистанцію', isSubItem: true },
  { time: '', event: 'Після всіх запливів — Нагородження учасників', isFinal: true },
];

export default function Schedule() {
  return (
    <SectionWrapper id="schedule" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading className="text-white mb-12 md:mb-16">
          РОЗКЛАД
        </SectionHeading>

        <div className="space-y-6 md:space-y-8">
          {scheduleItems.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center gap-2 ${item.isSubItem ? 'opacity-60' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: item.isSubItem ? 0.6 : 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {item.time && (
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-pink-accent">
                  {item.time}
                </div>
              )}
              <p className={`font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${
                item.isFinal
                  ? 'text-pink-accent font-semibold text-xl md:text-2xl'
                  : item.isSubItem
                  ? 'text-white/60 text-sm sm:text-base italic'
                  : 'text-white'
              }`}>
                {item.event}
              </p>
              {!item.isSubItem && !item.isFinal && i < scheduleItems.length - 2 && (
                <div className="w-px h-8 md:h-10 bg-pink-accent/30 mt-2" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 border border-white/10 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-body text-sm text-white/50 text-center">
            Смуга для розминки доступна протягом усього дня
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
