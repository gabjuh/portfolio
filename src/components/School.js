import React from "react";
import Tech from './Tech'
import { setTimeperiod, skipLastBorder } from "../js/helpers";
import calendarIcon from '../svg/calendar.svg'

export default School = props => {

  const data = props.data
  
  return (
    <>
      <span className="d-block fw-bold mt-3 mb-2 fs-5 experiences-title">{data.title}</span>
      <div className={`row mb-3 pb-3 ${skipLastBorder(props.i, props.a)}`}>
        <div className="col-7">
          <span className="fst-italic pe-2 experiences-school">{data.school}</span>
          <div className="d-flex flex-wrap mt-2">
            <Tech tech={data.tech}/>
          </div>
        </div>
        <div className="position-relative">
          <div className="col-5 position-absolute bottom-0 end-0 text-end whitespace-nowrap">
            <img className="calender-ico" height="20" src={calendarIcon}/>
            <span className="ps-2 experiences-timeperiod">{setTimeperiod(data.start, data.end)}</span>
          </div>
        </div>
      </div>
    </>
  )
}