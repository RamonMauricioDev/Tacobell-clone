import React from 'react'
import './taconews.css'
import principal__photo from "./taconews images/ultimate-taco.webp"
import CheesyWeen from "./taconews images/Cheesyween.webp"

const ResponsiveNews = () => (
  <>
   
  </>
)

const Fullnews = () => (
  <>
    <div className='taconews__principal'>
      <div className='taconews__photo full' style={{backgroundImage: `url(${principal__photo})`}}></div>
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

    <div>
      <div className='taconews__photo-normal' style={{backgroundImage: `url(${CheesyWeen})`}}></div>
      <div className='taconews__info-normal'>
        <h4 className='taconews__date'>nov 02, 2021</h4>
        <a href="#" className="taconews__title">
          Taco bell goes a step ahead throws a unique cheesyween party for its customers on Halloween </a>
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