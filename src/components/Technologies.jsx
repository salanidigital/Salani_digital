import "../styles/technologies.css";
import { useEffect, useState } from "react";
import technologies, { typewriterWords } from "../data/technologies";
import TechnologyCard from "./TechnologyCard";

export default function Technologies() {
  const [word, setWord] = useState(typewriterWords[0]);

  useEffect(() => {
    let wordIndex = 0, charIndex = 0, deleting = false;
    const timer = setInterval(() => {
      const target = typewriterWords[wordIndex];
      if (!deleting) {
        charIndex++;
        setWord(target.slice(0, charIndex));
        if (charIndex >= target.length) deleting = true;
      } else {
        charIndex--;
        setWord(target.slice(0, charIndex));
        if (charIndex <= 0) { deleting = false; wordIndex = (wordIndex + 1) % typewriterWords.length; }
      }
    }, 105);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="tech section" id="technologies">
      <div className="section-head reveal">
        <p className="eyebrow dark">TECHNOLOGY I KNOW</p>
        <h2>We create with <span>{word}<b className="cursor">|</b></span></h2>
        <p>Tools are only useful when they create a better outcome. Our editable capability stack keeps the technology secondary to the strategy.</p>
      </div>
      <div className="tech-grid">
        {technologies.map((tech, i) => <TechnologyCard key={tech.name} tech={tech} index={i} />)}
      </div>
    </section>
  );
}
