import { useEffect, useState } from "react";
import { heroImages } from "../data/site";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % heroImages.length), 5200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-media">
        {heroImages.map((src, i) => (
          <img key={src} className={i === index ? "active" : ""} src={src}
            alt="Creative digital marketing team at work" loading={i ? "lazy" : "eager"} />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-grid" />
      <div className="hero-content reveal">
        <p className="eyebrow">SALANI DIGITAL <span>•</span> DIGITAL GROWTH STUDIO</p>
        <h1>Turn attention<br /><em>into growth.</em></h1>
        <p className="hero-copy">Strategy, creative and performance marketing built to move brands forward — with clarity, consistency and measurable intent.</p>
        <div className="actions">
          <a className="btn primary" href="#contact">Let’s Grow Your Brand <span>↗</span></a>
          <a className="btn ghost" href="#portfolio">View Our Work <span>↓</span></a>
        </div>
      </div>
      <div className="hero-meta">
        <span>SCROLL TO EXPLORE</span><span>0{index + 1} / 0{heroImages.length}</span>
      </div>
    </section>
  );
}
