import React from "react";
import * as data from '../js/header.json'
import profileImg from '../img/profil_foto_neu_sm.jpg'

export default Title = () => {

  const header = data.header

  return (
    <>
      <div id="title" className="row ms-0 me-0 pl-0 pr-0 py-sm-5 py-3 position-relative">
        <div id="sticker" className=""><span>{header.jobTitle}</span></div>
        <div className="col-sm-6 order-sm-2 text-center text-sm-start">
          <img id="profile-img" className="rounded-circle" src={profileImg} />
        </div>
        <div id="title-text" className="col-sm-6 order-sm-1 text-center text-sm-end mt-4 mt-sm-0 ">
          <h4 className="text-white">{header.greeting}</h4>
          <h1 id="header-name">{header.name}</h1>
          <h4 id="job-title" className="text-white">{header.jobTitle}</h4>
        </div>     
      </div>
    </>
  )
}