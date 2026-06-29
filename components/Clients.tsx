"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const clients = [
  { name: "Google", href: "https://www.google.co.id/", src: "/img/clients/google.svg", width: 120 },
  { name: "OpenAI", href: "https://openai.com/", src: "/img/clients/openai.svg", width: 120 },
  { name: "NVIDIA", href: "https://www.nvidia.com/", src: "/img/clients/nvidia.svg", width: 112 },
  { name: "CWF", href: "https://www.cwfilms.jp/en/", src: "/img/clients/CWF.svg", width: 96 },
  { name: "HoYoverse", href: "https://www.hoyoverse.com/en-us/", src: "/img/clients/hoyoverse.svg", width: 160 },
];

export default function Clients() {
  // Duplicate the set so the marquee can loop seamlessly.
  const loop = [...clients, ...clients];

  return (
    <section id="clients" className="relative scroll-mt-24 py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <SectionHeading eyebrow="Clients" title="Collaboration With">
          We&apos;re proud to collaborate with industry leaders who share our
          vision of innovation and excellence — developing cutting-edge
          solutions that shape the future.
        </SectionHeading>

        <div className="group mask-x relative mt-16 overflow-hidden py-4">
          <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused] sm:gap-20">
            {loop.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="flex shrink-0 items-center opacity-55 transition-all duration-500 hover:scale-110 hover:opacity-100 [filter:brightness(0)_invert(0.9)]"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={40}
                  style={{ height: "2.25rem", width: "auto" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
