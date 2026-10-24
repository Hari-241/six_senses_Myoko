import './Footer.css';

const LINKS = ['News', 'Newsletter', 'Travel trade', 'Media center', 'Development', 'Careers', 'Gift Cards', 'Terms and conditions', 'Privacy', 'Cookie Policy'];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--logo">
          <DotMark />
          <p className="footer__wordmark">
            SIX SENSES
            <br />
            MYOKO
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Six Senses</p>
          <ul className="footer__links">
            {LINKS.map((label) => (
              <li key={label}>
                <a href="#top">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Get in touch</p>
          <address className="footer__address">
            Six Senses Myoko
            <br />
            Sekikawa, Myoko Kogen
            <br />
            Niigata–Nagano border, Japan
            <br />
            <a href="mailto:reservations-myoko@sixsenses.com">reservations-myoko@sixsenses.com</a>
            <br />
            +81 25 555 0199
          </address>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Find us on</p>
          <div className="footer__socials">
            <SocialIcon label="Facebook" />
            <SocialIcon label="Twitter" />
            <SocialIcon label="TripAdvisor" />
            <SocialIcon label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function DotMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="footer__mark">
      <circle cx="24" cy="10" r="2.6" fill="currentColor" />
      <circle cx="14.5" cy="15.5" r="2.6" fill="currentColor" />
      <circle cx="33.5" cy="15.5" r="2.6" fill="currentColor" />
      <circle cx="10" cy="24" r="2.6" fill="currentColor" />
      <circle cx="24" cy="24" r="2.6" fill="currentColor" />
      <circle cx="38" cy="24" r="2.6" fill="currentColor" />
      <circle cx="14.5" cy="32.5" r="2.6" fill="currentColor" />
      <circle cx="33.5" cy="32.5" r="2.6" fill="currentColor" />
      <circle cx="24" cy="38" r="2.6" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({ label }) {
  return (
    <a href="#top" className="footer__social" aria-label={label}>
      <span>{label[0]}</span>
    </a>
  );
}
