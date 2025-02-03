"use client";

import { motion } from "framer-motion";

const headerVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.5 } },
};

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const Header = () => (
  <motion.header
    className="bg-primary text-text py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 w-full z-50"
    initial="hidden"
    animate="visible"
    variants={headerVariants}
    role="banner"
  >
    <h1 className="text-2xl font-bold hover:text-secondary">
      <button
        onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
        className="hover:text-secondary transition-colors duration-300 cursor-pointer"
        role="link"
      >
        Mi Portafolio
      </button>
    </h1>
    <nav role="navigation">
      <ul className="flex gap-6 text-base">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary hover:text-primary transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 cursor-pointer"
              role="link"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </motion.header>
);

export default Header;
