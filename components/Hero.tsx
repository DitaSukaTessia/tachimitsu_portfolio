"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const stats = [
  { value: "6+", label: "Projects" },
  { value: "6", label: "Technologies" },
  { value: "∞", label: "Ideas" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.span
              variants={item}
              className="eyebrow mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AI Development Studio
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="block text-base font-medium tracking-wide text-slate-400 sm:text-lg">
                Hi everyone, I am
              </span>
              <span className="text-gradient-animated mt-2 block">
                Tachi_Mitsu
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-lg font-medium text-slate-300 lg:text-xl"
            >
              AI Specialist
              <span className="mx-2 text-primary">/</span>
              Tech Enthusiast
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-400 lg:mx-0"
            >
              An AI development studio exploring the frontier of code, networks,
              and intelligence — affiliated with{" "}
              <span className="text-slate-200">OpenAI</span> and{" "}
              <span className="text-slate-200">Google</span>.{" "}
              <span className="text-primary">In the future.</span>
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <MagneticButton href="#contact" className="btn-primary">
                Contact Us
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#portfolio" className="btn-ghost">
                View Work
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 flex items-center justify-center gap-6 sm:gap-10 lg:justify-start"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* Rotating conic ring */}
              <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,color-mix(in_oklch,var(--color-primary)_55%,transparent)_90deg,transparent_180deg,color-mix(in_oklch,var(--color-accent)_45%,transparent)_300deg,transparent_360deg)] opacity-50 blur-2xl" />
              {/* Soft glow */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--color-primary)_35%,transparent)_0%,transparent_65%)] blur-2xl" />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/img/tachibana.png"
                  alt="TachiMitsu"
                  width={500}
                  height={600}
                  className="relative z-10 w-full drop-shadow-2xl"
                  style={{ height: "auto" }}
                  preload
                />
              </motion.div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute left-0 top-10 z-20 rounded-2xl px-4 py-2.5 text-sm font-medium text-white shadow-lg"
              >
                <span className="text-primary">⚡</span> AI / ML
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass absolute bottom-16 right-0 z-20 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-white shadow-lg"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px] shadow-green-400" />
                Online
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-primary md:flex"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-slate-600 p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-primary"
          />
        </span>
      </motion.a>
    </section>
  );
}
