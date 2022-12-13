import React from "react";
import Job from "./Job"

export default Jobs = props => {

  return (
    <>
      {props.jobs.map((job, i, a) => {
        
        return (
          <div id="jobs">
            <Job 
              key={job.id}
              data={job} 
              i={i}
              a={a}
            />
          </div>
        )
      })}
    </>
  );
}