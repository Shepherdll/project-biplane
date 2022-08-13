import React from 'react'

export default function About() {
  return (
    <div class="about center">
            <h1>Compare planes <span class="about__name">easily.</span></h1>
            <p class="about__desc">
            Compare planes side-by-side.
            </p>

            <div class="about__contact center">

            <a
                href="https://github.com/rajshekhar26"
                aria-label="github"
                class="link link--icon"
            >
                <i aria-hidden="true" class="fab fa-github"></i>
            </a>

            <a
                href="https://linkedin.com/in/rajshekhar26"
                aria-label="linkedin"
                class="link link--icon"
            >
                <i aria-hidden="true" class="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
  )
}
