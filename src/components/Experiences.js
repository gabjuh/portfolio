import React from "react";
import Jobs from './Jobs'
import Schools from './Schools'
import * as data from '../js/experiences.json';

export default Experiences = props => {

  const language = props.currentLanguage
  const jobs = data.jobs
  const schools = data.schools

  return (
    <div className="px-2 px-sm-0">
      <div className="py-4 px-sm-4 px-1 py-5">
        <div className="container-md col-lg-10 bg-white mt-5 px-md-5 px-1 py-5 rounded shadow">
          <div className="container col mx-auto">
            <div className="p-lg-5" id="experiences">
              <h1 className="mb-4 ">
                {props.currentLanguage === 'en' ? 'Job Experience' : 'Job Erfahrungen'}
              </h1>
              <Jobs jobs={jobs} currentLanguage={language} />
              <h1 className="mt-5 mb-4 ">
              {props.currentLanguage === 'en' ? 'Schools' : 'Ausbildung'}
              </h1>
              <Schools schools={schools} currentLanguage={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}