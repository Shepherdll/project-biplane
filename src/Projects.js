import React from 'react'
import Project from './Project'
import Searchbar from './Searchbar'

export default function Projects() {
  return (
    <section id="projects" class="section projects">
            <div class="projects__grid">
                <Searchbar planeTitle={"Plane 1"}/>
                <Project />
                {/* <div class="project">
                    <h3>Project 2</h3>
                    <p class="project__description">
                    Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                    sapiente debitis labore sed ipsam Mollitia repellat illum quod
                    unde beatae Quis
                    </p>
                    <ul class="project__stack">
                    <li class="project__stack-item">SASS</li>
                    <li class="project__stack-item">TypeScript</li>
                    <li class="project__stack-item">React</li>
                    </ul>

                    <a
                    href="https://github.com"
                    aria-label="source code"
                    class="link link--icon"
                    >
                    <i aria-hidden="true" class="fab fa-github"></i>
                    </a>
                    <a
                    href="https://example.com"
                    aria-label="live preview"
                    class="link link--icon"
                    >
                    <i aria-hidden="true" class="fas fa-external-link-alt"></i>
                    </a>
                </div> */}
            </div>
            <div class="projects__grid">
                <Searchbar planeTitle={"Plane 2"}/>
                <Project />
            </div>
        </section>
  )
}
