import React from 'react'
import './taconews.css'

const Taconews = () => {
  return (
    <div className='taconews__container'>
      <header className='taconews__header'>
        <h4>Our news</h4>
        <h3>Taco news</h3>
      </header>
      <div className='taconews__grid'>

      <div className='taco__news principal'>
          <div className='spotlight'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">nov 02, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">
                Tacobell goes a step ahead, throws an unique
                cheesyween party for it's customers on hallowen
              </h4>
            </a>
            <p className='taconews__description'>
                Taco Bell, the world’s leading Mexican-inspired restaurant brand, brings another delightful cheesy surprise for its consumers after the Grilled Cheese Burrito & Quesadilla, with the launch of The Ultimate Cheese Taco.
                <br />
                <br />
                Filled with the goodness of cheese, The Ultimate Cheese Taco is sure to satisfy all your cheesy cravings. A cheese lover’s delight.
              </p>
          </div>
        </div>
        {/*
        Up-left
        */}
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
        
        {/*
        Up-right      
        */}
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">oct 04, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">
                Taco Bell hits the ultimate six this cricketing season with See A Six, Catch a Taco 
              </h4>
            </a>
          </div>
        </div>
        {/*
        Down-left   
        */}
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">oct 1, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">
                Taco Bell introduces Grilled Cheese Burrito & Quesadilla
              </h4>
            </a>
          </div>
        </div>
        {/*
        Down-right
        */}
        <div className='taco__news'>
          <div className='taconews__photo'></div>
          <div className='taconews__info'>
            <h6 className="taconews__date">aug 05, 2021</h6>
            <a href="#">
              <h4 className="taconews__title">
                Taco Bell delights fans, introduces new 'Taco Party Feast' 
              </h4>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Taconews