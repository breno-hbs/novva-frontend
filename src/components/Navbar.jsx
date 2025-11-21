import React from "react";
import "./../styles/Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LogoNovva from "../assets/img/Novva_logo.png";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <div className="navbar-logo">
        <img
          src={LogoNovva}
          alt="NOVVA Logo"
          className="logo-img"
        />
      </div>

      <div
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </nav>
  );
}
