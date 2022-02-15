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
                <h3 className='footer__title'>Special Offers</h3>
                <p className='footer__description'>Don't miss out on exclusive offers.</p>
            </div>
            <div className='footer__item'>
                <img src={Path} alt="" />
                <h3 className='footer__title'>find taco bell</h3>
                <p className='footer__description'>find the nearest taco bell restaurant in your city.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer