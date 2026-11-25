import { AnimatePresence, motion } from 'motion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ContactsPage from '../pages/ContactsPage';
import { HomePage } from '../pages/HomePage';

export default function Rutas() {
  const location = useLocation();
  const isContacts = location.pathname === '/contactos';

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden bg-[#EDEDED]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={location.pathname}
          initial={isContacts ? { x: '100%' } : { x: '-25%', opacity: 0.85 }}
          animate={{ x: 0, opacity: 1 }}
          exit={isContacts ? { x: '100%' } : { x: '-25%', opacity: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={
            isContacts
              ? 'relative z-20 min-h-dvh w-full bg-[#EDEDED] shadow-2xl'
              : 'relative z-10 min-h-dvh w-full bg-[#EDEDED]'
          }
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactos" element={<ContactsPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
