import { heroImages, projects } from "../data/site";
import { useLang } from "../i18n/LanguageProvider";

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="portfolio section">
      {/* ================================
                SECTION HEADER
          ================================= */}
      <div className="section-head split reveal">
        <div>
          <p className="eyebrow dark">{t("portfolio.eyebrow")}</p>

          <h2>
            {t("portfolio.heading1")}
            <br />
            <em>{t("portfolio.heading2")}</em>
          </h2>
        </div>
      </div>

      {/* ================================
                PROJECT GRID
          ================================= */}
      <div className="project-grid">
        {projects.map((project, i) => (
          <article className="project reveal" key={project.number}>
            {/* ================================
                    CLICKABLE PROJECT IMAGE
                ================================= */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
              aria-label={`${t("portfolio.visitAria")}: ${project.title}`}
            >
              <div className="project-image">
                <img
                  src={heroImages[i % heroImages.length]}
                  alt={`${project.title} project`}
                  loading="lazy"
                />

                <span>{project.number}</span>
              </div>
            </a>

            {/* ================================
                    PROJECT INFO
                ================================= */}
            <div className="project-info">
              <div>
                <p className="tag">{t(`portfolio.projects.${i}`)}</p>

                <h3>{project.title}</h3>
              </div>

              {/* Description only if available */}
              {project.desc && <p>{project.desc}</p>}

              {/* ================================
                      PROJECT BOTTOM
                  ================================= */}
              <div className="project-bottom">
                <span>{t("portfolio.result")}</span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("portfolio.visit")}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}