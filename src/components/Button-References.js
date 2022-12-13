import React from "react";

export default ButtonReferences = props => {

  const id = props.id

  return (
    <>
      <a 
        className="text-decoration-none ms-2 fs-6 fw-normal text-info" 
        data-bs-toggle="collapse" 
        href={`#collapse-${id}`} 
        role="button" 
        aria-expanded="false" 
        aria-controls={`#collapse-${id}`} 
      >
        References
      </a>
    </>
  )
}