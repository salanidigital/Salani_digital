import { useRef } from "react";

const MAX_TILT = 8;

export default function TechnologyCard({ tech, index }) {
  const ref = useRef(null);

  const move = (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${(-y * MAX_TILT).toFixed(2)}deg) rotateY(${(x * MAX_TILT).toFixed(2)}deg) translateY(-7px)`;
  };

  return (
    <article ref={ref} className="tech-card reveal" style={{ "--delay": `${index * 25}ms` }}
      onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = ""; }}>
      <div className="tech-icon real-icon" aria-hidden="true"><i className={tech.icon} /></div>
      <div>
        <h3>{tech.name}</h3>
        <p>{tech.category}</p>
      </div>
      <span className="arrow">↗</span>
    </article>
  );
}
