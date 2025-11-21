import React, { useContext } from "react";
import "../styles/Footer.css";
import LogoNovva from "../assets/img/Novva_logo.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme === "dark" ? "dark" : ""}`}>
      <div className="footer-content">

        <div className="footer-logo">
          <img src={LogoNovva} alt="NOVVA Logo" className="footer-logo-img" />
        </div>

        <p className="footer-text">© 2025 NOVVA – Todos os direitos reservados</p>


      </div>
    </footer>
  );
}
