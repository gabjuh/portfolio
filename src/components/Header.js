import React from "react";
import Title from "./Title"
import About from "./About"
import Quote from "./Quote"

export default Header = props => {
  return (
    <>
      <div className="py-4 px-sm-4 px-1 pb-5">
        <Title currentLanguage={props.currentLanguage} setLanguage={props.setLanguage} />
        <About currentLanguage={props.currentLanguage}/>
        <Quote currentLanguage={props.currentLanguage}/>
      </div>
    </>
  )
}