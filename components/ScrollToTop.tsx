"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="h-14 w-14 bg-primary fixed z-[9999] flex justify-center items-center bottom-6 right-6 rounded-full hover:opacity-80 hover:scale-110 transition duration-300 cursor-pointer shadow-lg"
          type="button"
        >
          <span className="block w-4 h-4 border-t-2 border-l-2 border-white rotate-45 mt-1.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
