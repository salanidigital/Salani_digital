import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const SUPPORTED = ["en", "pl", "hi", "nl"];
export const DEFAULT_LANG = "en";

/*
  English is ALWAYS the default language.

  Language is NOT detected from:
  - timezone
  - browser language
  - country/location

  A different language is used only if the user manually
  selected it previously and it is saved in localStorage.
*/
export function detectLang() {
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  /*
    On mount:
    1. Check if the user previously selected a language.
    2. If valid, use that language.
    3. Otherwise, use English.
  */
  useEffect(() => {
    const saved = localStorage.getItem("salani-lang");

    if (saved && SUPPORTED.includes(saved)) {
      setLang(saved);
    } else {
      setLang(DEFAULT_LANG);
    }
  }, []);

  /*
    Update <html lang> and save the user's selection.
  */
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("salani-lang", lang);
  }, [lang]);

  /*
    Usage:
      t("hero.line1")

    Gets the translated value for the selected language.

    If the translation is missing, English is used as fallback.
  */
  const t = (path) => {
    const keys = path.split(".");
    let node = translations[lang];

    for (const key of keys) {
      if (node == null) break;
      node = node[key];
    }

    // Fallback to English if translation is missing
    if (node == null) {
      let fallback = translations[DEFAULT_LANG];

      for (const key of keys) {
        if (fallback == null) break;
        fallback = fallback[key];
      }

      return fallback ?? path;
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

  if (!ctx) {
    throw new Error("useLang must be used inside <LanguageProvider>");
  }

  return ctx;
}
