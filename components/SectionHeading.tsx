"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

/**
 * Shared section header: a mono-styled eyebrow with a connector line,
 * a display title, and an optional supporting paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"} ${className}`}
    >
      <span className={`eyebrow ${isCenter ? "justify-center" : ""}`}>
        <span className="h-px w-6 bg-primary/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
          {children}
        </p>
      )}
    </motion.div>
  );
}
