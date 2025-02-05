// components/Header.tsx
"use client";

import { useState } from "react";

const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "portfolio", label: "Portafolio" },
    { id: "contact", label: "Contacto" },
];

const Header = () => {
    const [active, setActive] = useState("hero");

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-sm px-6 py-4 flex justify-center">
            <nav>
                <ul className="flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleClick(item.id)}
                                className={`text-base transition-colors duration-300 hover:text-secondary ${
                                    active === item.id ? "text-secondary" : "text-gray-300"
                                }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
