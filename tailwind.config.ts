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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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