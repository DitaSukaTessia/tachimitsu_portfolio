"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  external?: boolean;
  /** How strongly the element follows the cursor (0–1). */
  strength?: number;
};

/**
 * A button/link that subtly leans toward the cursor on hover (desktop only —
 * pointer events naturally no-op on touch). Wraps an anchor or button.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
  external,
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${className} cursor-pointer`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
