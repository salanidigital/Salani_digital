import { useEffect, useState } from "react";
import { heroImages } from "../data/site";
import { useLang } from "../i18n/LanguageProvider";

import "@fontsource/handjet";

export default function Hero() {
  const { t } = useLang();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

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

        <h1
          className="hero-main-text"
          style={{
            fontFamily: "'Handjet', sans-serif",
            fontWeight: 600,
          }}
        >
          {t("hero.line1a") && (
            <>
              {t("hero.line1a")}{" "}
            </>
          )}

          <span
            className="hero-highlight"
            style={{
              fontFamily: "'Handjet', sans-serif",
              fontWeight: 700,
            }}
          >
            {t("hero.google")}
          </span>{" "}

          {t("hero.line1b")}{" "}

          <span
            className="hero-highlight"
            style={{
              fontFamily: "'Handjet', sans-serif",
              fontWeight: 700,
            }}
          >
            {t("hero.chatgpt")}
          </span>

          {t("hero.line1c")}
        </h1>

        <div className="actions">
          <a href="#contact" className="btn primary">
            {t("hero.ctaPrimary")} <b>↗</b>
          </a>

          <a href="#technologies" className="btn ghost">
            {t("hero.ctaSecondary")} <b>↗</b>
          </a>
        </div>

      </div>

    </section>
  );
}