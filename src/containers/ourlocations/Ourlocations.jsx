import React from 'react'
import './ourlocations.css'
import deg from './ourlocations images/360-degrees.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Ourlocations = () => {
  return (
    <div className='ourlocation__container'>
      <div className='ourlocation__content'>
          <div className='ourlocation__info'>
            <h4>Our Restaurants</h4>
            <h2>CONNAUGHT PLACE, DELHI</h2>
          </div>
          <div className='ourlocation__interaction'>
            <div className='ourlocation__buttons'>
              <button><FontAwesomeIcon icon={faAngleLeft} color="#fff" size='2x'/></button>
              <button><FontAwesomeIcon icon={faAngleRight} color="#fff" size='2x'/></button>
            </div>
            <div>
              <a href="" className='ourlocation__360'>
                  <p>Click here to see</p>
                  <img src={deg}></img>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ourlocations