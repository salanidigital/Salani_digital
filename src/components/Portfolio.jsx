import { heroImages, projects } from "../data/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">

      {/* ================================
          SECTION HEADER
      ================================= */}
      <div className="section-head split reveal">
        <div>
          <p className="eyebrow dark">WORK</p>

          <h2>
            Work that earns
            <br />
            <em>attention.</em>
          </h2>
        </div>
      </div>


      {/* ================================
          PROJECT GRID
      ================================= */}
      <div className="project-grid">

        {projects.map((project, i) => (

          <article
            className="project reveal"
            key={project.number}
          >

            {/* ================================
                CLICKABLE PROJECT IMAGE
            ================================= */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
              aria-label={`Visit ${project.title} website`}
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
                <p className="tag">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>
              </div>


              {/* Description only if available */}
              {project.desc && (
                <p>
                  {project.desc}
                </p>
              )}


              {/* ================================
                  PROJECT BOTTOM
              ================================= */}
              <div className="project-bottom">

                <span>
                  {project.result}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website ↗
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}