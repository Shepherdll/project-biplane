import React from 'react'

export default function ProjectLegend(props) {
  const value = props.value;

  return (
    <div class="project_legend">
      <h3>{ value }</h3>
    </div>
  )
}
