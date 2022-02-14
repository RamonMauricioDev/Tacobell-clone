import React from 'react'
import './taconews.css'

const ResponsiveNews = () => (
  <>
   
  </>
)

const Fullnews = () => (
  <>
    <div>
      <div className='taconews__photo fullnew'>

      </div>
      <div className='taconews__info full'>
        <h4 className='taconews__date'>dec 02, 2021</h4>
        <a href="#" className='taconews__title'>Tacobell offers a cheesy surprise for its consumers with the launch of the ultimate cheese taco</a>
        <p className="taconews__description">
        Taco Bell, the world’s leading Mexican-inspired restaurant brand, brings another delightful cheesy surprise for its consumers after the Grilled Cheese Burrito & Quesadilla, with the launch of The Ultimate Cheese Taco.
        <br /> <br />
        Filled with the goodness of cheese, The Ultimate Cheese Taco is sure to satisfy all your cheesy cravings. A cheese lover’s delight.
        </p>
      </div>
    </div>
  </>
)

const Taconews = () => {
  return (
    <div className='taconews__container'>
      <div className='taconews__header'>
        <h4 className='tacobell-h4'>Our news</h4>
        <h3 className='tacobell-h3'>Taco news</h3>
      </div>
      <div className='taconews__grid'>
        <Fullnews></Fullnews>
      </div>
    </div>
  )
}

export default Taconews