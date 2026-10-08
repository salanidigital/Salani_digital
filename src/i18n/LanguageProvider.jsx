import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const SUPPORTED = ["en", "pl", "hi", "nl"];
export const DEFAULT_LANG = "en";

/* Detect lang from timezone → browser locale → default */
export function detectLang() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

    if (tz === "Europe/Warsaw") return "pl";
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "hi";
    if (tz === "Europe/Amsterdam") return "nl";

    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(nav)) return nav;
  } catch (_) {}
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  /* On mount: read localStorage, else auto-detect */
  useEffect(() => {
    const saved = localStorage.getItem("salani-lang");
    setLang(saved && SUPPORTED.includes(saved) ? saved : detectLang());
  }, []);

  /* Reflect on <html lang> + persist */
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("salani-lang", lang);
  }, [lang]);

  /* t("hero.line1") → translated string */
  const t = (path) => {
    const keys = path.split(".");
    let node = translations[lang];

    for (const k of keys) {
      if (node == null) break;
      node = node[k];
    }

    // fallback to English if missing
    if (node == null) {
      let fb = translations[DEFAULT_LANG];
      for (const k of keys) {
        if (fb == null) break;
        fb = fb[k];
      }
      return fb ?? path;
    }
    return node;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
