import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function MediaNote() {
  return (
    <section className="bg-black py-12 md:py-16 px-4 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-start gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-pink-accent flex items-center justify-center">
              <Camera className="text-pink-accent" size={24} strokeWidth={1.5} />
            </div>
          </div>
          <div className="flex-1">
            <div className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase mb-2">
              Фото та відеозйомка
            </div>
            <p className="font-body text-sm md:text-base text-white/60 leading-relaxed">
              На заході присутній офіційний фотограф та/або відеооператор. Зйомка є вільною — учасники, глядачі та представники ЗМІ можуть здійснювати фото- та відеозйомку без спеціального дозволу організаторів.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
