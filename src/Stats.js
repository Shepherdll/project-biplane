import React from 'react'
import Project from './Project'
import Searchbar from './Searchbar'
import PlaneImage from './PlaneImage'
import ProjectLegend from './ProjectLegend'
import ProjectStat from './ProjectStat'

export default function Stats() {
    const plane1ABBR = 4.5;
    const plane2ABBR = 10.5;
    const plane1RBBR = 4.5;
    const plane2RBBR = 8.5;

    const evalNumber = (num1, num2) => {
        if (num1 < num2)
            return "#ff0000"
        else if (num1 > num2)
            return "#00FF00"
        else
            return "#000000"
    }

    return (
        <div class="stats">
            <div class="projects__grid__stats">
                <ProjectStat value={ plane1ABBR } color={ evalNumber(plane1ABBR, plane2ABBR) }/>
                <ProjectStat value={ plane1RBBR } color={ evalNumber(plane1RBBR, plane2RBBR) }/>
            </div>
            <div class="projects__grid__legend">
                <ProjectLegend value={ "BR - AB" }/>
                <ProjectLegend value={ "BR - RB" }/>
            </div>
            <div class="projects__grid__stats">
                <ProjectStat value={ plane2ABBR } color={ evalNumber(plane2ABBR, plane1ABBR) }/>
                <ProjectStat value={ plane2RBBR } color={ evalNumber(plane2RBBR, plane1RBBR) }/>
            </div>
        </div>
  )
}
