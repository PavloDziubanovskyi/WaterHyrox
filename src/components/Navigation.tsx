import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

const menuItems = [
  { label: 'ПРО ЗМАГАННЯ', href: '#about' },
  { label: 'ФОРМАТ ДИСТАНЦІЇ', href: '#format' },
  { label: 'КАТЕГОРІЇ', href: '#categories' },
  { label: 'РОЗКЛАД', href: '#schedule' },
  { label: 'РЕЄСТРАЦІЯ', href: '#registration' },
  { label: 'ЛОКАЦІЯ', href: '#location' },
  { label: 'ОРГАНІЗАТОРИ', href: '#organizers' },
  { label: 'СПОНСОРИ', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'КОНТАКТИ', href: '#contacts' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="font-display text-lg sm:text-xl md:text-2xl text-white tracking-wider hover:text-pink-accent transition-colors"
        >
          WATER HYROX
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[60] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-white/40 hover:border-pink-accent transition-colors group"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <motion.span
              className="block w-full h-0.5 bg-white origin-center group-hover:bg-pink-accent transition-colors"
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-full h-0.5 bg-white origin-center group-hover:bg-pink-accent transition-colors"
              animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-full h-0.5 bg-white origin-center group-hover:bg-pink-accent transition-colors"
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between items-start px-6 sm:px-10 md:px-20 pt-24 pb-8 overflow-y-auto"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center gap-1 sm:gap-2 md:gap-3 w-full">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 80, opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.04, type: 'spring', damping: 22 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="group relative inline-flex items-center gap-3 sm:gap-4 font-display text-[28px] sm:text-[40px] md:text-[64px] lg:text-[80px] leading-[1.05] text-white hover:text-pink-accent transition-colors duration-300"
                  >
                    <span className="text-pink-accent/40 text-base sm:text-xl md:text-2xl font-body tracking-widest min-w-[40px]">
                      0{i + 1}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[3px] sm:h-1 bg-pink-accent group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col gap-2">
                <span className="font-body text-xs text-white/40 tracking-widest uppercase">Слідкуйте за нами</span>
                <div className="flex gap-5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
                    aria-label="TikTok"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.84 4.84 0 01-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-display text-2xl sm:text-3xl text-white">22.08.2026</div>
                <div className="font-body text-xs text-pink-accent tracking-widest uppercase mt-1">с. Зашляхом</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
