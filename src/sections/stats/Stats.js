import React from 'react'
import ProjectLegend from './ProjectLegend'
import ProjectStat from './ProjectStat'

export default function Stats() {

    const statListCombined2 = [
        {plane1: 4.5, statLegend: "BR (AB)", plane2: 44.5},
        {plane1: 4.5, statLegend: "BR (RB)", plane2: 3334.5}
    ];

    const evalNumber = (num1, num2) => {
        if (num1 < num2)
            return "#ff0000"
        else if (num1 > num2)
            return "#3fc93f"
        else
            return "#000000"
    }
    
    function firstPlaneStatsOne(statListCombined) {
        const children = statListCombined.map((val) => (
            <ProjectStat value={ val.plane1 } color={ evalNumber(val.plane1, val.plane2) }/>
        ));
        return (
            <div className="projects__grid__stats">
                { children }
            </div>
        )
    }
    
    function planeStatLegend(statListCombined) {
        const children = statListCombined.map((val) => (
                <ProjectLegend value={ val.statLegend }/>
            ));
        return (
            <div className="projects__grid__legend">
                { children }
            </div>
        )
    }

    function firstPlaneStatsTwo(statListCombined) {
        const children = statListCombined.map((val) => (
            <ProjectStat value={ val.plane2 } color={ evalNumber(val.plane2, val.plane1) }/>
        ));
        return (
            <div className="projects__grid__stats">
                { children }
            </div>
        )
    }

    return (
        <div className="stats">
            { firstPlaneStatsOne(statListCombined2) }
            { planeStatLegend(statListCombined2) }
            { firstPlaneStatsTwo(statListCombined2) }
        </div>
  )
}
