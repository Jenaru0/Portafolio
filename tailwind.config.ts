import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: 'class', // Habilitamos dark mode manual
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: '#0D1117', // Azul grisáceo oscuro para fondo
        secondary: '#1F6FEB', // Azul vibrante profesional
        accent: '#8B949E', // Gris neutro
        text: '#C9D1D9', // Blanco suave para texto
        muted: '#6E7681', // Gris claro para texto secundario
        background: "var(--background)", // Fondo adaptable a dark mode
        foreground: "var(--foreground)", // Texto adaptable a dark mode
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // Desactivamos temas predefinidos de DaisyUI
    darkTheme: "dark", // Forzamos coincidencia con nuestro sistema
    base: true,
    styled: true,
  },
} satisfies Config;
