import { useState } from "react";
import { profile } from "../../data/profile";
import Contact from "../Contact/Contact";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <a className="header__brand" href="#home" onClick={closeMenu}>
        {profile.name}
      </a>

      <nav className="header__nav" aria-label="Main navigation">
        <a className="header__link" href="#home">
          Home
        </a>
        <a className="header__link" href="#skills">
          Skills
        </a>
        <a className="header__link" href="#projects">
          Projects
        </a>
        <a className="header__link" href="#contact">
          Contact
        </a>
      </nav>

      <button
        className={`header__menu-button ${
          isOpen ? "header__menu-button_open" : ""
        }`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="header-mobile-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="header__menu-line" />
        <span className="header__menu-line" />
        <span className="header__menu-line" />
      </button>

      {isOpen && (
        <div className="header__mobile-menu" id="header-mobile-menu">
          <nav className="header__mobile-nav" aria-label="Mobile navigation">
            <a className="header__mobile-link" href="#home" onClick={closeMenu}>
              Home
            </a>
            <a
              className="header__mobile-link"
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              className="header__mobile-link"
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              className="header__mobile-link"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>

          <Contact />
        </div>
      )}
    </header>
  );
}
