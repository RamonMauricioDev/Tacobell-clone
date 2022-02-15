import React from 'react'
import './taconews.css'
import principal__photo from "./taconews images/ultimate-taco.webp"
import CheesyWeen from "./taconews images/Cheesyween.webp"
import campaingkv from './taconews images/campaign-kv.webp'
import grilled from './taconews images/Grilled-cheese.webp'
import tacoparty from './taconews images/Tacoparty-fest.webp'

const News = () => (
  <>
    <div className='taconews taconews__principal'>
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

    <div className='taconews'>
      <div className='taconews__photo-normal' style={{backgroundImage: `url(${CheesyWeen})`}}></div>
      <div className='taconews__info-normal'>
        <h4 className='taconews__date'>nov 02, 2021</h4>
        <a href="#" className="taconews__title">
          Taco bell goes a step ahead throws a unique cheesyween party for its customers on Halloween </a>
      </div>
    </div>

    <div className='taconews'>
      <div className='taconews__photo-normal' style={{backgroundImage: `url(${campaingkv})`}}></div>
      <div className='taconews__info-normal'>
        <h4 className='taconews__date'>oct 04, 2021</h4>
        <a href="#" className="taconews__title">
        Taco Bell hits the ultimate six this cricketing season with See A Six, Catch a Taco</a>
      </div>
    </div>
    
    <div className='taconews'>
      <div className='taconews__photo-normal' style={{backgroundImage: `url(${grilled})`}}></div>
      <div className='taconews__info-normal'>
        <h4 className='taconews__date'>oct 01, 2021</h4>
        <a href="#" className="taconews__title">
        Taco Bell introduces Grilled Cheese Burrito & Quesadilla</a>
      </div>
    </div>

    <div className='taconews'>
      <div className='taconews__photo-normal' style={{backgroundImage: `url(${tacoparty})`}}></div>
      <div className='taconews__info-normal'>
        <h4 className='taconews__date'>aug 05, 2021</h4>
        <a href="#" className="taconews__title">
        Taco Bell delights fans, introduces new 'Taco Party Feast'</a>
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
        <a href="#" className='taconews__seemore'>See more news</a>
      </div>
      <div className='taconews__grid'>
        <News></News>
      </div>
    </div>
  )
}

export default Taconews