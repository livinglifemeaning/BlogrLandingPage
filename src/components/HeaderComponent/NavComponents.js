import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery"; 
import HamburgerMenu from "./HamburgerMenu";
import NavLink from "./NavLink";
import classes from "./NavComponents.module.css";

const PRODUCTS_ARRAY = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Feautures",
  "Integrations",
];
const COMPANY_ARRAY = ["About", "Team", "Blog", "Careers"];
const CONNECT_ARRAY = ["Contact", "Newsletter", "LinkedIn"];

const NavComponents = () => {
  const [navOpen, setNavOpen] = useState();
  
  const handleToggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };
  const isDesktop = useMediaQuery("(min-width: 750px)"); 

  useEffect(() => {
    if(isDesktop){
      setNavOpen(true); 
    } else{
      setNavOpen(false); 
    }
  }, [isDesktop])

  return (
    <React.Fragment>
      {!isDesktop && <HamburgerMenu onClick={handleToggleNav} navOpen={navOpen} /> }
      {navOpen && (
        <div className={`${classes.navBox} ${isDesktop ? classes.desktop : classes.mobile}`}>
          <div>
          <NavLink title="Products" sublinks={PRODUCTS_ARRAY} />
          <NavLink title="Company" sublinks={COMPANY_ARRAY} />
          <NavLink title="Connect" sublinks={CONNECT_ARRAY} />
          </div>
          {!isDesktop && <div className={classes.seperationLine} />}
          <div>
          <p className={classes.login}>Login</p>
          <button className="btn nav">Sign Up</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default NavComponents;
