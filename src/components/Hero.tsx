"use client";

import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import SectionWrapper from "./ui/SectionWrapper";
import { useEffect, useState } from "react";
import { cn } from "@/utils/classNames";

const Hero = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = "jhonatanjesusnapangaruiz@gmail.com";

    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => setIsCopied(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [isCopied]);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
    };

    return (
        <SectionWrapper
            id="hero"
            className="relative h-screen snap-start flex items-center justify-center text-center px-4 bg-gradient-hero"
        >
            <div className="max-w-6xl w-full mx-auto">
                {/* Contenido principal con z-index elevado */}
                <div className="relative z-20 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-secondary/20 hover:border-secondary/40 transition-all" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                            Jhonatan Napanga
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Estudiante de Ingeniería de Sistemas apasionado por el desarrollo de
                            interfaces modernas y experiencias digitales impactantes
                        </p>
                    </motion.div>

                    {/* Sección de contacto mejorada */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center space-y-6"
                    >
                        {/* Email visible con efecto de copiado */}
                        <div className="group relative">
                            <button
                                onClick={copyEmail}
                                className="flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors"
                            >
                                <FaEnvelope className="shrink-0" />
                                <span className="border-b border-transparent group-hover:border-white transition-all">
                                    {email}
                                </span>
                            </button>

                            {/* Feedback visual de copiado */}
                            <div
                                className={cn(
                                    "absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-secondary transition-opacity",
                                    isCopied ? "opacity-100" : "opacity-0"
                                )}
                            >
                                ✓ Copiado al portapapeles
                            </div>
                        </div>

                        {/* Redes sociales con hover effects */}
                        <div className="flex gap-6">
                            <a
                                href="https://www.linkedin.com/in/jhonatan-jesus-napanga-ruiz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-2xl text-gray-300 group-hover:text-secondary transition-colors" />
                            </a>

                            <a
                                href="https://github.com/Jenaru0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-2xl text-gray-300 group-hover:text-secondary transition-colors" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <button
                            onClick={() =>
                                document
                                    .getElementById("about")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="animate-bounce p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                            aria-label="Desplazarse hacia abajo"
                        >
                            <FaArrowDown className="text-2xl text-gray-300" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
