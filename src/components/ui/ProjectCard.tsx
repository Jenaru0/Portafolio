"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    repoLink: string;
    liveDemo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    repoLink,
    liveDemo,
}) => {
    return (
        <motion.div
            className="bg-secondary text-white rounded-lg shadow-lg p-4 flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-primary text-sm px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex justify-between mt-auto">
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-sm px-4 py-2 rounded hover:bg-accent/90 transition-colors"
                >
                    Repositorio
                </a>
                {liveDemo && (
                    <a
                        href={liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-sm px-4 py-2 rounded hover:bg-secondary/90 transition-colors"
                    >
                        Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
