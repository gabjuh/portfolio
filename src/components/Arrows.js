import React from "react";

export default Arrows = props => {
  return (
    <>
      <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}Controls`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}Controls`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>    
  )
}