import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import paragraphs from "../assets/paragraphs.json";
import SectionThree from "./SectionThree";

const Body = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)"); 
  return (
    <div className="body">
      <SectionOne paragraphs={paragraphs} isDesktop={isDesktop}/>
      <SectionTwo paragraphs={paragraphs} />
      <SectionThree paragraphs={paragraphs} isDesktop={isDesktop}/>
    </div>
  );
};

export default Body;
