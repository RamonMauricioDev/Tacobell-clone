import React from 'react';
import './banner.css'
import image_one from './bannerImages/TUCT_Meal.webp';
import image_two from './bannerImages/WebsiteHomepage.webp';
import image_three from './bannerImages/BestOfBell.webp';

const Banner = () => {
  return (
  <div>
      <img src={image_one} alt="" className='Banner__image'/>
  </div>
  )
};

export default Banner;
