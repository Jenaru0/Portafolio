"use client";

import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { cn } from "@/utils/classNames";
import { Poppins } from "next/font/google";

// Configuración de la fuente Poppins
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

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
        <section
            id="hero"
            className="relative h-screen flex flex-col items-center justify-center text-center px-4"
            style={{
                background: "url('/images/professional-bg.jpg') no-repeat center center/cover",
            }}
        >
            <div className="max-w-6xl w-full mx-auto relative z-20 space-y-8">
                {/* Avatar o Imagen de Perfil */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Avatar className="w-32 h-32 mx-auto mb-8 border-4 border-secondary/20 hover:border-secondary/40 transition-colors duration-300" />
                </motion.div>

                {/* Título y Descripción */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Aplica la fuente Poppins a este título */}
                    <h1
                        className={`${poppins.className} text-4xl md:text-5xl font-bold text-white`}
                    >
                        Jesus Ruiz
                    </h1>
                    <p className="text-xl md:text-1xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        System Engineer | Front end | App Developer
                    </p>
                </motion.div>

                {/* Sección de Contacto */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="group relative">
                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <FaEnvelope className="shrink-0" />
                            <span className="border-b border-transparent group-hover:border-white transition-all">
                                {email}
                            </span>
                        </button>
                        <div
                            className={cn(
                                "absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-secondary transition-opacity duration-300",
                                isCopied ? "opacity-100" : "opacity-0"
                            )}
                        >
                            ✓ Copiado al portapapeles
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://www.linkedin.com/in/jhonatan-jesus-napanga-ruiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-2xl text-gray-300 group-hover:text-secondary transition-colors" />
                        </a>
                        <a
                            href="https://github.com/Jenaru0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-2xl text-gray-300 group-hover:text-secondary transition-colors" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Flecha de Scroll */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, ease: "easeOut" }}
                className="absolute bottom-8 transform -translate-x-1/2 z-50 flex justify-center"
            >
                <button
                    onClick={() =>
                        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="animate-bounce p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    aria-label="Desplazarse hacia abajo"
                >
                    <FaArrowDown className="text-2xl text-gray-300" />
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
