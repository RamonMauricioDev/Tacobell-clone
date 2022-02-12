import React from 'react'
import './taconews.css'

const Taconews = () => {
  return (
    <div className='taconews__container'>
      <header className='taconews__header'>
        <h4>Our news</h4>
        <h2>Taco news</h2>
      </header>
      <div className='taconews__grid-right'>
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">nov 02, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">
                Tacobell goes a step ahead, throws an unique
                cheesyween party for it's customers on hallowen
              </h4>
            </a>
          </div>
        </div>
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">dec 02, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">Tacobell offers
              a cheesy surprise for its consumers with the launch of the ultimate cheese taco</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Taconews