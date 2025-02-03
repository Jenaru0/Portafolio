"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";

const skills = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
];

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const About = () => {
    return (
        <SectionWrapper id="about" className="h-screen snap-start bg-gradient-about">
            {/* Título */}
            <motion.h2
                className="text-4xl text-white font-bold mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                Sobre mí
            </motion.h2>

            {/* Descripción */}
            <motion.p
                className="max-w-2xl text-lg text-white mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Soy un estudiante apasionado por la Ingeniería de Sistemas y el
                desarrollo web. Me especializo en construir interfaces atractivas y
                funcionales utilizando tecnologías modernas como React, Next.js y
                TailwindCSS. También me esfuerzo por mejorar mis habilidades
                constantemente para ofrecer soluciones innovadoras y eficientes.
            </motion.p>

            {/* Habilidades */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center group"
                        variants={skillVariants}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="w-12 h-12 mb-2"
                        />
                        <p className="text-sm font-medium group-hover:text-secondary transition-colors">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default About;
