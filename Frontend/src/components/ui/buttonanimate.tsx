import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

interface ButtonProps {
  TextoPrincipal: ReactNode;
  textoFinal: string;
  variant?: 'outline' | 'dark';
  clases?: string;
  onClick?: () => void;
}


export default function ButtonAnimate({
  TextoPrincipal,
  textoFinal,
  variant = 'outline',
  clases,
  onClick,
}: ButtonProps) {
    const [copy, setCopy] = useState(false);
    const isDark = variant === 'dark';
      useEffect(() => {
    if (!copy) return;

    const timer = window.setTimeout(() => {
      setCopy(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copy]);

  const handleShare = () => {
    onClick?.();
    if (!copy) setCopy(true);
  };


    return (
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.99 }}
          animate={{
            borderColor: copy ? '#F95C4B' : isDark ? '#000000' : '#9b9b9b',
            color: copy || isDark ? '#FFFFFF' : '#000000',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative flex cursor-pointer items-center justify-center overflow-hidden border font-semibold whitespace-nowrap ${
            isDark ? 'bg-black' : 'bg-transparent backdrop-blur-[5px]'
          } ${
            clases ??
            'h-12 w-full rounded-lg px-5 text-sm sm:h-13 sm:text-base md:h-14 md:text-lg lg:h-11 lg:w-40 lg:px-3 lg:text-sm'
          }`}
        >
          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{ scaleY: copy ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
            className="pointer-events-none absolute inset-0 bg-[#F95C4B]"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copy ? 'copied' : 'share'}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="relative z-10 inline-flex min-w-0 items-center gap-1.5 sm:gap-2"
            >
              {copy ? textoFinal : TextoPrincipal}
            </motion.span>
          </AnimatePresence>
        </motion.button>
    )
}