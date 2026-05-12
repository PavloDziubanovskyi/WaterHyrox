import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.84 4.84 0 01-1-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contacts" className="bg-black py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          className="mb-10 md:mb-14 w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/water-hyrox-for-dark-bg.svg"
            alt="WATER HYROX"
            className="w-full max-w-[260px] sm:max-w-[400px] md:max-w-[600px] h-auto"
          />
        </motion.div>

        {/* Contacts section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-body text-xs text-pink-accent tracking-[0.3em] uppercase mb-8">Контакти</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 max-w-2xl mx-auto">
            <a
              href="tel:+380986435549"
              className="group border border-white/10 hover:border-pink-accent p-5 text-left transition-colors"
            >
              <div className="flex items-center gap-2 text-pink-accent mb-2">
                <Phone size={16} />
                <span className="font-body text-xs tracking-widest uppercase">Секретар змагань</span>
              </div>
              <div className="font-display text-xl md:text-2xl text-white group-hover:text-pink-accent transition-colors mb-1">
                Павло Дзюбановський
              </div>
              <div className="font-body text-sm text-white/60">+38 (098) 643-55-49</div>
            </a>

            <a
              href="tel:+380969646076"
              className="group border border-white/10 hover:border-pink-accent p-5 text-left transition-colors"
            >
              <div className="flex items-center gap-2 text-pink-accent mb-2">
                <Phone size={16} />
                <span className="font-body text-xs tracking-widest uppercase">Організатор змагань</span>
              </div>
              <div className="font-display text-xl md:text-2xl text-white group-hover:text-pink-accent transition-colors mb-1">
                Анастасія Дзюбановська
              </div>
              <div className="font-body text-sm text-white/60">+38 (096) 964-60-76</div>
            </a>
          </div>

          <a
            href="mailto:otterprojectswim@gmail.com"
            className="inline-flex items-center gap-2 text-white/70 hover:text-pink-accent transition-colors font-body text-sm md:text-base"
          >
            <Mail size={18} />
            otterprojectswim@gmail.com
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/otter._.project?igsh=MnEyMW02YzJxOWNw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@otter.project?_r=1&_t=ZS-96HPViJOrKu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
            aria-label="TikTok"
          >
            <TikTokIcon size={28} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-accent transition-all duration-200 hover:scale-110"
            aria-label="Facebook"
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
            <span className="font-body text-sm text-white/50">ГО Otter Project</span>
          </div>
          <p className="font-body text-xs text-white/20">
            &copy; 2026 WATER HYROX. Організовано ГО Otter Project
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
