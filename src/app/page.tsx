"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GradientBackground from "@/components/Background";

export default function Home() {
  return (
    <main >
      {/* Fondo animado */}
      <GradientBackground />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
