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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="font-display text-xl md:text-2xl text-white tracking-wider hover:text-pink-accent transition-colors"
        >
          WATER HYROX
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-7 h-0.5 bg-white origin-center"
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-7 h-0.5 bg-white origin-center"
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-start px-10 md:px-20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <div className="flex-1 flex flex-col justify-center gap-2 md:gap-4">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 80, opacity: 0 }}
                  transition={{ delay: i * 0.05, type: 'spring', damping: 20 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="group relative inline-block font-display text-[40px] md:text-[80px] leading-tight text-white hover:text-pink-accent transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 pb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
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
              >
                <Facebook size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
