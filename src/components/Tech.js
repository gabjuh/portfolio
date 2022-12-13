import React from "react";

export default Tech = props => {
  return (
    <>
      {props.tech.map((t, i) => {
        return (
          <span className="me-2 px-2 mb-1 bg-info text-white rounded-pill whitespace-nowrap" key={`tech_${i}`}>{t}</span>
        )
      })}
    </>
  )
}