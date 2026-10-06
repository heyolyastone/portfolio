import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>

        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__title">{profile.title}</p>

        <p className="hero__blurb">{profile.blurb}</p>

        <div className="hero__actions">
          <a
            className="hero__button hero__button_type_primary"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="hero__button hero__button_type_secondary"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
