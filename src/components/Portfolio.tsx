// components/Portfolio.tsx
"use client";

import React from "react"; // Importación agregada para resolver el namespace JSX
import { motion } from "framer-motion";
import Image from "next/image";
import {
    SiReact,
    SiFirebase,
    SiPhp,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
} from "react-icons/si";

interface Technology {
    name: string;
    icon: React.ReactElement;
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
}

// URL de imagen placeholder para todos los proyectos
const placeholderImage =
    "https://img.freepik.com/foto-gratis/juego-personajes-anime-esteticos_23-2151560698.jpg?t=st=1738776482~exp=1738780082~hmac=b5b82a0c41b5e6789c8cb7f2c163fc0c9d45476d1620239f451447b7c45e9483&w=1060";

const projects: Project[] = [
    {
        id: 1,
        title: "NaturePos",
        description:
            "Aplicación móvil para la gestión de una tienda de productos naturales. Controla inventario, ventas y variantes con un diseño intuitivo.",
        image: placeholderImage,
        technologies: [
            { name: "React Native", icon: <SiReact className="text-2xl" /> },
            { name: "Firebase", icon: <SiFirebase className="text-2xl" /> },
        ],
    },
    {
        id: 2,
        title: "Sistema de Gestión de Almacén",
        description:
            "Software de gestión de productos y stock, desarrollado en PHP y MySQL, con una interfaz sencilla para facilitar el manejo de inventarios.",
        image: placeholderImage,
        technologies: [
            { name: "PHP", icon: <SiPhp className="text-2xl" /> },
            { name: "MySQL", icon: <SiMysql className="text-2xl" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-2xl" /> },
            { name: "CSS3", icon: <SiCss3 className="text-2xl" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-2xl" /> },
        ],
    },
    {
        id: 4,
        title: "Sistema Experto para Estrés Académico",
        description:
            "Proyecto de investigación que utiliza inteligencia artificial y el Inventario SISCO para diagnosticar el estrés académico y proponer intervenciones personalizadas.",
        image: placeholderImage,
        technologies: [
            { name: "Python", icon: <SiPython className="text-2xl" /> },
            { name: "SQL", icon: <SiMysql className="text-2xl" /> }, // Usamos MySQL como ejemplo para SQL
        ],
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-dark">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-white mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Sobre mí & Proyectos
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    Soy un apasionado estudiante de Ingeniería de Sistemas con experiencia en la
                    creación de interfaces modernas y aplicaciones digitales. Aquí encontrarás
                    algunos de mis proyectos destacados.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1 bg-gray-700 rounded px-2 py-1"
                                        >
                                            {tech.icon}
                                            <span className="text-xs text-gray-300">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
