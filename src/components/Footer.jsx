export default function Footer() {
  return (
    <footer>
      {/* S.Digital */}
      <a className="brand" href="#home" aria-label="S.Digital">
        <span className="brand-mark">S</span>
        <span>
          Salani<span>Digital</span>
        </span>
      </a>

      {/* Developer Credit */}
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