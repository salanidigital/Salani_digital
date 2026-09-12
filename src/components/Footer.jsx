
export default function Footer() {
  return (
    <footer>
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>Salani<span>Digital</span></span>
      </a>

      <p>Digital marketing built for meaningful growth.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-credit">
        <span>
          © {new Date().getFullYear()} Salani Digital. Built for digital growth.
        </span>

        <span className="built-by">
          Built by <strong >@Shreyansh Shikhar Srivastava</strong>
        </span>
      </div>
    </footer>
  );
}

