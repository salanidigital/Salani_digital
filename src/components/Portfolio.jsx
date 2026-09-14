import { heroImages, projects } from "../data/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="section-head split reveal">
        <div>
          <p className="eyebrow dark">WORK</p>
          <h2>Work that earns<br /><em>attention.</em></h2>
        </div>
      </div>
      <div className="project-grid">
        {projects.map(([number, category, title, desc, result], i) => (
          <article className="project reveal" key={number}>
            <div className="project-image">
              <img src={heroImages[i % heroImages.length]} alt="Portfolio project placeholder" loading="lazy" />
              <span>{number}</span>
            </div>
            <div className="project-info">
              <div><p className="tag">{category}</p><h3>{title}</h3></div>
              <p>{desc}</p>
              <div className="project-bottom"><span>{result}</span><a href="#contact">Discuss project ↗</a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
