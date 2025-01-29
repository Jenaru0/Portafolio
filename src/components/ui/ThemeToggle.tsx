// src/components/ui/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const htmlElement = document.documentElement;
    
    setIsDark(savedTheme === 'dark');
    htmlElement.setAttribute('data-theme', savedTheme);
    htmlElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    const htmlElement = document.documentElement;
    
    localStorage.setItem('theme', newTheme);
    htmlElement.setAttribute('data-theme', newTheme);
    htmlElement.classList.toggle('dark', !isDark);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost"
      aria-label="Toggle theme"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}