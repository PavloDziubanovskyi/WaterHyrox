import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'assembling' | 'holding' | 'splitting' | 'complete'>('assembling');

  const waterLetters = 'WATER'.split('');
  const hyroxLetters = 'HYROX'.split('');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('holding'), 1800);
    const splitTimer = setTimeout(() => setPhase('splitting'), 2300);
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 3000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const getLetterInitial = (i: number) => {
    const angle = (i % 2 === 0 ? 1 : -1) * (30 + Math.random() * 30);
    const dist = 300 + Math.random() * 200;
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * dist * (Math.random() > 0.5 ? 1 : -1),
      y: Math.sin(rad) * dist * (Math.random() > 0.5 ? 1 : -1),
      opacity: 0,
      rotate: (Math.random() - 0.5) * 180,
      scale: 0.3,
    };
  };

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute bg-black"
            initial={false}
            animate={
              phase === 'splitting'
                ? { y: '-100%' }
                : { y: '0%' }
            }
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ top: 0, left: 0, right: 0, height: '50%', transformOrigin: 'top' }}
          />
          <motion.div
            className="absolute bg-black"
            initial={false}
            animate={
              phase === 'splitting'
                ? { y: '100%' }
                : { y: '0%' }
            }
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ bottom: 0, left: 0, right: 0, height: '50%', transformOrigin: 'bottom' }}
          />

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-2">
              {waterLetters.map((letter, i) => (
                <motion.span
                  key={`w-${i}`}
                  initial={getLetterInitial(i)}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: i * 0.08,
                    type: 'spring' as const,
                    damping: 15,
                    stiffness: 80,
                    mass: 0.8,
                  }}
                  className="font-display text-[80px] md:text-[140px] leading-none text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center">
              {hyroxLetters.map((letter, i) => (
                <motion.span
                  key={`h-${i}`}
                  initial={getLetterInitial(i + 5)}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.4 + i * 0.08,
                    type: 'spring' as const,
                    damping: 15,
                    stiffness: 80,
                    mass: 0.8,
                  }}
                  className="font-display text-[80px] md:text-[140px] leading-none text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setPhase('complete');
              onComplete();
            }}
            className="absolute top-6 right-6 z-20 text-white/40 text-sm font-body tracking-widest hover:text-white transition-colors"
          >
            ПРОПУСТИТИ
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
