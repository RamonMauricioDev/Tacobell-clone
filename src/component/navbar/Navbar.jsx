import React from 'react';
import Logo from './images/logo.png'
import './navbar.css'

const navbar = () => {
  return (
    <div className='Navbar__div'>
      <img src={Logo} alt='tacobell-logo'/>
      <ul className='Navbar__list'>
        <li className='Navbar__item'><a>OUR FOOD</a></li>
        <li className='Navbar__item'><a>FIND US</a></li>
        <li className='Navbar__item'><a>NUTRITION</a></li>
        <li className='Navbar__item'><a>ABOUT US</a></li>
        <li className='Navbar__item'><a>WHAT'S NEW</a></li>
        <li className='Navbar__item'><a>MORE+</a></li>
      </ul>
    </div>
    )
};

export default navbar;
