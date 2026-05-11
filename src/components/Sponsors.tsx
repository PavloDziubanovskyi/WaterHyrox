import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

// TODO: add sponsor logos
const sponsorSlots = Array.from({ length: 8 }, (_, i) => i + 1);

export default function Sponsors() {
  return (
    <SectionWrapper id="sponsors" className="bg-black py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="text-white mb-12 md:mb-16">
          СПОНСОРИ
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sponsorSlots.map((slot, i) => (
            <motion.div
              key={slot}
              className="aspect-[3/2] bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-accent/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03, borderColor: '#FF2D9B' }}
            >
              <span className="font-display text-2xl text-white/15">LOGO</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
