"use client";

import { useCallback } from "react";
import { ParticlesProvider, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { quantity: 4 },
    },
  },
  particles: {
    color: { value: "#FF8010" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "bounce" },
    },
    number: { value: 80, density: { enable: true } },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
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
