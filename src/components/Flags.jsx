import { disconnect } from "process";
import react from "react";
import { useEffect } from "react";
import Flag from "./Flag";

const Flags = props => {

  const addSelectedClassIfSelected = (id, classname) => 
    props.currentLanguage != id ? classname : ''

  const svgs = document.querySelectorAll('#languages svg')

  const showSelectedFlag = () => svgs.forEach(svg => {
    svg.id === props.currentLanguage ? 
    svg.classList.remove('unselectedFlag') :
    svg.classList.add('unselectedFlag')
  })

  useEffect(() => {
    showSelectedFlag()
  }, [props.currentLanguage])

  const flagSvgs = language => {
    switch(language) {
      case 'hu': 
        return (
          <svg onClick={() => props.setLanguage('hu')} xmlns="http://www.w3.org/2000/svg" id="hu" viewBox="0 0 640 480">
            <g fill-rule="evenodd">
              <path fill="#fff" d="M640 480H0V0h640z"/>
              <path fill="#388d00" d="M640 480H0V320h640z"/>
              <path fill="#d43516" d="M640 160.1H0V.1h640z"/>
            </g>
          </svg>
        )
  
      case 'de':
        return(
          <svg onClick={() => props.setLanguage('de')} xmlns="http://www.w3.org/2000/svg" id="de" viewBox="0 0 640 480">
            <path fill="#ffce00" d="M0 320h640v160H0z"/>
            <path d="M0 0h640v160H0z"/>
            <path fill="#d00" d="M0 160h640v160H0z"/>
          </svg>
        )
  
      case 'en': 
        return(
          <svg onClick={() => props.setLanguage('en')} className="flagSvg unselectedFlag" xmlns="http://www.w3.org/2000/svg" id="en" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
          </svg>
        )
    }   
  }

  return (
    <>
      <Flag id='de' currentLanguage={props.currentLanguage} setLanguage={props.setLanguage}>
        {flagSvgs('de')}
        {showSelectedFlag()}
      </Flag> 
      <Flag id='en' currentLanguage={props.currentLanguage} setLanguage={props.setLanguage}>
        {flagSvgs('en')}
        {showSelectedFlag()}
      </Flag>
      {/* <Flag id='hu' currentLanguage={props.currentLanguage} setLanguage={props.setLanguage}>
        {flagSvgs('hu')}
      </Flag> */}
    </>
  )
}

export default Flags