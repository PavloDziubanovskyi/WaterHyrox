import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

export default function Location() {
  return (
    <>
      {/* ══ ГЕНЕРАЛЬНИЙ ПАРТНЕР ══ */}
      <SectionWrapper id="location" className="bg-black py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <SectionHeading className="text-white mb-12 md:mb-16">
            ГЕНЕРАЛЬНИЙ ПАРТНЕР
          </SectionHeading>

          {/* Лого по центру */}
          <motion.div
            className="flex justify-center mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovyviter-logo.png"
              alt="Ловивітер"
              className="h-32 md:h-44 w-auto object-contain"
            />
          </motion.div>

          {/* Назва + адреса по центру */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-1">
              Розважальний комплекс
            </h3>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-pink-accent leading-tight mb-6">
              «Ловивітер»
            </h3>
            <div className="flex items-center justify-center gap-2 text-white/60">
              <MapPin className="text-pink-accent flex-shrink-0" size={18} />
              <p className="font-body text-base md:text-lg leading-relaxed">
                с. Зашляхом, вул. Підлісна 2, Кременецький р-н, Тернопільська обл.
              </p>
            </div>
          </motion.div>

          {/* Відео зліва — карта+кнопка справа */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Відео */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="text-pink-accent" size={16} />
                <span className="font-body text-xs text-pink-accent tracking-[0.25em] uppercase">
                  Як доїхати
                </span>
              </div>
              {/* TODO: замінити на реальне відео */}
              <div className="w-full aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 group">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pink-accent transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1 group-hover:text-pink-accent transition-colors duration-300">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-body text-xs text-white/20 tracking-wider">Відео незабаром</span>
              </div>
            </div>

            {/* Карта + кнопка */}
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-video border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.9180709636946!2d25.743862619689715!3d49.8121093183993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472fd790c56e267f%3A0x1f3a317fd0dfac!2z0JvQntCS0JjQktCG0KLQldCg!5e1!3m2!1suk!2sua!4v1779738116247!5m2!1suk!2sua"
                  style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Локація змагань"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/1gTD7BaNcvvB8v9L8"
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

      {/* ══ ПАРТНЕРИ ТА СПОНСОРИ ══ */}
      <SectionWrapper id="sponsors" className="bg-white text-black py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          {/* PARTNERS */}
          <SectionHeading className="text-black mb-12 md:mb-16">
            ПАРТНЕРИ
          </SectionHeading>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20 md:mb-24">

            {/* Континентал */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-continental.png"
                alt="Континентал Фармерз Груп"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* Fungi Farm */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/fungi-farm-logo.png"
                alt="Fungi Farm"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* Sport UA — новий партнер */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/partner-sport-ua.png"
                alt="Sport UA"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

          </div>

          {/* SPONSORS */}
          <SectionHeading className="text-black mb-12 md:mb-16">
            СПОНСОРИ
          </SectionHeading>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">

            {/* XSport — новий спонсор */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-xsport.png"
                alt="XSport"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* Fizi */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-fizi.png"
                alt="Fizi"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* Avène */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-avene.png"
                alt="Avène"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* Морщинська */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-morshynska.png"
                alt="Морщинська"
                className="w-full h-full object-contain"
                style={{ maxWidth: '90%', maxHeight: '75%' }}
              />
            </motion.div>

            {/* КДЮСШ №2 ім. Ю. Горайського */}
            <motion.div
              className="border border-pink-accent/30 bg-white flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[220px]"
              style={{ aspectRatio: '3/2' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/sponsor-kdyussh.png"
                alt="КДЮСШ №2 ім. Ю. Горайського"
                className="w-full h-full object-contain"
                style={{ maxWidth: '75%', maxHeight: '95%' }}
              />
            </motion.div>

          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
