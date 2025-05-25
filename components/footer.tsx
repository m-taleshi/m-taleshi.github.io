export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; <span id="current-year"></span> Mansour Taleshi. All rights reserved.
        </p>
        <div className="footer-social-links">
          <a href="mailto:mansour.taleshi@gmail.com" className="social-button" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/m-taleshi" target="_blank" rel="noreferrer" className="social-button" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://x.com/MansourTaleshi" target="_blank" rel="noreferrer" className="social-button" aria-label="X (Twitter)">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/mansour-taleshi-334364117/" target="_blank" rel="noreferrer" className="social-button" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.researchgate.net/profile/Mansour-Taleshi" target="_blank" rel="noreferrer" className="social-button" aria-label="ResearchGate">
            <i className="fa-brands fa-researchgate"></i>
          </a>
          <a href="https://scholar.google.com/citations?user=2DVrFwkAAAAJ&hl=en" target="_blank" rel="noreferrer" className="social-button" aria-label="Google Scholar">
            <i className="fas fa-graduation-cap"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
