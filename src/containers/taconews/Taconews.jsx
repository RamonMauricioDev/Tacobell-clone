import React from 'react'
import './taconews.css'

const Taconews = () => {
  return (
    <div>
      <header className='taconews__header'>
        <h4>Our news</h4>
        <h2>Taco news</h2>
      </header>
      <div className='taconews__grid'>
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">dec 02, 2021</h6>
            <h4 className="taconews__title">Taco Bell offers
            A Cheesy surprise for its consumers with the launch of the Ultimate</h4>
            <a href="#" className='taconews__readmore'>Read more </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Taconews