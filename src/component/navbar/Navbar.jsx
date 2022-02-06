import React from 'react';
import Logo from './images/logo.png'
import './navbar.css'

const navbar = () => {
  return (
    <div className='Navbar__div'>
      <img src={Logo} alt='tacobell-logo' className='Navbar__logo'/>
      <ul className='Navbar__list'>
        <li className='Navbar__item'><a>OUR FOOD</a></li>
        <li className='Navbar__item'><a>FIND US</a></li>
        <li className='Navbar__item'><a>NUTRITION</a></li>
        <li className='Navbar__item'><a>ABOUT US</a></li>
        <li className='Navbar__item'><a>WHAT'S NEW</a></li>
        <li className='Navbar__item'><a>MORE+</a></li>
      </ul>
      <ul className='Navbar__contact'>
        <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/facebook-new.png"/> </a></li>
        <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/material-outlined/25/ffffff/instagram-new--v1.png"/> </a></li>
        <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/twitter.png"/> </a></li>
        <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/delivery--v1.png"/></a></li>
      </ul>
    </div>
    )
};

export default navbar;
