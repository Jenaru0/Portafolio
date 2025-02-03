// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-4xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Contáctame
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    Si te interesa trabajar conmigo o tienes alguna pregunta, ¡no dudes en
                    contactarme!
                </motion.p>
                <div className="flex justify-center gap-8">
                    <a
                        href="mailto:jhonatanjesusnapangaruiz@gmail.com"
                        className="text-gray-300 hover:text-secondary transition-colors duration-300"
                        aria-label="Email"
                    >
                        <FaEnvelope size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jhonatan-jesus-napanga-ruiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-secondary transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://github.com/Jenaru0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-secondary transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
