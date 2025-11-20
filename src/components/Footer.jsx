
import "../styles/Footer.css";
import LogoNovva from "../assets/img/Novva_logo.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">

        <div className="footer-logo">
          <img src={LogoNovva} alt="NOVVA Logo" className="footer-logo-img" />
        </div>

        <p className="footer-text">© 2025 NOVVA – Todos os direitos reservados</p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>

      </div>
    </footer>
  );
}
