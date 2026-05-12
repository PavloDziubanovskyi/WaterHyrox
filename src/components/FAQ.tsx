import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const faqItems = [
  {
    question: 'Який рівень підготовки потрібен?',
    answer: 'Достатньо базової фізичної підготовки. Якщо ви можете проплисти 100 метрів без зупинки та виконати базові функціональні вправи — ви готові. Формат розрахований на широкий спектр учасників, від новачків до досвідчених спортсменів.',
  },
  {
    question: 'Чи можна брати участь без спортивного досвіду?',
    answer: 'Так! WATER HYROX створений для всіх. Вам не потрібен спортивний розряд чи досвід змагань. Головне — бажання та мінімальна фізична підготовка.',
  },
  {
    question: 'Чи потрібне власне взуття?',
    answer: 'Так, вам знадобиться спортивне взуття для бігових та функціональних станцій. Взуття має бути зручним та стабільним. Рекомендуємо кросівки з хорошим зчепленням.',
  },
  {
    question: 'Що робити якщо не вмію плавати на 100м без зупинки?',
    answer: 'Не хвилюйтеся — на дистанції є можливість робити зупинки біля бортика. Ви можете відпочити та продовжити. Головне — завершити дистанцію, а не встановити рекорд.',
  },
  {
    question: 'Чи можна повернути кошти?',
    answer: 'Повернення коштів можливе до 10 серпня 2026 року. Після цієї дати повернення не здійснюється, але ви можете передати своє місце іншому учаснику, повідомивши організаторів.',
  },
  {
    question: 'Що видається на місці?',
    answer: 'На місці ви отримаєте стартовий пакет: шопер, пляшку, шкарпетки, а після фінішу — медаль та подарунки від спонсорів. Також вам буде видано стартовий номер.',
  },
  {
    question: 'Чи є роздягальні та душові?',
    answer: 'Так, комплекс «Ловивітер» має повну інфраструктуру: роздягальні, душові, зони для розминки та відпочинку.',
  },
  {
    question: 'Чи можна прийти з вболівальниками?',
    answer: 'Звісно! Вболівальники вітаються. Для них буде організована зона спостереження. Вхід вільний.',
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="border-b border-black/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-hover"
      >
        <span className="font-body text-base md:text-lg text-black/80 pr-8 group-hover:text-black transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <Plus size={24} className="text-pink-accent" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm md:text-base text-black/50 pb-6 leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-white text-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading className="text-black mb-12 md:mb-16">
          FAQ
        </SectionHeading>

        <div>
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
