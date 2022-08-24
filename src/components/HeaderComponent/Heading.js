import React from "react";
import classes from "./Heading.module.css";
const Heading = () => {
  return (
    <div>
      <h1 className="title">A modern publishing platform</h1>
      <p className={classes.subtitle}>
        Grow your audience and build your online brand
      </p>
      <div className={classes.btnBox}>
        <button className="btn heading">Start for Free</button> 
        <button className="btn transparent">Learn More</button>
      </div>
    </div>
  );
};

export default Heading;
