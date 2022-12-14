import React from "react";
import Job from "./Job"

export default Jobs = props => {
  console.log(props.jobs[props.currentLanguage])
  return (
    <>
      {props.jobs[props.currentLanguage].map((job, i, a) => {
        
        return (
          <div id="jobs">
            <Job 
              key={job.id}
              data={job} 
              i={i}
              a={a}
              currentLanguage={props.currentLanguage}
            />
          </div>
        )
      })}
    </>
  );
}