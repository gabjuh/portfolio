import React from "react";
import Title from "./Title"
import About from "./About"
import Quote from "./Quote"

export default Header = () => {
  return (
    <>
      <div className="py-4 px-sm-4 px-1 pb-5">
        <Title />
        <About />
        <Quote />
      </div>
    </>
  )
}