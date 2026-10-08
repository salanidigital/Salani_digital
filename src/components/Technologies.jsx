import { useEffect, useState } from "react";

import "../styles/technologies.css";

import technologies from "../data/technologies";

import TechnologyCard from "./TechnologyCard";

import { useLang } from "../i18n/LanguageProvider";

export default function Technologies() {
  const { t, lang } = useLang();

  const phrases = t("tech.phrases");

  /* Split by grapheme so Devanagari / accented text types cleanly */
  const chars = (s) =>
    typeof Intl !== "undefined" && Intl.Segmenter
      ? Array.from(
          new Intl.Segmenter(lang, { granularity: "grapheme" }).segment(s),
          (x) => x.segment
        )
      : Array.from(s);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Restart the typing animation when the language changes */
  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setPhraseIndex(0);
  }, [lang]);

  useEffect(() => {
    const currentPhrase = chars(phrases[phraseIndex]);
    const shown = chars(displayText).length;

    let timeout;

    if (!isDeleting && shown < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentPhrase.slice(0, shown + 1).join("")
        );
      }, 100);
    } else if (
      !isDeleting &&
      shown === currentPhrase.length
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && shown > 0) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentPhrase.slice(0, shown - 1).join("")
        );
      }, 60);
    } else if (isDeleting && shown === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex(
          (current) => (current + 1) % phrases.length
        );
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, lang, phrases]);

  return (
    <section className="tech section" id="technologies">
      <div className="section-head reveal">
        <p className="eyebrow dark">
          <b>{t("tech.eyebrow")}</b>
        </p>

        <h2 className="tech-typing-heading">
          <span className="typing-text">
            {displayText}
            <span className="typing-cursor">|</span>
          </span>
        </h2>
      </div>

      <div className="tech-grid">
        {technologies.map((tech, i) => (
          <TechnologyCard
            key={tech.name}
            tech={tech}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}