import React from 'react'
import Header from './Header'
import About from './About'
import StatHead from './StatHead'
import Stats from './Stats'

export default function Background() {
  return (
    <body class="light" id="top">
        <Header />
        <main>
            <About />
            <StatHead />
            <Stats />
            <section class="section skills" id="skills">
                <h2 class="section__title">Skills</h2>
                <ul class="skills__list">
                <li class="skills__list-item btn btn--plain">HTML</li>
                <li class="skills__list-item btn btn--plain">CSS</li>
                <li class="skills__list-item btn btn--plain">SCSS</li>
                <li class="skills__list-item btn btn--plain">JavaScript</li>
                <li class="skills__list-item btn btn--plain">TypeScript</li>
                <li class="skills__list-item btn btn--plain">React</li>
                <li class="skills__list-item btn btn--plain">Redux</li>
                <li class="skills__list-item btn btn--plain">Git</li>
                <li class="skills__list-item btn btn--plain">Material UI</li>
                <li class="skills__list-item btn btn--plain">Jest</li>
                <li class="skills__list-item btn btn--plain">Enzyme</li>
                <li class="skills__list-item btn btn--plain">CI/CD</li>
                </ul>
            </section>

            <section class="section contact center" id="contact">
                <h2 class="section__title">Contact</h2>
                <a href="mailto:rjshekhar.official@gmail.com">
                <span class="btn btn--outline">Email me</span>
                </a>
            </section>
        </main>

        <footer class="footer">
            <p>
                Website Created by
            </p>
            <a
                href="https://github.com/deuxailes"
                class="link footer__link"
            >
                Maximilian Lambert
            </a>
            <br/>
            <a
                href="https://github.com/Shepherdll"
                class="link footer__link"
            >
                Peter Shepherd
            </a>
            <br/>
            <p>
                Base Website Created by
            </p>
            <a
                href="https://github.com/rajshekhar26/cleanfolio-minimal"
                class="link footer__link"
            >
                Raj Shekhar
            </a>
        </footer>

        <div class="scroll-container">
            <div class="scroll-top">
            <a aria-label="Scroll up" href="#top">
                <i aria-hidden="true" class="fas fa-arrow-up"></i>
            </a>
            </div>
        </div>
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        <script src="./script.js"></script>
    </body>
  )
}
