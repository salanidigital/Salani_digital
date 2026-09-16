export default function Footer() {
  return (
    <footer>
      <a className="brand" href="#home" aria-label="Salani Digital">
        <img
          src="src/public/Footer.png"
          alt="Salani Digital"
          className="footer-logo"
        />
      </a>

      <div className="footer-credit">
        <span className="built-by">
          Built by{" "}
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