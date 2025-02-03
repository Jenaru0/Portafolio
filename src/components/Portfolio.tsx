// components/Portfolio.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                {/* Galería de proyectos: Ejemplo de tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((project) => (
                        <motion.div
                            key={project}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={`/images/project-${project}.jpg`}
                                alt={`Proyecto ${project}`}
                                width={400} // Ajusta según el tamaño deseado
                                height={300} // Ajusta según el tamaño deseado
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Proyecto {project}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Breve descripción del proyecto. Puedes ajustar este contenido.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
