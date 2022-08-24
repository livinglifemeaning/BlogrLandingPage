import React from 'react'
import Logo from './Logo';
const PRODUCTS_ARRAY = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Feautures",
    "Integrations",
  ];
  const COMPANY_ARRAY = ["About", "Team", "Blog", "Careers"];
  const CONNECT_ARRAY = ["Contact", "Newsletter", "LinkedIn"];

const Footer = () => {
  return (
    <div className='footer'>
      <Logo/>

      <div className="navBox">
        <p>Product</p>
        <ul className='sublinks'>
            {PRODUCTS_ARRAY.map((el) => (
              <li>{el}</li>
            ))} 
        </ul>
      </div>

      <div className="navBox">
        <p>Company</p>
        <ul className='sublinks'>
            {COMPANY_ARRAY.map((el) => (
              <li>{el}</li>
            ))} 
        </ul>
      </div>

      <div className="navBox">
        <p>Connect</p>
        <ul className='sublinks'>
            {CONNECT_ARRAY.map((el) => (
              <li>{el}</li>
            ))} 
        </ul>
      </div>

    </div>
  )
}

export default Footer
