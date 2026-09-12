import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

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
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Brands />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
