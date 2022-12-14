import React from "react";
import cvIcon from '../svg/cv.svg'
import domain from "../js/domain";
import * as data from "../js/cv.json"

export default GetCv = props => {

  const cv = data.cv[props.currentLanguage]

  return (
    <>
      <div className="container-lg bg-info text-center py-4" id="get-cv">
        <a className="btn px-4" target="_blank" href={`${domain}src/pdf/Lebenslauf_Gabor_Juhasz.pdf`}>
          <img className="mt-2 d-block mx-auto" src={cvIcon} alt="CV Icon" />
          <span className="d-inline-block text-white fs-4 my-2">{cv.text}</span>
        </a>
      </div>
    </>
  )
}