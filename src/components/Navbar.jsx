import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => {
    setOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>

      {/* ================================
          SALANI DIGITAL LOGO
      ================================= */}
      <a className="brand" href="#home" onClick={close}>
        <img
          src="https://raw.githubusercontent.com/salanidigital/Salani_digital/main/src/public/Footer100.png"
          alt="Salani Digital"
          className="nav-logo"
        />
      </a>

      {/* ================================
          MOBILE MENU BUTTON
      ================================= */}
      <button
        className="hamb"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i />
        <i />
        <i />
      </button>

      {/* ================================
          NAVIGATION LINKS
      ================================= */}
      <div className={`links ${open ? "open" : ""}`}>

        <a href="#home" onClick={close}>
          Home
        </a>

        <a href="#about" onClick={close}>
          About
        </a>

        <a href="#work" onClick={close}>
          Work
        </a>

        <a
          className="nav-cta"
          href="#contact"
          onClick={close}
        >
          Contact Us <b>↗</b>
        </a>

      </div>
    </nav>
  );
}
