"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "LifeOS",
    description:
      "Advanced Pyro Elemental AI project using deep learning to simulate adaptive behaviors.",
    image: "/img/ai.jpg",
    github: "https://github.com/DitaSukaTessia/lifeOS",
  },
  {
    title: "Genshin Build Planner",
    description:
      "AI-driven combat protocol with neural synchronization and lightning-fast response systems.",
    image: "/img/taki.png",
    github: "https://github.com/DitaSukaTessia/genshinBuildPlanner",
  },
  {
    title: "TachiMitsu Portfolio",
    description:
      "Deep reinforcement AI that learns adaptive decision-making under uncertainty.",
    image: "/img/ai2.jpg",
    github: "https://github.com/DitaSukaTessia/tachimitsu_portfolio",
  },
  {
    title: "VolTask",
    description:
      "Generative AI pipeline for creating dynamic character animations from motion data.",
    image: "/img/anim.webp",
    github: "https://github.com/DitaSukaTessia/VolTask",
  },
  {
    title: "NeuraAI",
    description:
      "A curated suite of developer tools to streamline AI model training and deployment.",
    image: "/img/tool.jpg",
    github: "https://github.com/DitaSukaTessia/NeuraAI",
  },
  {
    title: "TachiNet Core",
    description:
      "Scalable network intelligence layer for distributed AI computation and data routing.",
    image: "/img/ai2.jpg",
    github: null,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="pt-36 pb-32 bg-[#101119]" ref={ref}>
      <div className="container mx-auto max-w-[1320px]">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
            <h2 className="font-bold text-white text-3xl mb-4">Latest Project</h2>
            <p className="font-medium text-slate-400">
              Explore our latest innovations in AI and technology — combining
              art, precision, and intelligence to redefine the digital frontier.
            </p>
          </div>
        </motion.div>

        <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:w-10/12 xl:mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-md shadow-black/60 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-primary"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-80 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end text-left opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 items-start">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/80 transition-all"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    type="button"
                    className="bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/80 transition-all cursor-pointer"
                  >
                    View Project
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
