import VantaAbout from "./VantaAbout";

export default function About() {
  return (
    <section id="about">
      <VantaAbout />
      <div className="about-body">
        <div className="about-statement reveal">
          <span className="big-number">01</span>
          <h3>Make the brand<br /><em>matter.</em></h3>
          <div className="line" />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow dark">WHO WE ARE</p>
          <p>Salani Digital is a digital marketing studio focused on building brands that are easier to notice, understand and choose.</p>
          <p>We bring creative thinking and performance discipline into the same room — shaping social, content, paid media and digital experiences around a clear business goal.</p>
          <p className="muted">No inflated promises. No vanity metrics. Just thoughtful work, tested ideas and a digital presence designed to keep getting better.</p>
        </div>
      </div>
    </section>
  );
}
