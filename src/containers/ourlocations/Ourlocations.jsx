import React from 'react'
import './ourlocations.css'
import Delhi from './ourlocations images/Delhi.jpg';

const Ourlocations = () => {
  return (
    <div className='Ourlocations__container'>
        <p className='Location__info'>
            <h4>Our Restaurants</h4>
            <h2>Connaught Place, Delhi</h2>
        </p>
        <a href="#">Click here to see 360deg</a>
    </div>
  )
}

export default Ourlocations