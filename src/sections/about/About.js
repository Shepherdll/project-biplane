import React from 'react'

export default function About() {
  return (
    <div className="about center">
            <h1>Compare planes <span className="about__name">easily.</span></h1>
            <p className="about__desc">
            Compare planes side-by-side.
            </p>

            <div className="about__contact center">

            <a
                href="https://github.com/rajshekhar26"
                aria-label="github"
                className="link link--icon"
            >
                <i aria-hidden="true" className="fab fa-github"></i>
            </a>

            <a
                href="https://linkedin.com/in/rajshekhar26"
                aria-label="linkedin"
                className="link link--icon"
            >
                <i aria-hidden="true" className="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
  )
}
