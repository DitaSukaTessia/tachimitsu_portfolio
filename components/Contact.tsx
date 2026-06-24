"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const mailto = `mailto:atashitachi434@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
  };

  const inputClass =
    "w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 placeholder:text-slate-500";

  return (
    <section id="contact" className="pt-36 pb-32" ref={ref}>
      <div className="container mx-auto max-w-[1320px]">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-xl text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
            <p className="font-medium text-slate-400 md:text-lg">
              At TachiMitsu, we are committed to pushing the boundaries of AI
              and technology. Reach out to collaborate, share ideas, or just say
              hello.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="name"
                className="block text-base font-bold text-primary mb-2"
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
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="email"
                className="block text-base font-bold text-primary mb-2"
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
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="message"
                className="block text-base font-bold text-primary mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>
            {error && (
              <p className="px-4 mb-4 text-red-400 text-sm font-medium">
                {error}
              </p>
            )}
            <div className="w-full px-4">
              <button
                type="submit"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
