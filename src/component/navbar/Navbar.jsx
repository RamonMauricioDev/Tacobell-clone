import React from 'react';
import Logo from './images/logo.png'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt='tacobell-logo'/>
      <ul>
        <li><a>OUR FOOD</a></li>
        <li><a>FIND US</a></li>
        <li><a>NUTRITION</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>WHAT'S NEW</a></li>
        <li><a>MORE+</a></li>
      </ul>
    </div>
    )
};

export default navbar;
