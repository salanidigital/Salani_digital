import VantaAbout from "./VantaAbout";

export default function About() {
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
            Salani Digital helps Indian and international           

            businesses grow through online marketing            

            strategies.            
 Salani Digital is a professional            

            digital marketing             
agency helping businesses            

            grow online with result-driven marketing
            strategies.
          </p>

        </div>

      </div>

    </section>
  );
}