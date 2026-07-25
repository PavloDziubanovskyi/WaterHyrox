import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeading } from './SectionWrapper';

const partners = [
  { name: 'Континентал Фармерз Груп', logo: '/sponsor-continental.png' },
  { name: 'Fungi Farm', logo: '/fungi-farm-logo.png' },
  { name: 'Sport UA', logo: '/partner-sport-ua.png' },
];

const sponsors = [
  { name: 'XSport', logo: '/sponsor-xsport.png' },
];

const totalPartnerSlots = 4;
const totalSponsorSlots = 4;
const partnerPlaceholders = Array.from({ length: Math.max(0, totalPartnerSlots - partners.length) }, (_, i) => i + 1);
const sponsorPlaceholders = Array.from({ length: Math.max(0, totalSponsorSlots - sponsors.length) }, (_, i) => i + 1);

function LogoCard({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  return (
    <motion.div
      className="aspect-[3/2] bg-white border border-black/10 flex items-center justify-center p-4 md:p-6 hover:border-black transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.03 }}
    >
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </motion.div>
  );
}

function Placeholder({ delay }: { delay: number }) {
  return (
    <motion.div
      className="aspect-[3/2] bg-black/5 border border-black/10 flex items-center justify-center hover:border-pink-accent/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.03 }}
    >
      <span className="font-display text-2xl text-black/15">LOGO</span>
    </motion.div>
  );
}

export default function Sponsors() {
  return (
    <SectionWrapper id="sponsors" className="bg-white py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* PARTNERS */}
        <SectionHeading className="text-black mb-12 md:mb-16">
          ПАРТНЕРИ
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24">
          {partners.map((p, i) => (
            <LogoCard key={p.name} src={p.logo} alt={p.name} delay={i * 0.06} />
          ))}
          {partnerPlaceholders.map((slot, i) => (
            <Placeholder key={`p-ph-${slot}`} delay={(partners.length + i) * 0.06} />
          ))}
        </div>

        {/* SPONSORS */}
        <SectionHeading className="text-black mb-12 md:mb-16">
          СПОНСОРИ
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {sponsors.map((s, i) => (
            <LogoCard key={s.name} src={s.logo} alt={s.name} delay={i * 0.06} />
          ))}
          {sponsorPlaceholders.map((slot, i) => (
            <Placeholder key={`s-ph-${slot}`} delay={(sponsors.length + i) * 0.06} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
