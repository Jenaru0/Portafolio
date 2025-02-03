// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Portafolio de Jhonatan Jesus Napanga Ruiz",
    description: "Descubre mis proyectos y habilidades como desarrollador.",
    keywords: "portafolio, desarrollo web, React, Next.js, habilidades",
    authors: [{ name: "Jhonatan Jesus Napanga Ruiz" }],
    openGraph: {
        title: "Portafolio de Jhonatan Jesus Napanga Ruiz",
        description: "Explora mis proyectos y habilidades en desarrollo web.",
        url: "https://tudominio.dev", // Actualiza a tu dominio de producción
        siteName: "Portafolio de Jhonatan Jesus Napanga Ruiz",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Portafolio de Jhonatan Jesus Napanga Ruiz",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    metadataBase: new URL("https://tudominio.dev"), // Actualiza aquí también
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-dark text-light font-sans">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
