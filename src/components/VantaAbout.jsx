import { useLang } from "../i18n/LanguageProvider";

export default function VantaAbout() {
    const { t } = useLang();

    return ( <
            section className = "about-vanta"
            id = "about-vanta" >
            <
            div className = "about-vanta-inner" >
            <
            p className = "eyebrow" > #1</p>



        <h2>{t("vanta.heading")}</h2>

      </div>

    </section>

  );

}