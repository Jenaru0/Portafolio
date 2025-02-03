"use client";

import SectionWrapper from "./ui/SectionWrapper";

const Contact = () => (
    <SectionWrapper id="contact" className="h-screen snap-start bg-gradient-contact">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>

        <p className="text-lg mb-6">
            ¿Quieres trabajar conmigo? Puedes contactarme a través de mis redes o enviarme un correo.
        </p>
        <div className="flex gap-6">
            <a
                href="mailto:tuemail@example.com"
                className="px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
            >
                Enviar Correo
            </a>

            <button
                onClick={() => navigator.clipboard.writeText("tuemail@example.com")}
                className="px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
            >
                Copiar Correo
            </button>

            <a
                href="https://www.linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
            >
                LinkedIn
            </a>

        </div>

    </SectionWrapper>
);

export default Contact;