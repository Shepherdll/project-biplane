import React from 'react'
import Header from '../header/Header'
import About from '../sections/about/About'
import StatHead from '../sections/stats/StatHead'
import Stats from '../sections/stats/Stats'

export default function Body() {
  return (
    <body className="light" id="top">
        <Header />
        <main>
            <About />
            <StatHead />
            <Stats />
            <section className="section skills" id="skills">
                <h2 className="section__title">Skills</h2>
                <ul className="skills__list">
                <li className="skills__list-item btn btn--plain">HTML</li>
                <li className="skills__list-item btn btn--plain">CSS</li>
                <li className="skills__list-item btn btn--plain">SCSS</li>
                <li className="skills__list-item btn btn--plain">JavaScript</li>
                <li className="skills__list-item btn btn--plain">TypeScript</li>
                <li className="skills__list-item btn btn--plain">React</li>
                <li className="skills__list-item btn btn--plain">Redux</li>
                <li className="skills__list-item btn btn--plain">Git</li>
                <li className="skills__list-item btn btn--plain">Material UI</li>
                <li className="skills__list-item btn btn--plain">Jest</li>
                <li className="skills__list-item btn btn--plain">Enzyme</li>
                <li className="skills__list-item btn btn--plain">CI/CD</li>
                </ul>
            </section>

            <section className="section contact center" id="contact">
                <h2 className="section__title">Contact</h2>
                <a href="mailto:rjshekhar.official@gmail.com">
                <span className="btn btn--outline">Email me</span>
                </a>
            </section>
        </main>

        <footer className="footer">
            <p>
                Website Created by
            </p>
            <a
                href="https://github.com/deuxailes"
                className="link footer__link"
            >
                Maximilian Lambert
            </a>
            <br/>
            <a
                href="https://github.com/Shepherdll"
                className="link footer__link"
            >
                Peter Shepherd
            </a>
            <br/>
            <p>
                Base Website Created by
            </p>
            <a
                href="https://github.com/rajshekhar26/cleanfolio-minimal"
                className="link footer__link"
            >
                Raj Shekhar
            </a>
        </footer>

        <div className="scroll-container">
            <div className="scroll-top">
            <a aria-label="Scroll up" href="#top">
                <i aria-hidden="true" className="fas fa-arrow-up"></i>
            </a>
            </div>
        </div>
        <script src="https://unpkg.com/react@18/umd/react.development.js" ></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="./script.js"></script>
    </body>
  )
}
