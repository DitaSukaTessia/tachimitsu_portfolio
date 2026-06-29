"use client";

import { useCallback } from "react";
import { ParticlesProvider, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 170, links: { opacity: 0.4 } },
      push: { quantity: 3 },
    },
  },
  particles: {
    color: { value: ["#FF8010", "#f8c98a", "#ffffff"] },
    links: {
      color: "#ff9a3c",
      distance: 150,
      enable: true,
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
    number: { value: 46, density: { enable: true } },
    opacity: {
      value: { min: 0.1, max: 0.45 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2.6 } },
  },
  detectRetina: true,
} as const;

function ParticlesCanvas() {
  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}

export default function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <ParticlesCanvas />
    </ParticlesProvider>
  );
}
