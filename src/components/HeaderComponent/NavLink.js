import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import ArrowDark from "../../assets/icon-arrow-dark.svg";
import ArrowLight from "../../assets/icon-arrow-light.svg"; 

import classes from "./NavLink.module.css";
const NavLink = (props) => {
  const [sublinksOpen, setSublinksOpen] = useState(false);
  const handleToggleSublinks = () => {
    setSublinksOpen(prevState => !prevState); 
  }
  const isDesktop = useMediaQuery("(min-width: 750px)"); 
  return (
    <div className={classes.navSection}>
      <div className={classes.topLink} onClick={handleToggleSublinks}>
        <p className={sublinksOpen ? classes.open : ''}>{props.title}</p>
        <span >
          <img src={`${isDesktop ? ArrowLight : ArrowDark}`} alt="" className={sublinksOpen ?classes.rotate : ''}/>
        </span>
      </div>

      {sublinksOpen && (
        <div className={classes.subLinks}>
          <ul>
            {props.sublinks.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavLink;
