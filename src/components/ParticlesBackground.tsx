"use client";

import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 40 }, // Pocas partículas
          color: { value: "#64FFDA" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#64FFDA",
            opacity: 0.3,
            width: 0.8,
          },
        },
      }}
    />
  );
}
