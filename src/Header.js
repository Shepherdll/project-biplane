import React from 'react'

export default function Header() {
  return (
    <header class="header center">
    <h3>
        <a href="https://rajshekhar26.github.io/cleanfolio-minimal" class="link">
            WT GURU
        </a>
    </h3>

    <nav class="nav center">
      <ul class="nav__list center">
        <li class="nav__list-item">
          <a class="link link--nav" href="#projects">Compare</a>
        </li>
        <li class="nav__list-item">
          <a class="link link--nav" href="#skills">Skills</a>
        </li>
        <li class="nav__list-item">
          <a class="link link--nav" href="#contact">Contact</a>
        </li>
      </ul>

      <button type="button" aria-label="toggle theme" class="btn btn--icon">
        <i aria-hidden="true" id="btn-theme" class="fas fa-moon"></i>
      </button>

      <button
        type="button"
        aria-label="toggle navigation"
        class="btn btn--icon nav__hamburger"
      >
        <i aria-hidden="true" class="fas fa-bars"></i>
      </button>
    </nav>
  </header>
  )
}
