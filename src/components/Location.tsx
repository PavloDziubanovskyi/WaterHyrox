import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

export default function Location() {
  return (
    <>
      {/* ══════════════════════════════════
          ГЕНЕРАЛЬНИЙ ПАРТНЕР
      ══════════════════════════════════ */}
      <SectionWrapper id="location" className="bg-black py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <SectionHeading className="text-white mb-12 md:mb-16">
            ГЕНЕРАЛЬНИЙ ПАРТНЕР
          </SectionHeading>

          {/* РЯД 1: Лого зліва великe — назва+адреса справа */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Лого */}
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/lovyviter-logo.png"
                alt="Ловивітер"
                className="w-full max-w-xs md:max-w-sm object-contain"
              />
            </div>

            {/* Назва + адреса */}
            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-2 leading-tight">
                Розважальний комплекс
              </h3>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-pink-accent mb-8 leading-tight">
                «Ловивітер»
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-accent flex-shrink-0 mt-1" size={20} />
                <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                  с. Зашляхом, вул. Підлісна 2<br />
                  Кременецький р-н, Тернопільська обл.
                </p>
              </div>
            </div>
          </motion.div>

          {/* РЯД 2: Відео зліва — карта+кнопка справа */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Відео "Як доїхати" */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="text-pink-accent" size={16} />
                <span className="font-body text-xs text-pink-accent tracking-[0.25em] uppercase">
                  Як доїхати
                </span>
              </div>
              {/* TODO: замінити на реальне відео — вставити YouTube/Vimeo src */}
              <div className="w-full aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 group">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pink-accent transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1 group-hover:text-pink-accent transition-colors duration-300">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-body text-xs text-white/20 tracking-wider">
                  Відео незабаром
                </span>
              </div>
            </div>

            {/* Карта + кнопка маршруту */}
            <div className="flex flex-col gap-4">
              <div className="w-full border border-white/10 overflow-hidden" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.9180709636946!2d25.743862619689715!3d49.8121093183993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472fd790c56e267f%3A0x1f3a317fd0dfac!2z0JvQntCS0JjQktCG0KLQldCg!5e1!3m2!1suk!2sua!4v1779738116247!5m2!1suk!2sua"
                  style={{ border: 0, display: 'block', width: '100%', height: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Локація змагань"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/ЛОВИВІТЕР/@49.8121093,25.7438626,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-white/20 hover:border-pink-accent text-white hover:text-pink-accent font-display text-lg tracking-wider transition-colors duration-300"
              >
                <Navigation size={20} />
                ПРОКЛАСТИ МАРШРУТ
              </a>
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════
          СПОНСОРИ
      ══════════════════════════════════ */}
      <SectionWrapper id="sponsors" className="bg-black py-16 md:py-20 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <SectionHeading className="text-white mb-12 md:mb-16 text-center">
            СПОНСОРИ
          </SectionHeading>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

            <motion.div
              className="aspect-[3/2] border border-pink-accent/30 flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.0 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="/sponsor-continental.png" alt="Континентал Фармерз Груп" className="max-w-full max-h-full object-contain" />
            </motion.div>

            <motion.div
              className="aspect-[3/2] border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="/fungi-farm-logo.png" alt="Fungi Farm" className="max-w-full max-h-full object-contain" />
            </motion.div>

            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="aspect-[3/2] bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-accent/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="font-display text-2xl text-white/15">LOGO</span>
              </motion.div>
            ))}
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
