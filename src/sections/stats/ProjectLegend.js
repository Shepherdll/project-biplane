import React from 'react'

export default function ProjectLegend(props) {
  const value = props.value;

  return (
    <div className="project_legend" style={{ padding: "5px" }}>
      <h3>{ value }</h3>
    </div>
  )
}
