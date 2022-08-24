import React from "react";

import Logo from "../Logo";
import NavComponents from "./NavComponents";

import classes from "./HeaderNav.module.css"; 

const HeaderNav = () => {
  return (
    <div>
      <div className={classes.top}>
        <Logo />
        <NavComponents />
      </div>
    </div>
  );
};

export default HeaderNav;
