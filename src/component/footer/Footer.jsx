import React from 'react'
import Logo from './footer image/ColorLogo.webp'
import Discount from './footer image/discount.webp'
import Path from './footer image/path.webp'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='footer__row'>
            <div className='footer__item'>
                <img src={Discount} alt="" />
                <a href="#" className='footer__title'>Special Offers</a>
                <p className='footer__description'>Don't miss out on exclusive offers.</p>
            </div>
            <div className='footer__item'>
                <img src={Path} alt="" />
                <a href="#" className='footer__title'>find taco bell</a>
                <p className='footer__description'>find the nearest taco bell restaurant in your city.</p>
            </div>
        </div>
        <div className='footer__link-row'>
            <a href="#">our food</a>
            <a href="#">find us</a>
            <a href="#">news</a>
            <a href="#">work with us</a>
            <a href="#">what's new</a>
            <a href="#">offers</a>
            <a href="#">about us</a>
            <a href="#">contact us</a>
        </div>
    </div>
  )
}

export default Footer