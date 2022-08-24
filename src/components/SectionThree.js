import React from 'react'
import LaptopDesktop from "../assets/illustration-laptop-desktop.svg"; 
import LaptopMobile from "../assets/illustration-laptop-mobile.svg"; 
const SectionThree = ({paragraphs, isDesktop}) => {
  return (
        <div className="flexContainer sectionThree">
          <div className="imgCard">
            <img src={isDesktop ? LaptopDesktop : LaptopMobile} alt="Laptop illustration" />
          </div>
          <div className="textCards">
            <div className="textCard">
              <h3 className="title">Free, open, simple</h3>
              <p>{paragraphs.par4}</p>
            </div>
            <div className="textCard">
              <h3 className="title"> Powerful tooling</h3>
              <p>{paragraphs.par5}</p>
            </div>
          </div>
        </div>

  )
}

export default SectionThree
