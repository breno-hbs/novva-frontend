
import "./../styles/Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LogoNovva from "../assets/img/Novva_logo.png";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={LogoNovva}
          alt="NOVVA Logo"
          className="logo-img"
        />
        {/* <span>NOVVA</span> */}
      </div>

      <div
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙" : "☀️"}
      </div>
    </nav>
  );
}
