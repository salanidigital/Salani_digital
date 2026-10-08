import { useLang } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <a className="brand" href="#home" aria-label="Salani Digital">
        <img
          src="https://raw.githubusercontent.com/salanidigital/Salani_digital/main/src/public/Footer.png"
          alt="Salani Digital"
          className="footer-logo"
        />
      </a>

      <div className="footer-credit">
        <span className="built-by">
          {t("footer.builtBy")}{" "}
          <a
            href="https://shreyansh-03.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            <strong>Shreyansh Shikhar Srivastava</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}