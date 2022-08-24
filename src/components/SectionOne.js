import React from 'react'
import EditorMobile from "../assets/illustration-editor-mobile.svg";
import EditorDesktop from "../assets/illustration-editor-desktop.svg"; 
const SectionOne = ({paragraphs, isDesktop}) => {
  return (
    <div className="sectionOne">
        <h3 className="title big">Designed for the future</h3>
        <div className="flexContainer sectionOne">
          <div className="imgCard">
            <img src={isDesktop ? EditorDesktop :EditorMobile} alt="Editor illustration" />
          </div>
          <div className="textCards">
            <div className="textCard">
              <h3 className="title">Introducing an extensible editor</h3>
              <p>{paragraphs.par1}</p>
            </div>
            <div className="textCard">
              <h3 className="title"> Robust content management</h3>
              <p>{paragraphs.par2}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionOne
