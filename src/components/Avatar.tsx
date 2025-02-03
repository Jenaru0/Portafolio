"use client"; // Habilita renderizado en el cliente

import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarProps {
  className?: string;
}

// Variants para las animaciones
const avatarVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: -180 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5, transition: { yoyo: Infinity } },
};

const Avatar: React.FC<AvatarProps> = ({ className }) => (
  <motion.div
    className={`rounded-full overflow-hidden w-32 h-32 border-4 border-white shadow-lg cursor-pointer ${className}`}
    variants={avatarVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    transition={{
      duration: 0.8,
      type: "spring",
      stiffness: 300,
    }}
  >
    <Image
      src="/images/jesusavatar.webp"
      alt="Avatar"
      width={128}
      height={128}
      priority
      className="w-full h-full object-cover"
    />
  </motion.div>
);

export default Avatar;