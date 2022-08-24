import React from "react";
import HeaderNav from "./HeaderNav";
import Heading from "./Heading";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.animationBox}>
        <div className={classes.shapes}>
          <div className={classes.circle} />
          <div className={`${classes.square} ${classes.square1}`} />
          <div className={`${classes.square} ${classes.square2}`} />
        </div>
      </div>
      <div className={classes.contentBox}>
        <HeaderNav />
        <Heading />
      </div>
    </div>
  );
};

export default Header;
