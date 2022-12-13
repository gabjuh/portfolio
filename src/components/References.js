import React from "react";
import newTabIco from "../ico/external-link.svg"

export default References = props => {

  const id = props.id
  const links = props.arr

  return (
    <div className="collapse" id={`collapse-${id}`}>
      {links.map((link, i, a) => {
        return (
          <div className="mb-1" key={`ref${i}`}>
            <a 
              className="d-block text-decoration-none ms-2 fs-6 fw-normal text-info"
              href={link}
              target="_blank"
            >                
              {link}
              <img className="ms-2 pb-1" width="18" src={newTabIco} alt="" />
            </a>
          </div>
        )
      })}
    </div>
  )
}