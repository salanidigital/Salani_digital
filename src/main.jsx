import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/globals.css";

import { LanguageProvider } from "./i18n/LanguageProvider";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Brands from "./components/Brands";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <LanguageProvider>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Brands />
        <Portfolio />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </LanguageProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);