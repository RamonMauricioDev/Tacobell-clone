import React from 'react'
import './ourmenu.css'
import Burrito from './ourmenu images/burrito.webp';
import Best_of_bell from './ourmenu images/best_of_bell.webp';
import Meals from './ourmenu images/meals.webp';
import Quesadilha from './ourmenu images/quesadilha.webp';
import Specialties from './ourmenu images/specialties.webp';
import Taco from './ourmenu images/taco.webp';

const Ourmenu = () => {
  return (
    <div className='ourmenu__div'>
      <h4>Our menu</h4>
      <h3>The line-up</h3>
      <section class="menu__grid">
        <a className='menu__container'>
          <img src={Taco} alt="" className='image__responsive'/>
          <p>Taco</p>
        </a>
        <a className="menu__container">
          <img src={Burrito} alt="" className='image__responsive'/>
          <p>Burrito</p>
        </a>
        <a className="menu__container">
          <img src={Best_of_bell} alt="" className='image__responsive'/>
          <p>Best of bell</p>
        </a>
        <a className="menu__container">
          <img src={Specialties} alt="" className='image__responsive'/>
          <p>Specialities</p>
        </a>
        <a className="menu__container">
          <img src={Quesadilha} alt="" className='image__responsive'/>
          <p>Quesadilha</p>
        </a>
        <a className="menu__container">
          <img src={Meals} alt="" className='image__responsive'/>
          <p>Meals</p>
        </a>
      </section>
    </div>
  )
}

export default Ourmenu