import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ButtonProps {
  TextoPrincipal: string;
  textoFinal: string;
}


export default function ButtonAnimate({TextoPrincipal, textoFinal}: ButtonProps) {
    const [copy, setCopy] = useState(false);
      useEffect(() => {
    if (!copy) return;

    const timer = window.setTimeout(() => {
      setCopy(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copy]);

  const handleShare = () => {
    if (!copy) setCopy(true);
  };


    return (
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.99 }}
          animate={{
            borderColor: copy ? '#F95C4B' : '#9b9b9b',
            color: copy ? '#FFFFFF' : '#000000',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative flex h-[clamp(44px,6.2dvh,52px)] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-transparent px-5 text-[clamp(0.92rem,3.8vw,1.02rem)] font-semibold backdrop-blur-[5px]"
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
              className="relative z-10"
            >
              {copy ? textoFinal : TextoPrincipal}
            </motion.span>
          </AnimatePresence>
        </motion.button>
    )
}