import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const sponsors = [
  { name: 'Континентал Фармерз Груп', logo: '/sponsor-continental.png' },
];

// Fill remaining slots with placeholders (total 8 slots)
const totalSlots = 8;
const placeholders = Array.from({ length: totalSlots - sponsors.length }, (_, i) => i + 1);

export default function Sponsors() {
  return (
    <SectionWrapper id="sponsors" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading className="text-white mb-12 md:mb-16">
          СПОНСОРИ
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              className="aspect-[3/2] bg-black border border-pink-accent/30 flex items-center justify-center p-4 md:p-6 hover:border-pink-accent transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
          {placeholders.map((slot, i) => (
            <motion.div
              key={`placeholder-${slot}`}
              className="aspect-[3/2] bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-accent/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sponsors.length + i) * 0.06 }}
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
