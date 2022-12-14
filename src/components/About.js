import React from "react";
import * as data from "../js/header.json"

export default About = props => {

  const header = data.header[props.currentLanguage]

  return (
    <>
      <div className="mx-2 mx-sm-0">
        <div className="container-md col-lg-10 bg-white mt-2 px-md-5 px-sm-0 py-5 rounded shadow">
          <div className="container col mx-auto mt-3">
            <h4 className="bg-info text-white rounded-pill d-inline px-3">{header.aboutTitle}</h4>
            <p className="mt-3" id="about-text">{header.aboutText}</p>
          </div>
        </div>
      </div>
    </>
  )
}