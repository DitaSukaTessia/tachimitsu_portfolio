"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element travels from while fading in. */
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

/**
 * Lightweight scroll-reveal wrapper. Fades + lifts its children into view.
 */
export default function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
