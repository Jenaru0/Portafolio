import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Jhonatan Jesus Napanga Ruiz",
  description: "Descubre mis proyectos y habilidades como desarrollador.",
  keywords: "portafolio, desarrollo web, React, Next.js, habilidades",
  authors: [{ name: "Jhonatan Jesus Napanga Ruiz" }],
  openGraph: {
    title: "Portafolio de Jhonatan Jesus Napanga Ruiz",
    description: "Explora mis proyectos y habilidades en desarrollo web.",
    url: "https://localhost:3000",
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
  metadataBase: new URL("http://localhost:3000"), // Agrega esta línea
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es"
      className="
        h-screen
        snap-y
        snap-mandatory
        scroll-smooth
        scroll-pt-20   /* Para desplazar el inicio si tienes un header fijo */
      ">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {/** AQUÍ sin <main className='container'> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}