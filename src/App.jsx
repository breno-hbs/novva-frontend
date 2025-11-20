import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // se já existir
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar onToggleTheme={toggleTheme} />
      <Home />
    </div>
  );
}

