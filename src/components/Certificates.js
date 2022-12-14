import React from "react";
import * as data from '../js/certificates.json'

export default Certificates = props => {

  const certificates = data.certificates[props.currentLanguage]

  return (
    <div className="bg-white" id="certificates-box">
      <div className="px-lg-5">
        <h1 className="text-center mt-3 mb-5" >
          {props.currentLanguage === "en" ? 'Certificates' : 'Zertifikate'}
        </h1>
        <div className="container col col-xl-10 mx-auto mb-4 row" id="certificates">
          
          {certificates.map((certificate, a, i) => {
            return (
              <div className="col-lg-6" key={certificate.id}>
                <div className="d-flex my-4">
                  <img className="certificate-images me-5 mt-1" src={certificate.icon} alt={`Certificate Icon - ${certificate.id}`} />
                  <div>
                    <h3 className="d-block">{certificate.title}</h3>
                    <a className="btn btn-info text-white mt-1" href={certificate.file} target="_blank" download>
                      {props.currentLanguage === "en" ? 'Download Certificate' : 'Zertifikat herunterladen'}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
      
  )
}