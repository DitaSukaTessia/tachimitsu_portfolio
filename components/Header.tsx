"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
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
      className={`absolute top-0 left-0 w-full flex items-center z-50 transition-all duration-300 ${
        isScrolled ? "nav-fixed" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1320px] mx-auto px-4">
        <div className="flex items-center justify-between relative" id="header-nav">
          <a href="#home" className="block py-5 px-2">
            <Image
              src="/img/20.png"
              alt="TachiMitsu Logo"
              width={80}
              height={32}
              className="h-8"
              style={{ width: "auto" }}
              priority
            />
          </a>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`block lg:hidden p-2 ${menuOpen ? "h-active" : ""}`}
          >
            <span className="h-line origin-top-left" />
            <span className="h-line" />
            <span className="h-line origin-bottom-left" />
          </button>

          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-full right-0 py-5 bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-black/40 rounded-xl w-52 lg:block lg:static lg:bg-transparent lg:w-auto lg:shadow-none lg:rounded-none lg:backdrop-blur-none`}
          >
            <ul className="block lg:flex lg:items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base text-white py-2.5 px-6 lg:px-4 hover:text-primary transition duration-300 ease-in-out whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
