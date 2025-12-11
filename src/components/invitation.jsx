
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

const words = ["Un scroll mas", "mis proyectos", " estan cercaꜜ↓⭭"];

export default function Invitation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);


  return (
    <div className="flex flex-col  sm:flex-row  items-center justify-center gap-2 text-white text-2xl font-light p-4 m-4 bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-xl">
      <span className='whitespace-nowrap'>
        Gracias por tu visita    ♡
      </span>
      <div className="relative inline-block  h-7 min-w-[140px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[activeIndex]}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}

            className="absolute left-0  text-slate-200 text-lg"
          >
            {words[activeIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

    </div>


  );
}