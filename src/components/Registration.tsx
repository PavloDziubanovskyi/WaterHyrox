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
  {
    number: '01',
    title: 'Заповніть Google форму',
    text: 'Натисніть кнопку «Перейти до реєстрації» нижче та заповніть усі поля форми. Вкажіть коректну електронну пошту — на неї прийде лист.',
  },
  {
    number: '02',
    title: 'Отримайте реквізити на пошту',
    text: 'Після заповнення форми на вашу email-адресу автоматично надійде лист з реквізитами для оплати та призначенням платежу.',
  },
  {
    number: '03',
    title: 'Оплатіть та надішліть квитанцію',
    text: 'Здійсніть оплату банківським переказом за вказаними реквізитами. Після оплати надішліть скріншот квитанції на otterprojectswim@gmail.com.',
  },
  {
    number: '04',
    title: 'Очікуйте підтвердження',
    text: 'Протягом 72 годин після оплати ви отримаєте офіційний лист-підтвердження зі стартовим номером. Реєстрація вважається завершеною після підтвердження.',
  },
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
          Реєстрація до 19 серпня 2026
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {/* Standard — one price for all */}
          <motion.div
            className="border-2 border-black p-6 md:p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-4 right-4 bg-pink-accent px-3 py-1">
              <span className="font-body text-xs text-black font-bold tracking-wider">СТАНДАРТ</span>
            </div>
            <div className="font-display text-4xl md:text-5xl text-black mb-2">Учасники</div>
            <div className="font-display text-3xl md:text-4xl text-pink-accent mb-3">2 000 грн</div>
            <p className="font-body text-sm text-black/50">Єдина ціна до 19 серпня та в день змагань</p>
          </motion.div>

          {/* Veterans */}
          <motion.div
            className="border-2 border-black p-6 md:p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-4 right-4 bg-black px-3 py-1">
              <span className="font-body text-xs text-white font-bold tracking-wider">–50%</span>
            </div>
            <div className="font-display text-4xl md:text-5xl text-black mb-2">Ветерани</div>
            <div className="font-display text-3xl md:text-4xl text-pink-accent mb-3">1 000 грн</div>
            <p className="font-body text-sm text-black/50">Ветерани війни, УБД, особи з інвалідністю (з документом)</p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <motion.a
            href="https://forms.gle/W2NuDEQz9hjeAGZ86"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-pink-accent text-black font-display text-2xl md:text-3xl tracking-wider hover:bg-black hover:text-pink-accent border-2 border-pink-accent transition-all duration-300 glow-pink glow-pink-hover"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ПЕРЕЙТИ ДО РЕЄСТРАЦІЇ
          </motion.a>
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
              <div key={i} className="flex items-start gap-4 border border-black/10 p-4 md:p-5">
                <div className="font-display text-3xl md:text-4xl text-pink-accent leading-none flex-shrink-0 w-10 md:w-12">
                  {step.number}
                </div>
                <div>
                  <div className="font-display text-lg md:text-xl text-black mb-1">{step.title}</div>
                  <p className="font-body text-sm md:text-base text-black/60 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
