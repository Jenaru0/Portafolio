"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
    id: string; // ID único para anclar la sección
    children: React.ReactNode; // Contenido dentro de la sección
    className?: string; // Clases adicionales para personalizar estilos
    backgroundClass?: string; // Clase opcional para el fondo
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    id,
    children,
    className = "",
    backgroundClass = "",
}) => {
    return (
        <motion.section
            id={id}
            className={`min-h-screen flex flex-col justify-center items-center px-6 ${className} ${backgroundClass}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
