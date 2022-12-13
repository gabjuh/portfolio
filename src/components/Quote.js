import React from "react";
import * as data from "../js/header.json"

export default Quote = () => {

  const header = data.header

  return (
    <>
      <div id="quote" className="container col-lg-10">
        <figure className="text-end text-white mt-5 py-1 pe-md-5">
          <blockquote className="blockquote">
            {header.quoteLine1}
            <br />
            {header.quoteLine2}
          </blockquote>
        </figure>
      </div>
    </>
  )

}