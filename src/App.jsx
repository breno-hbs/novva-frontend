import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
