import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'entering' | 'holding' | 'exiting' | 'complete'>('entering');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('holding'), 1400);
    const exitTimer = setTimeout(() => setPhase('exiting'), 2000);
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 2700);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Left curtain exits left */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2 bg-white z-10"
            animate={phase === 'exiting' ? { x: '-100%' } : { x: '0%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Right curtain exits right */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-white z-10"
            animate={phase === 'exiting' ? { x: '100%' } : { x: '0%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo: WATER from left, HYROX from right */}
          <div className="relative z-20 flex flex-col items-center leading-none select-none">
            {/* WATER — comes from left */}
            <motion.div
              className="font-display text-[72px] sm:text-[110px] md:text-[160px] lg:text-[200px] leading-[0.85] text-black"
              initial={{ x: '-120%', opacity: 0 }}
              animate={
                phase === 'entering' || phase === 'holding' || phase === 'exiting'
                  ? { x: '0%', opacity: 1 }
                  : { x: '-120%', opacity: 0 }
              }
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              WATER
            </motion.div>

            {/* HYROX — comes from right */}
            <motion.div
              className="font-display text-[72px] sm:text-[110px] md:text-[160px] lg:text-[200px] leading-[0.85] text-black"
              initial={{ x: '120%', opacity: 0 }}
              animate={
                phase === 'entering' || phase === 'holding' || phase === 'exiting'
                  ? { x: '0%', opacity: 1 }
                  : { x: '120%', opacity: 0 }
              }
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
            >
              HYROX
            </motion.div>
          </div>

          {/* Skip button */}
          <button
            onClick={() => { setPhase('complete'); onComplete(); }}
            className="absolute bottom-8 right-8 z-20 text-black/30 text-xs font-body tracking-widest hover:text-black/60 transition-colors uppercase"
          >
            Пропустити
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
