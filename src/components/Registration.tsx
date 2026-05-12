import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const starterPackItems = [
  'Брендований шопер змагань',
  'Брендована пляшка змагань',
  'Брендовані шкарпетки',
  'Медаль за участь (видається після фінішу)',
  'Подарунки від спонсорів',
];

const steps = [
  { number: '01', text: 'Заповніть форму на сайті' },
  { number: '02', text: 'Отримайте посилання на оплату на пошту' },
  { number: '03', text: 'Після оплати — лист зі стартовим номером' },
];

export default function Registration() {
  return (
    <SectionWrapper id="registration" className="bg-white text-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading className="text-black mb-4">
          ВАРТІСТЬ УЧАСТІ
        </SectionHeading>

        <motion.p
          className="font-display text-2xl md:text-4xl text-pink-accent mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Реєстрація до 16 серпня 2026
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          <motion.div
            className="border-2 border-black p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-display text-5xl md:text-6xl text-black mb-2">Стандарт</div>
            <div className="font-display text-4xl md:text-5xl text-pink-accent">2 000 грн</div>
          </motion.div>

          <motion.div
            className="border-2 border-black p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="font-display text-5xl md:text-6xl text-black mb-2">Ветерани</div>
            <div className="font-display text-4xl md:text-5xl text-pink-accent">1 000 грн</div>
          </motion.div>
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-black mb-6">
            Що входить у стартовий пакет:
          </h3>
          <div className="space-y-3">
            {starterPackItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-accent flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <span className="font-body text-base md:text-lg text-black/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-black mb-6">
            Як зареєструватись:
          </h3>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="font-display text-4xl md:text-5xl text-black/10 leading-none">
                  {step.number}
                </div>
                <p className="font-body text-base md:text-lg text-black/70 pt-3">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="https://forms.gle/W2NuDEQz9hjeAGZ86"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-pink-accent text-black font-display text-2xl md:text-3xl tracking-wider hover:bg-black hover:text-pink-accent border-2 border-pink-accent transition-all duration-300 glow-pink glow-pink-hover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ПЕРЕЙТИ ДО РЕЄСТРАЦІЇ
        </motion.a>
      </div>
    </SectionWrapper>
  );
}
