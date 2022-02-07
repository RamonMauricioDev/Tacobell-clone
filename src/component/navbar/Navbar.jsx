import React, {useState} from 'react';
import Logo from './images/logo.png'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
    <li className='Navbar__item'><a>OUR FOOD</a></li>
    <li className='Navbar__item'><a>FIND US</a></li>
    <li className='Navbar__item'><a>NUTRITION</a></li>
    <li className='Navbar__item'><a>ABOUT US</a></li>
    <li className='Navbar__item'><a>WHAT'S NEW</a></li>
    <li className='Navbar__item'><a>MORE+</a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar__div'>
      <div className='Navbar__menu'>
        {toggleMenu 
          ? <div className='Navbar__responsive-menu'>
              <RiCloseLine color="#fff" size={48} onClick={() => setToggleMenu(false)} />
            </div>
          : 
          <div className='Navbar__div'>
            <RiMenu3Line color="#fff" size={48} onClick={() => setToggleMenu(true)} />
            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/ffffff/external-taco-bell-brings-people-together-with-mexican-inspired-food-food-bold-tal-revivo.png"/>
            <img src="https://img.icons8.com/material-rounded/48/ffffff/marker.png"/>
          </div>
        }
        {toggleMenu && (
          <div className='Navbar__menu-container'> 
            <div className='Navbar__menu-container-links'></div>
          </div>
        )}
      </div>
      <div className='Navbar__content'>
        <img src={Logo} alt='tacobell-logo' className='Navbar__logo'/>
        <ul className='Navbar__list'>
            <Menu />
        </ul>
        <ul className='Navbar__contact'>
          <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/facebook-new.png"/> </a></li>
          <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/material-outlined/25/ffffff/instagram-new--v1.png"/> </a></li>
          <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/twitter.png"/> </a></li>
          <li className='Navbar__links'> <a href=""> <img src="https://img.icons8.com/ios-filled/25/ffffff/delivery--v1.png"/></a></li>
        </ul>
      </div>
    </div>
    )
};

export default Navbar;