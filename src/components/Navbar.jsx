import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img
          src="/assets/logo-novva-green.png"
          alt="Novva"
          className="w-32"
        />

        {/* Botão tema */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          🌙
        </button>
      </div>

      {/* Linha separadora verde */}
      <div className="h-[4px] bg-green-400"></div>
    </header>
  );
}
