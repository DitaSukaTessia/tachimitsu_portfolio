"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-16 min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full self-center lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-sm font-semibold text-slate-50 sm:text-base md:text-xl">
              Hi Everyone, I am
              <span className="block font-bold text-primary text-3xl mb-1 sm:text-4xl lg:text-5xl">
                Tachi_Mitsu
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-xl">
              AI Specialist |{" "}
              <span className="text-slate-50">Tech Enthusiast</span>
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed max-w-md">
              tachimitsu is an AI development studio affiliated with Open-AI and
              Google.{" "}
              <span className="text-slate-100">In Future</span>
            </p>
            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            className="w-full self-end mx-auto mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:w-[400px]">
              <Image
                src="/img/tachibana.png"
                alt="TachiMitsu hero"
                width={500}
                height={600}
                className="w-full transition-transform duration-500 hover:scale-105 z-10 relative"
                priority
              />
              <span className="absolute w-full inset-0 flex items-center translate-y-16 justify-center z-[-1] sm:translate-y-24 lg:translate-y-16">
                <svg
                  width="360"
                  height="360"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="oklch(0.75 0.183 55.934)"
                    d="M55.6,-47.4C68.4,-28.4,72.5,-5.5,68,16.1C63.5,37.6,50.5,57.7,32.6,65.5C14.7,73.2,-8.1,68.6,-30.1,59.3C-52.2,49.9,-73.6,35.8,-76.7,18.5C-79.9,1.2,-64.8,-19.3,-49,-39C-33.2,-58.7,-16.6,-77.7,2.4,-79.6C21.4,-81.6,42.9,-66.4,55.6,-47.4Z"
                    transform="translate(100 100) scale(1.3)"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
