import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>Salani<span>Digital</span></span>
      </a>
      <button className="hamb" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        <i /><i /><i />
      </button>
      <div className={`links ${open ? "open" : ""}`}>
        <a href="#home" onClick={close}>Home</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#portfolio" onClick={close}>Portfolio</a>
        <a className="nav-cta" href="#contact" onClick={close}>Contact Us <b>↗</b></a>
      </div>
    </nav>
  );
}
