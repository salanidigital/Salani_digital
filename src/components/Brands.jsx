import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/brands.css";
import brands from "../data/brands";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean);

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="brands section"
      id="brands"
      ref={sectionRef}
    >
      <div className="section-head reveal">
        <p className="eyebrow dark">COLLABORATION</p>

        <h2>
          Brands we&apos;ve <em>worked with.</em>
        </h2>
      </div>

      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div
            className="brand-card"
            key={brand.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
          >
            <i
              className={brand.icon}
              aria-hidden="true"
            />

            <span>{brand.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}