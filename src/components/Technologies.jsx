
import { useEffect, useState } from "react";
import "../styles/technologies.css";

import technologies from "../data/technologies";
import TechnologyCard from "./TechnologyCard";

export default function Technologies() {
  const phrases = ["SEO", "SMM", "ASO", "Google Ads","Email Marketing","Google Analytics","Influencer Marketing","Digital PR","Content Production"];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentPhrase.slice(0, displayText.length + 1)
        );
      }, 100);
    }

    else if (
      !isDeleting &&
      displayText.length === currentPhrase.length
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    }

    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentPhrase.slice(0, displayText.length - 1)
        );
      }, 60);
    }

    else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex(
          (current) => (current + 1) % phrases.length
        );
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="tech section" id="technologies">

      <div className="section-head reveal">

        <p className="eyebrow dark">
         <b>TECHNOLOGY</b> 
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

