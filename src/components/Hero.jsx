import { useEffect, useState } from "react";
import { heroImages } from "../data/site";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      {/* HERO IMAGE SLIDER */}
      <div className="hero-media">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Salani Digital Hero ${index + 1}`}
            className={index === activeImage ? "active" : ""}
          />
        ))}
      </div>

      <div className="hero-shade"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">

       <h1 className="hero-main-text">
  From{" "}
  <span>Google</span> to <span>ChatGPT</span>, We Make Sure Customers Find You Everywhere.
</h1>

        <div className="actions">
          <a href="#contact" className="btn primary">
            Let’s talk! <b>↗</b>
          </a>

          <a href="#technologies" className="btn ghost">
            Technology <b>↗</b>
          </a>
        </div>

      </div>

    </section>
  );
}
