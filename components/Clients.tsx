"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const clients = [
  {
    name: "Google",
    href: "https://www.google.co.id/",
    src: "/img/clients/google.svg",
    width: 120,
  },
  {
    name: "OpenAI",
    href: "https://openai.com/",
    src: "/img/clients/openai.svg",
    width: 120,
  },
  {
    name: "NVIDIA",
    href: "https://www.nvidia.com/",
    src: "/img/clients/nvidia.svg",
    width: 112,
  },
  {
    name: "CWF",
    href: "https://www.cwfilms.jp/en/",
    src: "/img/clients/CWF.svg",
    width: 128,
  },
  {
    name: "HoYoverse",
    href: "https://www.hoyoverse.com/en-us/",
    src: "/img/clients/hoyoverse.svg",
    width: 180,
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clients" className="pt-36 pb-32 bg-[#25262f]" ref={ref}>
      <div className="container mx-auto max-w-[1320px]">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-xl text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Collaboration With
            </h2>
            <p className="font-medium text-slate-400 md:text-lg">
              At TachiMitsu, we are committed to pushing the boundaries of AI
              and technology. We are proud to collaborate with industry leaders
              who share our vision of innovation and excellence. Through these
              partnerships, we continue to develop cutting-edge solutions that
              shape the future.
            </p>
          </div>
        </motion.div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {clients.map((client, i) => (
              <motion.a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mx-4 py-4 grayscale opacity-60 transition duration-500 ease-in-out hover:grayscale-0 hover:scale-105 hover:opacity-100 lg:mx-6 xl:mx-8"
                style={{ maxWidth: `${client.width}px` }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={60}
                  className="w-full"
                  style={{ height: "auto" }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
