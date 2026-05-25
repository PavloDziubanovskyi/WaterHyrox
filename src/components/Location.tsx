import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

export default function Location() {
  return (
    <SectionWrapper id="location" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="text-white mb-12 md:mb-16">
          ЛОКАЦІЯ
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Генеральний партнер */}
            <div className="inline-flex items-center gap-2 border border-pink-accent/40 px-4 py-2 mb-6 w-fit">
              <span className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase">
                Генеральний партнер змагань
              </span>
            </div>

            {/* Fungi Farm logo */}
            <div className="mb-6">
              <img
                src="/fungi-farm-logo.png"
                alt="Fungi Farm"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-pink-accent flex-shrink-0" size={22} />
              <span className="font-display text-xl md:text-2xl text-white">Розважальний комплекс</span>
            </div>
            <h3 className="font-display text-4xl md:text-6xl text-pink-accent mb-4">
              «Ловивітер»
            </h3>
            <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
              с. Зашляхом, вул. Підлісна 2, Тернопільська обл., Кременецький р-н
            </p>
          </motion.div>

          <motion.div
            className="w-full aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570!2d25.6!3d49.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ4JzAwLjAiTiAyNcKwMzYnMDAuMCJF!5e0!3m2!1suk!2sua!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локація змагань"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
