import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

export default function Location() {
  return (
    <SectionWrapper id="location" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── ГЕНЕРАЛЬНИЙ ПАРТНЕР ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 border border-pink-accent/40 px-4 py-2 mb-10">
            <span className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase">
              Генеральний партнер змагань
            </span>
          </div>

          {/* Два блоки: лого + інфо / карта */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Ліво: лого + адреса */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Лого Ловивітер */}
              <img
                src="/lovyviter-logo.png"
                alt="Ловивітер"
                className="h-28 md:h-36 w-auto object-contain mb-8 self-start"
              />

              {/* Назва */}
              <h3 className="font-display text-3xl md:text-5xl text-white mb-2">
                Розважальний комплекс
              </h3>
              <h3 className="font-display text-3xl md:text-5xl text-pink-accent mb-6">
                «Ловивітер»
              </h3>

              {/* Адреса */}
              <div className="flex items-start gap-3 mb-8">
                <MapPin className="text-pink-accent flex-shrink-0 mt-1" size={20} />
                <p className="font-body text-base md:text-lg text-white/60 leading-relaxed">
                  с. Зашляхом, вул. Підлісна 2<br />
                  Кременецький р-н, Тернопільська обл.
                </p>
              </div>

              {/* Відео як доїхати */}
              <div className="w-full">
                <div className="flex items-center gap-2 mb-3">
                  <Navigation className="text-pink-accent" size={16} />
                  <span className="font-body text-xs text-pink-accent tracking-[0.25em] uppercase">
                    Як доїхати
                  </span>
                </div>
                {/* TODO: замінити на реальне відео — вставити посилання src */}
                <div className="w-full aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 group">
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pink-accent transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1 group-hover:text-pink-accent transition-colors duration-300">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-body text-xs text-white/20 tracking-wider">
                    Відео незабаром
                  </span>
                </div>
              </div>
            </motion.div>

              {/* Право: карта + кнопка маршруту */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full flex-1 min-h-[360px] bg-white/5 border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.5!2d25.765!3d49.8375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472e5b3b3b3b3b3b%3A0x0!2z0KHQtdC70L4g0JfQsNGI0LvRj9GF0L7QvCwg0JLRg9C70LjRhtGPINC_0ZbQtNC70ZbRgdC90LAg2g!5e0!3m2!1suk!2sua!4v1"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Локація змагань"
                />
              </div>

              {/* Кнопка маршруту */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=49.8375,25.765&destination_place_id=Зашляхом+вул.+Підлісна+2+Тернопільська+обл"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-white/20 hover:border-pink-accent text-white hover:text-pink-accent font-display text-lg tracking-wider transition-colors duration-300 group"
              >
                <Navigation size={20} className="group-hover:text-pink-accent transition-colors" />
                ПРОКЛАСТИ МАРШРУТ
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── СПОНСОРИ ── */}
        <SectionHeading className="text-white mb-10 md:mb-12">
          СПОНСОРИ
        </SectionHeading>

        {/* Перший спонсор — Континентал (вже є) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {/* Континентал Фармерз Груп */}
          <motion.div
            className="aspect-[3/2] border border-pink-accent/30 flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.0 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/sponsor-continental.png"
              alt="Континентал Фармерз Груп"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Fungi Farm */}
          <motion.div
            className="aspect-[3/2] border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/fungi-farm-logo.png"
              alt="Fungi Farm"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Плейсхолдери */}
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
  );
}
