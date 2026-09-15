
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/brands.css";

import logo1 from "../public/1.png";
import logo2 from "../public/2.png";
import logo3 from "../public/3.png";
import logo4 from "../public/4.png";
import logo5 from "../public/5.png";
import logo6 from "../public/6.png";

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { id: 1, image: logo1, label: "Client 1" },
  { id: 2, image: logo2, label: "Client 2" },
  { id: 3, image: logo3, label: "Client 3" },
  { id: 4, image: logo4, label: "Client 4" },
  { id: 5, image: logo5, label: "Client 5" },
  { id: 6, image: logo6, label: "Client 6" },
];

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
        <p className="eyebrow dark">
          OUR CLIENTS
        </p>

       <h2>
 Success we’ve built{" "}
  <em>together.</em>
</h2>
      </div>

      <div className="brands-grid">
        {clientLogos.map((brand, index) => (
          <div
            className="brand-card"
            key={brand.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
          >
            <div className="brand-logo-wrap">
              <img
                src={brand.image}
                alt={`${brand.label} logo`}
                className="brand-logo"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
