import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram, Facebook } from 'lucide-react';

const menuItems = [
  { label: 'ПРО ЗМАГАННЯ', href: '#about' },
  { label: 'ФОРМАТ ДИСТАНЦІЇ', href: '#format' },
  { label: 'КАТЕГОРІЇ', href: '#categories' },
  { label: 'РОЗКЛАД', href: '#schedule' },
  { label: 'ЦІНА', href: '#registration' },
  { label: 'ЛОКАЦІЯ', href: '#location' },
  { label: 'ОРГАНІЗАТОРИ', href: '#organizers' },
  { label: 'СПОНСОРИ', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'КОНТАКТИ', href: '#contacts' },
];

// Sections with white/light background
const lightSections = ['#about', '#categories', '#registration', '#organizers', '#faq'];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Detect if current scroll position is over a light section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 60;
      let onLight = false;
      lightSections.forEach(id => {
        const el = document.querySelector(id) as HTMLElement;
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) onLight = true;
        }
      });
      setIsLight(onLight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center"
          aria-label="WATER HYROX"
        >
          <img
            src={isLight ? '/water-hyrox-for-light-bg.svg' : '/water-hyrox-for-dark-bg.svg'}
            alt="WATER HYROX"
            className="h-8 sm:h-9 md:h-10 w-auto transition-opacity duration-300"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-[60] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 transition-colors group ${isLight ? 'border-black/40 hover:border-black' : 'border-white/40 hover:border-pink-accent'}`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <motion.span
              className={`block w-full h-0.5 origin-center transition-colors ${isLight ? 'bg-black' : 'bg-white'}`}
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`block w-full h-0.5 origin-center transition-colors ${isLight ? 'bg-black' : 'bg-white'}`}
              animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block w-full h-0.5 origin-center transition-colors ${isLight ? 'bg-black' : 'bg-white'}`}
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between items-center px-6 sm:px-10 md:px-20 pt-24 pb-8 overflow-y-scroll overscroll-contain"
            style={{ touchAction: 'pan-y' }}
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-white/40 hover:border-pink-accent transition-colors group"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-white group-hover:text-pink-accent transition-colors">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            <div className="flex-1 flex flex-col justify-center items-center gap-0 w-full text-center py-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.04, type: 'spring', damping: 22 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="group relative inline-flex items-baseline gap-2 sm:gap-3 font-display text-[22px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] text-white hover:text-pink-accent transition-colors duration-300 py-1"
                  >
                    <span className="text-pink-accent/30 text-xs sm:text-sm font-body tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-accent group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col gap-2 items-center sm:items-start">
                <span className="font-body text-xs text-white/40 tracking-widest uppercase">Слідкуйте за нами</span>
                <div className="flex gap-5">
                  <a href="https://www.instagram.com/otter._.project?igsh=MnEyMW02YzJxOWNw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-accent transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@otter.project?_r=1&_t=ZS-96HPViJOrKu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-accent transition-colors" aria-label="TikTok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.84 4.84 0 01-1-.1z" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-accent transition-colors" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="font-display text-xl sm:text-2xl text-white">08.08.2026</div>
                <div className="font-body text-xs text-pink-accent tracking-widest uppercase mt-1">с. Зашляхом</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
            className="fixed inset-0 z-50 bg-black flex flex-col justify-between items-center px-6 sm:px-10 md:px-20 pt-24 pb-8 overflow-y-auto"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          >
            {/* Close button - large X in top right */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[70] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border-2 border-white/40 hover:border-pink-accent transition-colors group"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-white group-hover:text-pink-accent transition-colors">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            <div className="flex-1 flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-3 w-full text-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.04, type: 'spring', damping: 22 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="group relative inline-flex items-baseline gap-3 sm:gap-4 font-display text-[28px] sm:text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] text-white hover:text-pink-accent transition-colors duration-300"
                  >
                    <span className="text-pink-accent/40 text-sm sm:text-base md:text-xl font-body tracking-widest">
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
              <div className="flex flex-col gap-2 items-center sm:items-start">
                <span className="font-body text-xs text-white/40 tracking-widest uppercase">Слідкуйте за нами</span>
                <div className="flex gap-5">
                  <a
                    href="https://www.instagram.com/otter._.project?igsh=MnEyMW02YzJxOWNw&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-accent transition-colors hover:scale-110 transform duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@otter.project?_r=1&_t=ZS-96HPViJOrKu"
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
              <div className="text-center sm:text-right">
                <div className="font-display text-2xl sm:text-3xl text-white">08.08.2026</div>
                <div className="font-body text-xs text-pink-accent tracking-widest uppercase mt-1">с. Зашляхом</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
