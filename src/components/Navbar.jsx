import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../i18n/LanguageProvider";

const LANGS = {
  en: { label: "Global", short: "EN" },
  pl: { label: "Poland", short: "PL" },
  hi: { label: "India", short: "HI" },
  nl: { label: "Nederlands", short: "NL" },
};

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  /* =========================================================
     SCROLL
     ========================================================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================================================
     COMPUTE DROPDOWN POSITION FROM BUTTON
     ========================================================= */
  const updatePos = () => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const menuWidth = 175;

    // left aligned by default; if it overflows right edge, right-align
    let left = r.left;
    if (left + menuWidth > window.innerWidth - 12) {
      left = Math.max(12, r.right - menuWidth);
    }

    setPos({
      top: r.bottom + 10,
      left,
    });
  };

  /* =========================================================
     OPEN / CLOSE HANDLERS
     ========================================================= */
  const toggleLang = () => {
    if (!langOpen) updatePos();
    setLangOpen((v) => !v);
  };

  useEffect(() => {
    if (!langOpen) return;

    updatePos();

    const onClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setLangOpen(false);
      }
    };
    const onEsc = (e) => e.key === "Escape" && setLangOpen(false);
    const onResize = () => updatePos();

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, [langOpen]);

  const closeAll = () => {
    setOpen(false);
    setLangOpen(false);
  };

  /* =========================================================
     DROPDOWN — rendered via Portal on <body>
     ========================================================= */
  const dropdown = langOpen
    ? createPortal(
        <div
          ref={menuRef}
          className="lang-menu open lang-menu-portal"
          role="menu"
          style={{
            position: "fixed",
            top: `${pos.top}px`,
            left: `${pos.left}px`,
            right: "auto",
            bottom: "auto",
            width: "175px",
            minWidth: "175px",
            maxWidth: "calc(100vw - 24px)",
            zIndex: 99999,
          }}
        >
          {Object.entries(LANGS).map(([code, { label, short }]) => (
            <button
              key={code}
              type="button"
              role="menuitem"
              className={lang === code ? "active" : ""}
              onClick={() => {
                setLang(code);
                setLangOpen(false);
              }}
            >
              <span>{label}</span>
              <em>{short}</em>
            </button>
          ))}
        </div>,
        document.body
      )
    : null;

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>

      {/* LEFT GROUP — LOGO + GLOBE */}
      <div className="nav-left">

        <a className="brand" href="#home" onClick={closeAll}>
          <img
            src="https://raw.githubusercontent.com/salanidigital/Salani_digital/main/src/public/Footer100.png"
            alt="Salani Digital"
            className="nav-logo"
          />
        </a>

        {/* GLOBE BUTTON */}
        <button
          ref={btnRef}
          type="button"
          className="lang-btn"
          aria-label="Change language"
          aria-expanded={langOpen}
          aria-haspopup="menu"
          onClick={toggleLang}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
          </svg>
          <span className="lang-short">{LANGS[lang].short}</span>
        </button>

        {/* Portal-rendered dropdown */}
        {dropdown}
      </div>

      {/* HAMBURGER */}
      <button
        className="hamb"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v);
          setLangOpen(false);
        }}
      >
        <i />
        <i />
        <i />
      </button>

      {/* LINKS */}
      <div className={`links ${open ? "open" : ""}`}>
        <a href="#home" onClick={closeAll}>{t("nav.home")}</a>
        <a href="#about" onClick={closeAll}>{t("nav.about")}</a>
        <a href="#portfolio" onClick={closeAll}>{t("nav.work")}</a>
        <a className="nav-cta" href="#contact" onClick={closeAll}>
          {t("nav.contact")} <b>↗</b>
        </a>
      </div>

    </nav>
  );
}