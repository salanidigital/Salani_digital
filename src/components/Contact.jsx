import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function submit(event) {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");

    const form = event.currentTarget;

    const endpoint =
      import.meta.env.VITE_FORMSPREE_ENDPOINT ||
      "https://formspree.io/f/xeaqwoje";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }

    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="contact section"
    >

      <div className="contact-inner">

        <div className="contact-copy reveal">

          <p className="eyebrow">
            LET’S TALK
          </p>

        <h2>
    <span style={{ color: "#c0070a" }}>You</span>
    <br />
    made <em>it!</em>
</h2>

          <p>
            
          </p>

          <div className="socials">

            <a
              href="https://www.facebook.com/salanidigitalofficial"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>

            <a
              href="https://www.instagram.com/salanidigital"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/company/salanidigital"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
              href="mailto:asksalanidigital@outlook.com"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope" />
            </a>

          </div>

        </div>

        <form
          className="contact-form reveal"
          onSubmit={submit}
        >

          <label>
            Name*
            <input
              name="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@"
            />
          </label>

          <label>
            Phone Number*
            <input
              type="tel"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              pattern="[0-9+()\\-\\s]{7,20}"
              placeholder="+91 ***** *****"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us a little about the project…"
            />
          </label>

          <button
            className="btn primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Sending…"
              : "Send Message"}

            <span>↗</span>
          </button>

          {status === "success" && (
            <p className="form-msg success">
              Message sent. We’ll be in touch.
            </p>
          )}

          {status === "error" && (
            <p className="form-msg error">
              Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}