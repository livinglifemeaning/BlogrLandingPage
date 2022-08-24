import React from "react";
import Phones from "../assets/illustration-phones.svg";
const SectionTwo = ({ paragraphs }) => {
  return (
    <div className="flexContainer sectionTwo">
      <div className="animationBox">
        <div className="shapes"> 
        <div className="innerCircle"></div>
        <div className="outerCircle one"></div>
        <div className="outerCircle two"></div>
        </div>
      </div>
      <div className="imgCard">
        <img src={Phones} alt="Editor illustration" />
      </div>
      <div className="textCards">
        <div className="textCard">
          <h3 className="title big">State of the Art Infrastructure</h3>
          <p>{paragraphs.par3}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
