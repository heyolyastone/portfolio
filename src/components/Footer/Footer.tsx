import Contact from "../Contact/Contact";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__intro">
          <h2 className="footer__title">Let's work together</h2>
          <p className="footer__text">
            Feel free to reach out if you'd like to connect or work together.
          </p>
        </div>

        <Contact />
      </div>
    </footer>
  );
}
