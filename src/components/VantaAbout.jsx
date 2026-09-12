import { useEffect, useRef } from "react";

export default function VantaAbout() {
  const ref = useRef(null);

  useEffect(() => {
    let effect;
    const load = () => {
      if (window.VANTA && window.THREE && !effect) {
        effect = window.VANTA.WAVES({
          el: ref.current, mouseControls: true, touchControls: true,
          gyroControls: false, minHeight: 200, minWidth: 200,
          scale: 1, scaleMobile: 1, color: 0x7f1d1d,
          shininess: 35, waveHeight: 12, waveSpeed: 0.55, zoom: 0.9
        });
      }
    };

    if (window.VANTA) load();
    else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
      script.onload = load;
      document.head.appendChild(script);
    }
    if (!window.THREE) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      script.onload = load;
      document.head.appendChild(script);
    }

    return () => effect?.destroy();
  }, []);

  return (
    <div ref={ref} id="about-vanta" className="about-vanta">
      <div className="about-vanta-inner">
        <p className="eyebrow">ABOUT SALANI DIGITAL</p>
        <h2>We don’t just market brands.<br /><em>We build their digital presence.</em></h2>
      </div>
    </div>
  );
}
