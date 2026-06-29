"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#header-nav")) setMenuOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center transition-all duration-300 ${
        isScrolled ? "nav-fixed py-1" : "bg-transparent py-2"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-primary via-primary-bright to-primary"
      />

      <div className="mx-auto w-full max-w-[1320px] px-5">
        <div
          className="relative flex items-center justify-between"
          id="header-nav"
        >
          <a href="#home" className="group block py-4">
            <Image
              src="/img/20.png"
              alt="TachiMitsu Logo"
              width={80}
              height={32}
              className="transition-[filter,transform] duration-300 group-hover:scale-105 group-hover:[filter:drop-shadow(0_0_14px_color-mix(in_oklch,var(--color-primary)_70%,transparent))]"
              style={{ width: "auto", height: "2rem" }}
              loading="eager"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn-primary text-sm !px-5 !py-2.5">
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`relative z-10 block p-2 lg:hidden ${menuOpen ? "h-active" : ""}`}
          >
            <span className="h-line" />
            <span className="h-line" />
            <span className="h-line" />
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="glass absolute right-0 top-full mt-3 w-56 rounded-2xl p-3 shadow-2xl shadow-black/50 lg:hidden"
              >
                <ul className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <li className="mt-2 px-1">
                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="btn-primary w-full text-sm"
                    >
                      Let&apos;s Talk
                    </a>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
