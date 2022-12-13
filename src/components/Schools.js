import React from "react";
import School from "./School"

export default Schools = props => {
  
  return (
    <>
      {props.schools.map((t, i, a) => {
        return (
          <div id="schools">
            <School 
              key={`school${i}`}
              data={t} 
              i={i}
              a={a}
            />
          </div>
        )
      })}
    </>
  );
}