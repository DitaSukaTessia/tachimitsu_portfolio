"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "LifeOS",
    category: "Deep Learning",
    description:
      "Advanced Pyro Elemental AI project using deep learning to simulate adaptive behaviors.",
    image: "/img/ai.jpg",
    github: "https://github.com/DitaSukaTessia/lifeOS",
    featured: true,
  },
  {
    title: "Genshin Build Planner",
    category: "Tooling",
    description:
      "AI-driven combat protocol with neural synchronization and lightning-fast response systems.",
    image: "/img/taki.png",
    github: "https://github.com/DitaSukaTessia/genshinBuildPlanner",
  },
  {
    title: "TachiMitsu Portfolio",
    category: "Web",
    description:
      "Deep reinforcement AI that learns adaptive decision-making under uncertainty.",
    image: "/img/ai2.jpg",
    github: "https://github.com/DitaSukaTessia/tachimitsu_portfolio",
  },
  {
    title: "VolTask",
    category: "Generative AI",
    description:
      "Generative AI pipeline for creating dynamic character animations from motion data.",
    image: "/img/anim.webp",
    github: "https://github.com/DitaSukaTessia/VolTask",
  },
  {
    title: "NeuraAI",
    category: "Dev Tools",
    description:
      "A curated suite of developer tools to streamline AI model training and deployment.",
    image: "/img/tool.jpg",
    github: "https://github.com/DitaSukaTessia/NeuraAI",
  },
  {
    title: "TachiNet Core",
    category: "Infrastructure",
    description:
      "Scalable network intelligence layer for distributed AI computation and data routing.",
    image: "/img/ai2.jpg",
    github: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <SectionHeading eyebrow="Portfolio" title="Latest Projects">
          Explore our latest innovations in AI and technology — combining art,
          precision, and intelligence to redefine the digital frontier.
        </SectionHeading>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[18rem]">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative h-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-500 hover:border-primary/50 sm:h-72 lg:h-auto ${
                project.featured ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes={
                  project.featured
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

              {/* Corner index + arrow */}
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <span className="font-display text-xs font-semibold text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6">
                <span className="chip mb-3 !py-1 !text-xs !text-primary">
                  {project.category}
                </span>
                <h3
                  className={`font-semibold text-white ${
                    project.featured ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Reveal on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="max-w-md text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#14100a] transition hover:gap-3 hover:brightness-105"
                      >
                        View Project
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    ) : (
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-300">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
