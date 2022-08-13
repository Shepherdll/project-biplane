import React from 'react'

export default function Header() {
  return (
    <header className="header center">
    <h3>
        <a href="https://rajshekhar26.github.io/cleanfolio-minimal" className="link">
            WT GURU
        </a>
    </h3>

    <nav className="nav center">
      <ul className="nav__list center">
        <li className="nav__list-item">
          <a className="link link--nav" href="#projects">Compare</a>
        </li>
        <li className="nav__list-item">
          <a className="link link--nav" href="#skills">Skills</a>
        </li>
        <li className="nav__list-item">
          <a className="link link--nav" href="#contact">Contact</a>
        </li>
      </ul>

      <button type="button" aria-label="toggle theme" className="btn btn--icon">
        <i aria-hidden="true" id="btn-theme" className="fas fa-moon"></i>
      </button>

      <button
        type="button"
        aria-label="toggle navigation"
        className="btn btn--icon nav__hamburger"
      >
        <i aria-hidden="true" className="fas fa-bars"></i>
      </button>
    </nav>
  </header>
  )
}
