import React from "react";
import Tech from './Tech'
import References from "./References";
import ButtonReferences from "./Button-References";
import { setTimeperiod, skipLastBorder } from "../js/helpers";
import calendarIcon from '../svg/calendar.svg'
import locationIcon from '../svg/location.svg'
import domain from "../js/domain";
import newTabIco from "../ico/external-link.svg"

export default Job = props => {

  const data = props.data
  let reference = []
  let recommendation = ''
  
  if (data.hasOwnProperty('reference')) reference = data.reference
  
  if (data.hasOwnProperty('recommendation')) {
    recommendation = (
      <a 
        className="d-inline-flex text-decoration-none ms-2 fs-6 fw-normal text-info" 
        href={`${domain}src/pdf/${data.recommendation}`} 
        target="_blank"
      >
        {props.currentLanguage === 'en' ? 'Letter of Recommendation' : 'Empfehlungsbrief'}
        <img className="ms-2 mt-1" width="18" height="18" src={newTabIco} alt="" />
      </a>
    )
  }
  return (
    <>
      <span className="d-block fw-bold mt-3 mb-2 fs-5 experiences-title">
        {data.title}
        {typeof data.recommendation !== 'undefined' ? recommendation : null}
        {typeof data.reference !== 'undefined' ? <ButtonReferences id={data.id} currentLanguage={props.currentLanguage} /> : null}
      </span>
      {reference.length > 0 ? <References id={data.id} arr={reference}/> : null}
      <div className={`row mb-3 pb-3 ${skipLastBorder(props.i, props.a)}`}>
        <div className="col-7 mt-3">
          <img className="location-ico pe-2" src={locationIcon}/>
          <span className="fst-italic pe-2 experiences-location">{data.location}</span>
          <div className="d-flex flex-wrap d-sm-inline my-2">
            <Tech tech={data.tech}/>
          </div>
        </div>
        <div className="col-5 mt-3 text-end whitespace-nowrap">
          <img className="calender-ico" src={calendarIcon}/>
          <span className="ps-2 experiences-timeperiod">{setTimeperiod(data.start, data.end)}</span>
        </div>
      </div>
    </>
  )
}