import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-[80px] md:text-[120px] leading-[0.85] text-white mb-2">
            WATER
          </h2>
          <h2 className="font-display text-[80px] md:text-[120px] leading-[0.85] text-white">
            HYROX
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="mailto:info@waterhyrox.ua"
            className="flex items-center gap-2 text-white/50 hover:text-pink-accent transition-colors font-body text-sm"
          >
            <Mail size={16} />
            info@waterhyrox.ua
          </a>
          <a
            href="tel:+380000000000"
            className="flex items-center gap-2 text-white/50 hover:text-pink-accent transition-colors font-body text-sm"
          >
            <Phone size={16} />
            +38 (000) 000-00-00
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.84 4.84 0 01-1-.1z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
          >
            <Facebook size={28} />
          </a>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/otter-project-logo.jpg"
              alt="OTTER PROJECT"
              className="w-10 h-10 object-contain"
            />
            <span className="font-body text-sm text-white/50">ГО OTTER PROJECT</span>
          </div>
          <p className="font-body text-xs text-white/20">
            &copy; 2026 WATER HYROX. Організовано ГО OTTER PROJECT
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
