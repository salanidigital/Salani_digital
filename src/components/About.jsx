import VantaAbout from "./VantaAbout";

export default function About() {
  return (
    <section id="about">

      <VantaAbout />

      <div className="about-body">

        <div className="about-statement reveal">

          <span className="big-number">
            #1
          </span>

          {/* S.Digital Logo */}
          <div className="about-logo">
            <img
              src="src/public/rest.png"
              alt="S.Digital"
            />
          </div>

          <div className="line" />

        </div>

        <div className="about-copy reveal">

          <p className="eyebrow dark">
            ABOUT US
          </p>

          <p>
            Salani Digital helps Indian and international            <hr></hr>

            businesses grow through online marketing            <hr></hr>

            strategies.            
 Salani Digital is a professional            <hr></hr>

            digital marketing             
agency helping businesses            <hr></hr>

            grow online with result-driven marketing
            strategies.
          </p>

        </div>

      </div>

    </section>
  );
}