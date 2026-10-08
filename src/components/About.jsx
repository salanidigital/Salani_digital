import VantaAbout from "./VantaAbout";
import { useLang } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about">

      <VantaAbout />

      <div className="about-body">

        <div className="about-statement reveal">

          <span className="big-number">
          </span>

          {/* S.Digital Logo */}
          <div className="about-logo">
            <img
              src="https://raw.githubusercontent.com/salanidigital/Salani_digital/main/src/public/Footer900.png"
              alt="S.Digital"
            />
          </div>

        </div>

        <div className="about-copy reveal">

          <p className="eyebrow dark">
            {t("about.eyebrow")}
          </p>

          <p>
            {t("about.paragraph")}
          </p>

        </div>

      </div>

    </section>
  );
}
