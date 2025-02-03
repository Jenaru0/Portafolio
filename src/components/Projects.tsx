"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import SectionWrapper from "./ui/SectionWrapper";

const projects = [
    {
        title: "Sistema de Gestión de Almacén",
        description: "Un sistema para administrar inventarios y ventas.",
        technologies: ["PHP", "MySQL", "Bootstrap"],
        repoLink: "https://github.com/Jenaru0/almacen-system",
        liveDemo: "https://almacen-system-demo.com",
    },
    {
        title: "NaturePOS",
        description: "Sistema de punto de venta para productos naturales.",
        technologies: ["React Native", "Firebase", "Expo"],
        repoLink: "https://github.com/Jenaru0/naturepos",
    },
    {
        title: "Mi Portafolio",
        description: "Portafolio personal con Next.js y TailwindCSS.",
        technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
        repoLink: "https://github.com/Jenaru0/portafolio",
    },
];

const Projects = () => {
    return (
        <SectionWrapper
            id="projects"
            className="h-screen snap-start bg-gradient-projects"
        >
            <h2 className="text-4xl font-bold text-center text-white mb-6">
                Mis Proyectos
            </h2>
            <p className="text-center max-w-xl mx-auto text-white mb-8">
                Aquí puedes encontrar algunos de los proyectos que he desarrollado. ¡Explóralos para conocer más sobre mi trabajo!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
