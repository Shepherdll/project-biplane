import React from 'react'

export default function ProjectStat(props) {
  const value = props.value;
  const color = props.color;

  return (
    <div class="project_stat">
      <p class="project__description" style={{ color: props.color }}>
        { value }
      </p>
    </div>
  )
}
