import React from 'react'

export default function ProjectStat(props) {
  const value = props.value;

  return (
    <div className="project_stat" style={{ background: "#dedede"}}>
      <p className="project__description" style={{ color: props.color, padding: "5px"  }}>
        { value }
      </p>
    </div>
  )
}
