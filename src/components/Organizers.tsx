import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

export default function Organizers() {
  return (
    <SectionWrapper id="organizers" className="bg-white text-black py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading className="text-black mb-12 md:mb-16">
          ОРГАНІЗАТОРИ
        </SectionHeading>

        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/otter-project-logo.jpg"
            alt="OTTER PROJECT"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain mb-6"
          />
          <h3 className="font-display text-4xl md:text-6xl text-black mb-4">
            ГО OTTER PROJECT
          </h3>
        </motion.div>

        <motion.p
          className="font-body text-lg md:text-xl text-black/60 leading-relaxed mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Громадська організація OTTER PROJECT — команда ентузіастів, які вірять у силу спорту та спільноти.
          Ми створюємо події, що надихають, об'єднують та змінюють.
        </motion.p>

        <motion.div
          className="bg-black text-white p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-display text-2xl md:text-3xl text-pink-accent mb-4">НАША МІСІЯ</p>
          <p className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            Популяризувати функціональний спорт у воді, створювати інклюзивний простір для всіх
            та показувати, що кожен може стати частиною чогось великого.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
