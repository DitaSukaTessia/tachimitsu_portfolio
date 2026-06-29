"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const infoCards = [
  {
    label: "Email",
    value: "atashitachi434@gmail.com",
    href: "mailto:atashitachi434@gmail.com",
    icon: <path d="M4 4h16v16H4zM4 7l8 6 8-6" />,
  },
  {
    label: "WhatsApp",
    value: "Chat directly",
    href: "https://wa.link/r73sj3",
    icon: <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />,
  },
  {
    label: "Location",
    value: "Boyolali, Jawa Tengah",
    href: null,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSent(true);
    const mailto = `mailto:atashitachi434@gmail.com?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(
      form.email
    )}`;
    window.location.href = mailto;
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-white placeholder:text-slate-500 transition duration-200 focus:border-primary focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — info */}
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-primary/60" />
              Contact
            </span>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">intelligent</span> together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 lg:text-lg">
              At TachiMitsu, we&apos;re committed to pushing the boundaries of AI
              and technology. Reach out to collaborate, share ideas, or just say
              hello.
            </p>

            <div className="mt-9 flex flex-col gap-3.5">
              {infoCards.map((card) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary group-hover:text-[#14100a]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {card.icon}
                      </svg>
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-slate-500">
                        {card.label}
                      </span>
                      <span className="block text-sm font-medium text-slate-200 break-all">
                        {card.value}
                      </span>
                    </span>
                  </>
                );
                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="group glass flex items-center gap-4 rounded-2xl p-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your idea..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <p className="mb-4 text-sm font-medium text-red-400">{error}</p>
              )}
              {sent && !error && (
                <p className="mb-4 text-sm font-medium text-green-400">
                  Opening your mail app… thank you!
                </p>
              )}

              <button type="submit" className="btn-primary w-full">
                Send Message
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
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                </svg>
              </button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
