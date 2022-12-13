import React from "react";
import * as data from "../js/footer.json"
import envelope from '../svg/envelope.svg'

export default Footer = () => {

  const footer = data.footer

  return (
    <>
      <div className="container text-center bg-light mb-5 text-secondary" id="footer">
        <div className="d-flex justify-content-center p-2 my-3">
          <p className="d-flex fs-5 text-white">
            <span>{footer.copyright}</span>
            <a className="d-flex" id="send-email" href="mailto:mailto:adgbe@yahoo.de">
              <img className="ms-3" src={envelope} alt="Envelope Email" />
            </a>
          </p>
        </div>
      </div>
    </>
  )
}